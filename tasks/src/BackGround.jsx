import React from 'react'
import { useState } from 'react'
const BackGround = () => {

    let[bgColor, setbgcolor] = useState('white')
  return (
    <div>
        <h1>BackGround Color Changer</h1>
        <div className='border p-4 rounded-lg' style={{ backgroundColor: bgColor }}>
           <div className='space-x-2 mb=4'>
            <button onClick={() => setbgcolor('red')} className='bg-red-500 text-white px-4 py-2 rounded'>Red</button>
            <button onClick={() => setbgcolor('green')} className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400'>Green</button>
            <button onClick={() => setbgcolor('blue')} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400'>Blue</button>
           </div>
            
        </div>


    </div>
  )
}

export default BackGround