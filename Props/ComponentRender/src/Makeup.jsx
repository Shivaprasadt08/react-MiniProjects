import React, { Component } from 'react'
import { Fragment } from 'react';

export default class Makeup extends Component {
  render() {
    console.log(this.props);
    
    return (
      <div>
        { 
            this.props.json.products.map((max) => {
                console.log(max);
                
                return <Fragment>
                    <img src={max.images[0]} alt="" />
                </Fragment>
            })
        }
      </div>
    )
  }
}

