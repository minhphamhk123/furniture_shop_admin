import {Category} from '../../../models/Category';
import {mongooseConnect} from '../../../lib/mongoose';
import {getServerSession} from "next-auth";
import {authOptions, isAdminRequest} from '../auth/[...nextauth]/route';
import { NextResponse } from 'next/server';

// Hàm xử lý GET
export async function GET(req: Request, res: Response) {
  console.log('GET CATEGORIES REQUEST');
  await mongooseConnect();
  //await isAdminRequest(req, res);

  try {
    const categories = await Category.find().populate('parent');
    return NextResponse.json({message: "OK", categories}, {status: 200})
  } catch (error) {
    return NextResponse.json({message: "Error",error}.error, {
      status: 500,
    })
  }
}

// Hàm xử lý POST
export async function POST(req: Request, res: Response) {
  console.log('POST CATEGORY REQUEST');
  const body_check = await req.json(); //1.Can co await de cho payload gia tri cho data
  console.log(body_check);

  try {
    const data = body_check; //2.Khi khong co await o tren data se empty khi ma chua lay duoc body_check

    // Create the category document
    const categoryDoc = await Category.create({
      name: data.name, //3.luc do data.name se empty
      parent: data.parentCategory || undefined,
      properties: data.properties || undefined,
    });

    //res.json(categoryDoc);
    return NextResponse.json({message: "OK", categoryDoc}, {status: 200})
  } catch (error) {
    return NextResponse.json({message: "Error",error}.error, {
      status: 500,
    })
  }
}

// Hàm xử lý PUT
export async function PUT(req: Request, res: Response) {
  console.log('PUT CATEGORY REQUEST');
  const body = await req.json();
  console.log(body);

  try {
    const { name, parentCategory, properties, _id } = body;
    const categoryDoc = await Category.updateOne({ _id: _id }, {
      name: name,
      parent: parentCategory || undefined,
      properties: properties || undefined,
    });
    return NextResponse.json({message: "OK", categoryDoc}, {status: 200})
  } catch (error) {
    return NextResponse.json({message: "Error",error}.error, {
      status: 500,
    })
  }
}

// Hàm xử lý DELETE
export async function DELETE(req: Request, res: Response) {
  console.log('DELETE CATEGORY REQUEST');
  const data = await req.json();
  const { _id } = data;
  console.log(data);
  console.log(_id);

  try {
    await Category.deleteOne({ _id: _id });
    return NextResponse.json({message: "OK", data}, {status: 200})
  } catch (error) {
    return NextResponse.json({message: "Error",error}.error, {
      status: 500,
    })
  }
}
