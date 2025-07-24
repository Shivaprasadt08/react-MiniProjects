// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       count : 0,
//     }
//   }
//   handleChange = () => {
//     this.setState({count : this.state.count +1})
//   }
// //1 componentDidMount is called when the component is mounted for the first time.
//   // componentDidMount = () => {
//   //   alert("Component Mounted")
//   //   document.body.style.backgroundColor = "cyan";
//   //   document.title = `i am mounting phase ${this.state.count}`
//   // }
// //2. componentDidUpdate is called whenever there is change in state
//   //  componentDidUpdate =() => {
//   //   alert("Component updated");
//   //   document.title = `i am updating phase ${this.state.count}`
//   //  }

//   // componentWillUnmount = () => {
//   //   alert("Component will unmount")
//   // }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleChange}>Click</button>
//       </div>
//     )
//   }
// }

//example for the componentWillUnmount 
 import React, { Component } from 'react'
 
 export default class App extends Component {
  constructor(){
    super()
    this.state =  {
      delete : false,
    }
  }
   render() {
     return (
       <div>
        <button onClick = {() => {this.setState({delete:true})}}> Delete It...</button>
        {
          this.state.delete ? null : <User></User> 
        }
       </div>
     )
   }
 }

 class User extends React.Component {
  componentWillUnmount = () =>{
    alert("do you want to delete permanently")
  }
   render() {
     return (
       <div>
       <h1>User Name :Shivaprasad</h1>
       </div>
     )
   }
 }
 