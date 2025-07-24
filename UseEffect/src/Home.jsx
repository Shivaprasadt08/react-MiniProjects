import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to="/">home page</Link>
            </li>

            <li>
                <Link to="/data">DATA PAGE</Link>
            </li>

            <li>
                <Link to="/alldetails">ALL DETAILS PAGE</Link>
            </li>
        </ul>

        <div>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Home
