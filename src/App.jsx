import React, { useState } from 'react'
import './index.css'
import { Navbar } from './components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, About, Business } from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/business' element={<Business />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
