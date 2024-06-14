import { firestore } from "@/app/utils/firebase";
import { collection, getDocs, query } from "firebase/firestore";

export const GET = async (req: Request) => {
  try {
    const query = await getDocs(collection(firestore, "events"));
    const events = query.docs.map((doc) => doc.data());

    return Response.json(events, { status: 200 });
  } catch (err: any) {
    return new Response(err, { status: 500 });
  }
};
