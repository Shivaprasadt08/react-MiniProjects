import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PrintData from './PrintData'
import {PacmanLoader} from "react-spinners"

const AllDetails = () => {
    let [state,setState]=useState(null)


    let handleData=async()=>{

        let {data}=await axios.get("http://localhost:5000/users")
        setState(data)

    }


    useEffect(()=>{
        handleData()
    },[])

  return (
    <div>
        {
 state == null ? (<PacmanLoader></PacmanLoader>) : (state.map((max)=>{

                return <PrintData {...max}></PrintData>
                

            }))
        }
    </div>
  )
}

export default AllDetails
