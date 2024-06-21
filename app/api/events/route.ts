import { firestore } from "@/app/utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const query = await getDocs(collection(firestore, "events"));
    const events = query.docs.map((doc) => doc.data());

    return NextResponse.json(events, { status: 200 });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Internal Server Error'
    return new NextResponse(errorMessage, { status: 500 });
  }
};
