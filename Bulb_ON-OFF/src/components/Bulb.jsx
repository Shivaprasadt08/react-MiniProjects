import React, { Component } from 'react'

export default class Bulb extends Component {
     constructor(){
      super()
         this.state = {
            src:"https://toppng.com/uploads/preview/light-bulb-on-off-png-115539402943y50vxr5yi.png",
         state: true,
     }
   }

    imageBulbOn = () => {
        this.setState({
        src: "https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940186lbyqngqg1y.png",
        state: false
        })
    }
    imageBulbOff = () => {
        this.setState({
        src: "https://toppng.com/uploads/preview/light-bulb-on-off-png-115539402943y50vxr5yi.png",
        state: true
        })
    }
  render() {
    return (
            <>
            <img src={this.state.src} alt="" />
            <br /> <br />
            {this.state.state ? <button onClick={this.imageBulbOn}> On</button>: <button onClick={this.imageBulbOff}> Off</button>}
            </>   
    )
  }
  }


