'use client'
import Layout from "../../../../components/Layout";
import {useRouter, useParams} from "next/navigation";
import {useEffect, useState} from "react";
import axios from "axios";

export default function DeleteProductPage() {
  const pathName = useParams();
  const router = useRouter();
  const [productInfo,setProductInfo] = useState();
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

  function goBack() {
    router.push('/products');
  }
  async function deleteProduct() {
    await axios.delete('/api/products', { data: { id } });
    goBack();
  }
  return (
    <Layout>
      <h1 className="text-center">Do you really want to delete
        &nbsp;&quot;{productInfo?.title}&quot;?
      </h1>
      <div className="flex gap-2 justify-center">
        <button
          onClick={deleteProduct}
          className="btn-red">Yes</button>
        <button
          className="btn-default"
          onClick={goBack}>
          NO
        </button>
      </div>
    </Layout>
  );
}