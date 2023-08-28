import React, { useState } from 'react'

export default function Test(props) {

    const [name,setname] = useState();

    const handleSubmit =(event) =>
    {
        event.preventDefault();
        console.log('Your name is ' + name)
    }

    return (
        <div>
            <h1>{name}</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your name: 
                    <input type='text' onChange={(e) => {setname(e.target.value)}}/>
                </label>
                <input type='submit'/>
            </form>
        </div>
    )
}
