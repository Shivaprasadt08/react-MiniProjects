import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Data from './Data'
import AllDetails from './AllDetails'


let router=createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
    children:[
      {
        path:"/data",
        element:<Data></Data>
      },

      {
        path:"/alldetails",
        element:<AllDetails></AllDetails>
      }
    ]
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App