import React from 'react'
import Hoc from './HOC/Hoc'

const Product = (props) => {
    console.log(props);
    
  return (
    <div>Product</div>
  )
}

export default Hoc(Product)