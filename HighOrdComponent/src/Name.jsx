import React from 'react'
import Hoc from './HOC/Hoc'
const Name = (props) => {
  return (
    <div>My Name is : {props.data}</div>
  )
}

export default Hoc(Name)