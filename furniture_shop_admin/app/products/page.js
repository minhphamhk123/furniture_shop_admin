'use client'

import Link from "next/link";
import Layout from "../../components/Layout";

export default function Products() {
  return(
    <Layout>
      <Link className="bg-blue-900 text-white rounded-md py-1 px-1" href={'/products/new'}>Add new product</Link>
    </Layout>
  );
}