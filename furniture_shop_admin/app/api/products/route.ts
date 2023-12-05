import { Product } from "../../../models/Product";
import { mongooseConnect } from "../../../lib/mongoose";
import { isAdminRequest } from "../auth/[...nextauth]/route";
import { NextRequest, NextResponse } from "next/server";

//Ham xu ly GET
export async function GET(req: Request, res: Response) {
  console.log("GET PRODUCT REQUEST");
  await mongooseConnect();
  //await isAdminRequest(req, res);
  const url = await req.url;
  const id = url.split('id=')[1];;
  try {
    if (id!=undefined) { 
      //console.log(id);
      const products = await Product.findOne({ _id: id });
      return NextResponse.json({ message: "OK", products }, { status: 200 });
    } else {
      //console.log(id);
      const products = await Product.find();
      return NextResponse.json({ message: "OK", products }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Error", error }.error, {
      status: 500,
    });
  }
}

//Ham xu ly POST
export async function POST(req: Request, res: Response) {
  console.log('POST PRODUCT REQUEST');
  const body = await req.json();
  console.log(body)

  try {
    const {title,description,price,images,category,properties} = body;
    const productDoc = await Product.create({
      title: title,
      description: description,
      price: price,
      images: images,
      category: category,
      properties: properties,
    })
    return NextResponse.json({message: "OK", productDoc}, {status: 200})
  } catch (error) {
    return NextResponse.json({message: "Error", error}.error, {status: 500})
  }
}

// Hàm xử lý PUT
export async function PUT(req: Request, res: Response) {
  console.log('PUT CATEGORY REQUEST');
  const data = await req.json();
  //const { id } = data;

  try {
    const {title,description,price,images,category,properties,_id} = data;
    const productDoc = await Product.updateOne({_id: _id}, {
      title: title,
      description: description,
      price: price,
      images: images,
      category: category,
      properties: properties,
    });
    return NextResponse.json({message: "OK", productDoc}, {status: 200})
  } catch (error) {
    return NextResponse.json({message: "Error",error}.error, {
      status: 500,
    })
  }
}

// Hàm xử lý DELETE
export async function DELETE(req: Request, res: Response) {
  console.log('DELETE PRODUCT REQUEST');
  const data = await req.json();
  const { id } = data;

  try {
    await Product.deleteOne({ _id: id });
    return NextResponse.json({message: "OK", data}, {status: 200})
  } catch (error) {
    return NextResponse.json({message: "Error",error}.error, {
      status: 500,
    })
  }
}
