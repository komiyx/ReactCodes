import React from 'react'
import { useParams,Link } from 'react-router-dom'
import products from '../productdata';

export default function SingleContact() {

    const {contactId} = useParams();
    const product = products.find((product) => product.id === contactId);
    const {id,image, name} = product;
  return (
    <div>
        <h5>{id}</h5>
        <h2>{name}</h2>
        <img src={image} ></img>
        <Link to='/contact'>back to contact</Link>
    </div>
  )
}
