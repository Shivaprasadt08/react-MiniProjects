import React from 'react'

function Product(props) {
    console.log(props);
    
  return (
    <div>
        {props.data1}
    </div>
  )
}

export default Product