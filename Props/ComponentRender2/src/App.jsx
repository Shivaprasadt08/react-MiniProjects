import React from 'react'
import Cart from './Cart'
import Food from './Food'
import JSON from './Data.json'
import Product from './Product'
function App() {
  return (
    <div>
      <Cart data={<Product data1={<Food data3={JSON}></Food>}></Product>}></Cart>
    </div>
  )
}

export default App
