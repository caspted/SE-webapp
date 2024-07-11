import { describe, it, expect, beforeAll, afterAll } from '@jest/globals';
import request from 'supertest';
import { createServer, IncomingMessage, ServerResponse } from 'http';
import { NextApiRequest, NextApiResponse } from 'next';
import { firestore } from '../../utils/firebaseConfig';
import { collection, getDocs, QuerySnapshot, DocumentData } from 'firebase/firestore';

jest.mock('firebase/firestore', () => ({
  ...jest.requireActual('firebase/firestore'), 
  collection: jest.fn(),
  getDocs: jest.fn(),
}));

const handler = async (req: NextApiRequest, res: NextApiResponse<DocumentData[] | { message: string }>) => {
  try {
    const eventsQuery = await getDocs(collection(firestore, 'events'));
    const events = eventsQuery.docs.map(doc => doc.data());
    return res.status(200).json(events);
  } catch (error) {
    console.error('Error fetching events:', error); 
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const createMockResponse = () => {
  const res: Partial<NextApiResponse> = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.end = jest.fn();
  return res as NextApiResponse;
};

const server = createServer(async (req: IncomingMessage, res: ServerResponse) => {
  const mockRes = createMockResponse();
  try {
    await handler(req as NextApiRequest, mockRes);
    res.statusCode = (mockRes.status as jest.Mock).mock.calls[0][0]; 
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify((mockRes.json as jest.Mock).mock.calls[0][0])); 
  } catch (error) {
    console.error('Server error:', error); 
    res.statusCode = 500;
    res.end(JSON.stringify({ message: 'Internal Server Error' }));
  }
});

describe('GET /api/events', () => {
  let originalConsoleError: typeof console.error;

  beforeAll(() => {
    originalConsoleError = console.error;
    console.error = jest.fn();
  });

  afterAll(() => {
    console.error = originalConsoleError;
  });

  it('should fetch events from Firestore', async () => {
    const mockFirestoreResponse: QuerySnapshot<DocumentData> = {
      docs: [{ data: () => ({ id: '1', name: 'Event 1' }) }],
    } as any; 

    (getDocs as jest.Mock).mockResolvedValueOnce(mockFirestoreResponse);

    const response = await request(server).get('/api/events');

    expect(response.status).toBe(200);
    expect(response.body).toEqual([{ id: '1', name: 'Event 1' }]);
  });

  it('should handle errors', async () => {
    (getDocs as jest.Mock).mockImplementationOnce(() => {
      throw new Error('Firestore error');
    });

    const response = await request(server).get('/api/events');

    expect(response.status).toBe(500);
    expect(response.body).toEqual({ message: 'Internal Server Error' });
    
  });

  it('should handle empty events list from Firestore', async () => {
    const mockFirestoreResponse: QuerySnapshot<DocumentData> = {
      docs: [],
    } as any; 
  
    (getDocs as jest.Mock).mockResolvedValueOnce(mockFirestoreResponse);
  
    const response = await request(server).get('/api/events');
  
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it('should handle Firestore network error', async () => {
    (getDocs as jest.Mock).mockRejectedValueOnce(new Error('Network error'));
  
    const response = await request(server).get('/api/events');
  
    expect(response.status).toBe(500);
    expect(response.body).toEqual({ message: 'Internal Server Error' });
  });
  
  it('should handle Firestore permission error', async () => {
    (getDocs as jest.Mock).mockRejectedValueOnce(new Error('Permission denied'));
  
    const response = await request(server).get('/api/events');
  
    expect(response.status).toBe(500);
    expect(response.body).toEqual({ message: 'Internal Server Error' });
  });
  
});
