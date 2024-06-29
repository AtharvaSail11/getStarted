import { useState } from 'react'
import './App.css'
import NavBar from './components/navBar'
import Content from './components/content'


function App() {
  return (
    <div className='app'>
      <NavBar />
      <div className='section'>
          <Content/>
      </div>
    </div>
    
  )
}

export default App
