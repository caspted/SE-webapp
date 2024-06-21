import { firestore } from "@/app/utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const query = await getDocs(collection(firestore, "testimonies"));
    const testimonies = query.docs.map((doc) => doc.data());

    return NextResponse.json(testimonies, { status: 200 });
  } catch (err: any) {
    return new NextResponse(err, { status: 500 });
  }
};
