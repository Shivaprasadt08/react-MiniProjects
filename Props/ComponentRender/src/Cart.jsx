import React, { Component } from 'react'
import Product from './Product';
export default class Cart extends Component {
  render(props) {
    console.log(this.props);
    
    return (
      <div>
        {this.props.box}
        
      </div>
    )
  }
}
