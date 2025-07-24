import React, { Fragment } from 'react'

function Food(props) {
    console.log(props);
    
  return (
    <div>
        {props.data3.recipes.map((items)=>{
            console.log(items);
            return <Fragment>
                <img src={items.image} alt="" />
                <h1>{items.name}</h1>
            </Fragment>
            
        })}
    </div>
  )
}

export default Food