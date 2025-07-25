import { useState } from 'react'
import Cart from './cart'
import './App.css'
import Product from './Product'
import Name from './Name'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1><Name></Name></h1>
     <Cart></Cart>
     <Product></Product>
    </>
  )
}

export default App
