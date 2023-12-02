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
    if (id) { 
      //console.log(id);
      const products = await Product.findOne({ _id: id });
      return NextResponse.json({ message: "OK", products }, { status: 200 });
    } else {
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
// export default async function handle(req, res) {
//   const {method} = req;
//   await mongooseConnect();
//   await isAdminRequest(req,res);

//   if (method === 'GET') {
//     if (req.query?.id) {
//       res.json(await Product.findOne({_id:req.query.id}));
//     } else {
//       res.json(await Product.find());
//     }
//   }

//   if (method === 'POST') {
//     const {title,description,price/*,images,category,properties*/} = req.body;
//     const productDoc = await Product.create({
//       title,description,price,
//     })
//     res.json(productDoc);
//   }

//   if (method === 'PUT') {
//     const {title,description,price,images,category,properties,_id} = req.body;
//     await Product.updateOne({_id}, {title,description,price,images,category,properties});
//     res.json(true);
//   }

//   if (method === 'DELETE') {
//     if (req.query?.id) {
//       await Product.deleteOne({_id:req.query?.id});
//       res.json(true);
//     }
//   }
// }
