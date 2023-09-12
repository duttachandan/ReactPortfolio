import React, { useEffect, useState } from 'react'
import './App.css'
import Home from "./components/Home"
import Loading from '../Loading/Loading';



function App() {
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(true)
    },2000)
  },[])

  return (
    <>
      {
        !loading
          ?
          <Loading/>
          :
          <>
            <Home/>
          </>
      }
    </>
  )
}

export default App
