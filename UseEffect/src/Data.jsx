import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Data = () => {
      let [state,setState]=useState({
    trainername:"",
    subject:""
  })  


  let navigate=useNavigate()


  let {trainername,subject} = state

  let handleChange=(e)=>{

    let {name,value}=e.target

    setState({...state,[name]:value})
  }

      let handleSubmit=async()=>{

    try{

      let payload={trainername,subject}
         navigate("/alldetails")
      let data=await axios.post("http://localhost:5000/users",payload)
    
    }catch(err){
      console.log(err);
     }
  }


  return (
    <div>
       <form action="" onSubmit={handleSubmit}>
       <label htmlFor="">TRAINER NAME:</label>
       <input type="text" name="trainername" id="" onChange={handleChange} />
       <label htmlFor="">SUBJECT:</label>
       <input type="text" name="subject" id="" onChange={handleChange} />

       <input type="submit" value="SUBMIT" />
       </form>
    </div>
  )
}

export default Data
