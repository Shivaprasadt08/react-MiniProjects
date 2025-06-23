import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
     const [color, setColor] = useState("olive")
  return (
    <>
       <div className="w-full min-h-screen h-screen  duration-400" style={{backgroundColor : color}}>
          <div className = "fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-2">
              <div className = "fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"> 
                <button onClick ={() => setColor("red") } className='outline-none px-4 py-1 rounded-full shadow-lg'
                style={{backgroundColor: "red"}}>Red</button>

                <button onClick ={() => setColor("green") } className='outline-none px-4 py-1 rounded-full shadow-lg'
                style={{backgroundColor: "Green"}}>Green</button>

                <button onClick ={() => setColor("blue") } className='outline-none px-4 py-1 rounded-full shadow-lg'
                style={{backgroundColor: "blue"}}>blue</button>

                <button onClick ={() => setColor("yellow") } className='outline-none px-4 py-1 rounded-full shadow-lg'
                style={{backgroundColor: "yellow"}}>Yellow</button>

                <button onClick ={() => setColor("cyan") }  className='outline-none px-4 py-1 rounded-full shadow-lg'
                style={{backgroundColor: "Cyan"}}>Cyan</button>

                <button onClick ={() => setColor("pink") }  className='outline-none px-4 py-1 rounded-full shadow-lg'
                style={{backgroundColor: "pink"}}>Pink</button>
              </div>
          </div>
       </div>
    </>
  )
}

export default App

// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

// function App() {
//   const [color, setColor] = useState("olive");

//   return (
//     <>
//       <div className="w-full min-h-screen h-screen duration-400" style={{ backgroundColor: color }}>
//         <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//           <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
//             <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full shadow-lg'
//               style={{ backgroundColor: "red" }}>Red</button>
//             <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full shadow-lg'
//               style={{ backgroundColor: "Green" }}>Green</button>
//             <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full shadow-lg'
//               style={{ backgroundColor: "blue" }}>Blue</button>
//             <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full shadow-lg'
//               style={{ backgroundColor: "yellow" }}>Yellow</button>
//             <button onClick={() => setColor("cyan")} className='outline-none px-4 py-1 rounded-full shadow-lg'
//               style={{ backgroundColor: "Cyan" }}>Cyan</button>
//             <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full shadow-lg'
//               style={{ backgroundColor: "pink" }}>Pink</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

