// import { useState } from 'react'

// import './App.css'

// function App() {
//   const [state, setState] = useState({
//     Username: "",
//     Password: "",
//     gender:"",
//     language:"",
//     Country:"",
//   })

//   let handleChange=(e)=>{
//     let {name,value} = e.target;
    
//     setState({...state,[name]:value})
//   }

//   let handleSubmit=(e)=>{
//     e.preventDefault();
//     console.log(state);

//   }

//   return (
//     <>
//       <form action="" onSubmit={handleSubmit}>
//         <label htmlFor="a">Username:</label>
//         <input type="text" id='a' name='Username' onChange={handleChange}/>
//         <br />
//         <label htmlFor="b">Password</label>
//         <input type="password" id='b' name='Password' onChange={handleChange}/>
//         <br />

//         <label htmlFor="" >Gender:</label>
//         male<input type="radio" name='gender' value='male' id='male'onChange={handleChange} />

//         female<input type="radio" name='gender' value='female' id='female' onChange={handleChange} />
       
//         <br />

//         <label htmlFor="" id='u'>language:</label>
        

//         Kannada<input type="checkbox" name='language' value='Kannada' onChange={handleChange}/>
//         English<input type="checkbox" name='language' value='English' onChange={handleChange} />
//         Hindi<input type="checkbox" name='language' value='Hindi' onChange={handleChange} />
//         Spanish<input type="checkbox" name='language' value='Spanish' onChange={handleChange} />
//         <br />

//         <label htmlFor="">Country</label>
//         <select name="Country" id="" onChange={handleChange}>
//           <option value="select">select</option>
//           <option value="India" name="Country">india</option>
//           <option value="UK" name="Country">UK</option>
//           <option value="USA" name="Country">USA</option>
//         </select>

//         <input type="submit" name="submit" id="hg" />
//       </form>      
//     </>
//   )
// }

// export default App


import { useState } from 'react'

function App() {
  const [state, setState] = useState({
    Username: "",
    Password: "",
    gender: "",
    language: [], // Changed to array for multiple selections
    Country: "",
  })

  // let handleChange = (e) => {
  //   let { name, value, type, checked } = e.target;
    
  //   if (type === 'checkbox') {
  //     // Handle checkbox arrays
  //     if (checked) {
  //       // Add value to array if checked
  //       setState(prev => ({
  //         ...prev,
  //         [name]: [...prev[name], value]
  //       }));
  //     } else {
  //       // Remove value from array if unchecked
  //       setState(prev => ({
  //         ...prev,
  //         [name]: prev[name].filter(item => item !== value)
  //       }));
  //     }
  //   } else {
  //     // Handle regular inputs
  //     setState(prev => ({ ...prev, [name]: value }));
  //   }
  // }

   let handleChange = (e)=>{
    let{name,value,type,checked} = e.target;
    if(type === 'checkbox'){
      setState(prev => {
        const updatedCheck = checked ? [...prev[name], value] :
        prev[name].filter(i => i!==value)
        return { ...prev, [name]: updatedCheck };

      }
        
      )
    }
    else{
     setState(prev=>({...prev, [name]:value}))
    }

   }

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  }

  return (
    <div className="p-5 max-w-md mx-auto">
      <div onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Username:</label>
          <input 
            type="text" 
            name='Username' 
            value={state.Username}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password:</label>
          <input 
            type="password" 
            name='Password' 
            value={state.Password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Gender:</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                name='gender' 
                value='male' 
                checked={state.gender === 'male'}
                onChange={handleChange} 
                className="mr-2"
              /> Male
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name='gender' 
                value='female' 
                checked={state.gender === 'female'}
                onChange={handleChange} 
                className="mr-2"
              /> Female
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Languages:</label>
          <div className="space-y-2">
            {['Kannada', 'English', 'Hindi', 'Spanish'].map(lang => (
              <label key={lang} className="flex items-center">
                <input 
                  type="checkbox" 
                  name='language' 
                  value={lang}
                  checked={state.language.includes(lang)}
                  onChange={handleChange}
                  className="mr-2"
                /> {lang}
              </label>
            ))}
          </div>
        </div>
        {/* <div>
          <label htmlFor="">language</label>
          {
            ["kannada","english","hindi","marathi"].map(lang=>(
               <label key={lang}>
                <input type="text" name='language' value={lang} checked={state.language.includes(lang)} onChange={handleChange}/>
                {lang}
               </label>
            )
             
            )
          }
        </div> */}

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Country:</label>
          <select 
            name="Country"
            value={state.Country}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="UK">UK</option>
            <option value="USA">USA</option>
          </select>
        </div>

        <button 
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </div>

      <div className="mt-6 p-4 bg-gray-100 rounded-md">
        <h3 className="font-semibold mb-2">Current State:</h3>
        <pre className="text-sm bg-white p-2 rounded border overflow-x-auto">
          {JSON.stringify(state, null, 2)}
        </pre>
      </div>
    </div>
  )
}

export default App