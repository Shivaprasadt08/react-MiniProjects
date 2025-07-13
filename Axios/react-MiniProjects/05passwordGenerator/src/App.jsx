import { useState ,useCallback, useEffect, useRef} from 'react'

import './App.css'
// import { useEffect } from 'react'

function App() {
  const [length, setlenght] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "AFDSPCNBHZXVNMLKOIUYTREWQasfghklmnbvcxzqwetryuiop"
    
    if(numberAllowed) str += '0123456789'
    if(charAllowed) str += '!@#$%^&*_+~?|'

    for(let i = 0; i <length; i++)
    {
       let char = Math.floor(Math.random() * str.length + 1)
       pass += str.charAt(char)
    }

    setPassword(pass);
  } , [length,numberAllowed,charAllowed,setPassword]);

    const copyToClipboard = useCallback(() => {
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0,999);
      window.navigator.clipboard.writeText(password)
    },[password])

    useEffect(() => {
      passwordGenerator()}, [length,numberAllowed,charAllowed,passwordGenerator])
    
     
  return (
    <>
       <div className='w-full max-w- md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-slate-500'>  
       <h1 className = "text-4xl text-center text-cyan my-4">Password Generator</h1>
        <div className='flex shadow-lg overflow-hidden md-4'>
            <input type="text" 
             value={password}  
             className='outline-none w-full py-1 px-3 '
             placeholder = 'password' readOnly
             ref = {passwordRef}
            />

            <button onClick = {copyToClipboard } className='outline-none bg-blue-500 text-white  py-0.5 px-3 shrink-0 my-1'>
              Copy
            </button>
        </div>
            <div className ='flex text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>
                 <input type="range" 
                 min = {6}
                 max = {100}
                 value = {length} 
                 className='cursor-pointer'
                 onChange={(e) => {setlenght(e.target.value)}}
                 />

                 <label> Lenght : {length} </label>
              </div>
              <div className='flex items-center gap-x-1'>
                  <input type="checkbox"
                  defaultChecked = {numberAllowed}
                  id="numberInput"
                  onChange ={() => {
                    setNumberAllowed((prev) => !prev)
                  }}
                  />
                  <label> Numbers  {numberAllowed} </label>

              </div>

              <div className='flex items-center gap-x-1'>
                  <input type="checkbox"
                  defaultChecked = {charAllowed}
                  id="charecterInput"
                  onChange ={() => {
                    setCharAllowed((prev) => !prev)
                  }}
                  />
                  <label > Character {charAllowed} </label>

              </div>
            </div>
       </div>
    </>
  )
}

export default App
