'use client';

import { useState } from "react";
import Layout from "../../../components/Layout";

export default function NewProduct() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  return (
    <Layout>
      <h1>New Product</h1>
      <label>Product name</label>
      <input
        type="text"
        placeholder="product name"
        value={title}
        onChange={ev => setTitle(ev.target.value)} />
      <label>Description</label>
      <textarea placeholder="description"
        value={description}
        onChange={ev => setDescription(ev.target.value)} />
      <label>Price</label>
      <input type="number"
        placeholder="price"
        value={price}
        onChange={ev => setPrice(ev.target.value)} />
      <button className="btn-primary">Save</button>
    </Layout>
  )
}