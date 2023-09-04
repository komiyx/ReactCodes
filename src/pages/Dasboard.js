import React from 'react'
import Navbar from '../Navbar'

export default function Dasboard({user}) {
  return (
    <section className='section'>
            <Navbar/>
      <h4>Hello, {user?.name}</h4>
    </section>
  )
}
