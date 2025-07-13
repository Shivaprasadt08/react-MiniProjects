import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [counter, setCounter] = useState(5)
  // const counter = 5;

  let addValue = () =>
  {
    // const counter = 5;
    // console.log("Value Added!",counter);
    // counter = counter + 1;
    if (counter >= 0 && counter < 20){
      // setCounter(counter+1);  //All are passed as Bunch of package so there is no change in the counter value.This is done by Fiber.
      // setCounter(counter+1);
      // setCounter(counter+1);
      
      setCounter(prevcounter => prevcounter + 1);
      setCounter(prevcounter => prevcounter + 1);
      setCounter(prevcounter => prevcounter + 1);
      setCounter(prevcounter => prevcounter + 1);

    }
    else{

    }
    
  }

  let remove_value = () => {
    console.log("current value : ",{counter})
    if (counter >= 1)
    {
      setCounter(counter - 1);
    }
    else {
      setCounter(0);
    }
    

  }

  return (
    <>
     
       <h1>Hello, This is <b>Shivaprasad.</b><hr></hr> I'm Full-Stack Developer.</h1>
     
       <h2>Counter value: {counter}</h2>
       <button onClick = {addValue}
       >Add value : {counter}</button>
       
    <br />

        <button onClick = {remove_value}>
          Remove value:{counter}</button>



    </>
  )
}

export default App
