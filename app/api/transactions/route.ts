import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import { Transaction } from "@/models/transaction";

export async function GET() {
  await dbConnect();
  const data = await Transaction.find({}).sort({ date: -1 }).exec(); // ✅ exec fixes the error
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();

  const tx = await Transaction.create({
    amount: body.amount,
    description: body.description,
    date: new Date(body.date),
  }); // ✅ strict create call

  return NextResponse.json(tx);
}
