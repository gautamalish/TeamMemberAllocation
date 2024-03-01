import { useState,useEffect } from 'react'
import './App.css'
import Card from './Card'
import Footer from './Footer'
import Header from './Header'
function App() {

  return (
    <div className='container'>
      <Header/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default App
