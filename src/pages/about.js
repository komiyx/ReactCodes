import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'

export default function About() {
  return (
    <div>
        <Navbar/>
        <h1>about</h1>
        <Link to="/" className='btn'>
        back home
        </Link>
    </div>
  )
}
