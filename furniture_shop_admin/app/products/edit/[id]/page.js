'use client'
import Layout from "../../../../components/Layout";
import {useRouter, useParams} from "next/navigation";
import {useEffect, useState} from "react";
import axios from "axios";
import ProductForm from "../../../../components/ProductForm";

export default function EditProductPage() {
  const [productInfo, setProductInfo] = useState(null);
  const router = useRouter();
  const pathName = useParams();
  const {id} = pathName;
  //console.log(id)

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get('/api/products?id='+id).then(response => {
      setProductInfo(response.data.products);
    });
  }, [id]);
  return (
    <Layout>
      <h1>Edit product</h1>
      {productInfo && (
        <ProductForm {...productInfo} />
      )}
    </Layout>
  );
}