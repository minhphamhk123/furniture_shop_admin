'use client';
import { useState } from "react";
import Layout from "../../../components/Layout";
import axios from "axios";

export default function NewProduct() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  // async function createProduct(ev) {
  //   ev.preventDefault();
  //   const data = {title,description,price};
    
  //   try {
  //     const response = await axios.post('/api/products', data);
  //     console.log('Response:', response.data);
  //   } catch (error) {
  //     console.error('Error creating product:', error.message);
  //   }
  // }

  async function makeApiCall(ev) {
    ev.preventDefault();
    const res = await fetch('/api/products/route', {
      method: 'POST',
      body: JSON.stringify({hello: 'world' })
    })
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

  return (
    <Layout>
      <form onSubmit={makeApiCall}>
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
      <button type="submit" className="btn-primary">Save</button>
      </form>
    </Layout>
  )
}