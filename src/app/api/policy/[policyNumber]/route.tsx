import { getPolicyByID } from "@/mockAPI/mockAPI";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  const policyNumber = req?.url?.split("policy/")[1];
  try {
    const response = getPolicyByID({ policyNumber });
    return NextResponse.json(
      { message: `Policy ${policyNumber} fetched`, response },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
