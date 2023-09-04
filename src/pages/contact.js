import React from 'react'
import Navbar from '../Navbar'
import products from '../productdata'
import { Link, Routes } from 'react-router-dom';

export default function Contact() {
  return (
    <div>
        <Navbar/>
        <div>
            {products.map((product) =>
            {
              return <article key={product.id}>
                <h5>{product.name}</h5>
                <Link to={`/contact/${product.id}`}>more info</Link>
              </article>
            })}

        </div>
    </div>
  )
}
