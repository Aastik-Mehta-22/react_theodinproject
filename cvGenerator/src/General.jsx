import React, { useState } from 'react'

function General() {

  const [name,setName] = useState("");
  const [phno,setPhno] = useState();
  const [email,setEmail] = useState("");


  return (
<div className='flex flex-col items-start w-1/3 mx-4 h-20'>
    <label htmlFor="name">Name: </label>
    <input
        type="text"
        value={name}
        placeholder='Your name'
        onChange={(event) => setName(event.target.value)}
        className='mb-4 p-2 w-full border border-gray-300 rounded-md'
        id='name'
    />

    <br />
    <label htmlFor="phno">Ph No.: </label>
    <input
        type="number"
        id='phno'
        value={phno}
        placeholder='Your Ph.'
        onChange={(event) => setPhno(event.target.value)}
        className='mb-4 p-2 w-full border border-gray-300 rounded-md'
    />
    
    <br />
    <label htmlFor="email">Email: </label>
    <input
        type="email"
        id='email'
        value={email}
        placeholder='Your email'
        onChange={(event) => setEmail(event.target.value)}
        className='mb-4 p-2 w-full border border-gray-300 rounded-md'
    />
</div>

  )
}

export default General
