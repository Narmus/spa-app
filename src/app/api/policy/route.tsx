import { getAllPolicies, postNewPolicy } from "@/mockAPI/mockAPI";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    const policies = getAllPolicies();
    return NextResponse.json(
      { message: "All Policies Fetched", policies },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};

export const POST = async (req: Request, res: Response) => {
  const data = await req.json();
  try {
    postNewPolicy({data});
    return NextResponse.json(
      { message: "Post Success", data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
