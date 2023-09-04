import React from 'react'
import { people } from './Data'

export default function List() {
  
    const listitems = people.map(person =>
        
        <li key={person.id}>

            <p><b>{person.name}</b></p>
            <p>{person.profession}</p>
        </li>
        
        )
  
    return <ul>{listitems}</ul>
 
}
