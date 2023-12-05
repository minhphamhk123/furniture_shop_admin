import { NextResponse } from "next/server";
import { mongooseConnect } from "../../../lib/mongoose";
import {Order} from "../../../models/Order";

// export default async function handler(req,res) {
//   await mongooseConnect();
//   res.json(await Order.find().sort({createdAt:-1}));
// }

export async function GET(req: Request, res: Response) {
  console.log("GET ORDER REQUEST");
  await mongooseConnect();

  try {
    const orders = await Order.find().sort({createdAt:-1});
    return NextResponse.json({message: "OK", orders}, { status: 200})
  } catch (error) {
    return NextResponse.json({ message: "Error", error }.error, {
      status: 500,
    });
  }
}