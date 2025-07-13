import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Bulb from './components/Bulb'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Bulb></Bulb>
    </>
  )
}

export default App
