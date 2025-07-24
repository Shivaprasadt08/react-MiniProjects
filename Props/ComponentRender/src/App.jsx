import React, { Component } from 'react'
import Cart from './Cart'
import Product from './Product'
import Makeup from './Makeup'
import Data from './Data.json'
export default class App extends Component {
  render() {
    return (
      <div>
        <Cart box ={<Product box1={<Makeup json={Data}></Makeup>}></Product>}></Cart>
      </div>
    )
  }

}

