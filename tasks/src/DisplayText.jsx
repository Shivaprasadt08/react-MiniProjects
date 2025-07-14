import React, { useState } from 'react'

const DisplayText = () => {
    let[iptext,setIptext] = useState('');
    let[dt,setDt] = useState('');

  return (
    <div>
        <input type="text" 
        value={iptext}
        onChange={(e) => setIptext(e.target.value)}
        placeholder='type something....'

        />
        <button className='bg-blue-300 center px-1 py-1'onClick={() => {setDt(iptext)}}>Display</button>
        <p>{dt}</p>
        <button className='bg-amber-500 center px-1 py-1' onClick={() => {setIptext(''); setDt('')}}> Clear </button>
    </div>
  )
}

export default DisplayText

