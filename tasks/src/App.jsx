import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tasks from './Tasks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tasks></Tasks>
       
    </>
  )
}

export default App


