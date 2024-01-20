import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Greeting(message,name) {
  
  return (
    <>
      <p>
      {message="Hello "},{name=" Alice"}
      </p>
      
    </>
  )
}

function App() {

  return (
    <>
     <Greeting />
    </>
  )
}

export default App
