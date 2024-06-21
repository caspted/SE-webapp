import { firestore } from "@/app/utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const GET = async (req: Request) => {
  try {
    const query = await getDocs(collection(firestore, "testimonies"));
    const testimonies = query.docs.map((doc) => doc.data());

    return Response.json(testimonies, { status: 200 });
  } catch (err: any) {
    return new Response(err, { status: 500 });
  }
};
