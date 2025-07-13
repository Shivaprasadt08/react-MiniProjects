import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [state, setState] = useState({
    trainername : "",
    subject:"",
  })
  const[users,setUsers] = useState([])

  let handlchange = (e)=>{
    let{name,value} = e.target;
    setState({...state,[name]: value});
  }

  let {trainername,subject} = state;

   
  let handleSubmit = async(e) => {
    e.preventDefault();
     let payload={trainername,subject};

     if(!trainername || !subject){
      alert("Please fill all the fields");
      return;
     }

      try{
         //Posting the data to the server
         //Make sure run the json-server before making this request
          let data = await axios.post("http://localhost:5000/users",payload) // run => npx json-server --watch Backend/data.json --port 5000 after creating the data.json file inside backend folder
          console.log(data);         
      }catch(err){
        console.log(err);        
      }
   }

   let fetchRecords = async(e) =>{
    e.preventDefault();
    try{
      let fetchdata = await axios.get('http://localhost:5000/users')
      console.log(fetchdata.data);
      setUsers(fetchdata.data);
    }catch(err){
      console.log(err);
      
    }
   }

   
  return (
    <>
     <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">Trainer Name</label>
      <input type="text" name='trainername' value={trainername} onChange={handlchange}/>
      <br /> <br />
      <label htmlFor="">Subject</label>
      <input type="text" name="subject" id="" value={subject} onChange={handlchange}/>
      <br /><br />
      <input type="submit" />

     </form>

     <div>
      <button onClick={fetchRecords}>Fetch Users</button>
    {
      users.map(user =>(
        <ul>
          <li key={user.id}>
            <h2>{user.trainername}- {user.subject}</h2>

          </li>
        </ul>
        
      ))
    }
     </div>
     
    </>
  )
}

export default App
