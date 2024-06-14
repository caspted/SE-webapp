import { firestore } from "@/app/utils/firebase"
import { collection, getDocs } from "firebase/firestore"

export const GET = async (req: Request) => {
  try {
    const query = await getDocs(collection(firestore, "projects"))
    const projects = query.docs.map((doc) => doc.data());

    return Response.json(projects, {status: 200})
  } catch (err: any) {
    return new Response(err, {status : 500})
  }
}