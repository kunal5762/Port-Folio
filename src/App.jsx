import React from 'react'
import Nav from './components/Nav'
import Main from './components/Main'
import Second from './components/Second'
import Lastcd from './components/Lastcd'
import Footer from './components/Footer'
import Home from'./components/Navitmes/Home'
import About from './components/Navitmes/About'
import Works from './components/Navitmes/Works'
import Contact from './components/Navitmes/Contact'
import { BrowserRouter, Routes, Route, HashRouter } from "react-router";

function App() {
  console.log(import.meta.env.VITE_API_URL)
  return (
    <div className=' max-sm:w-[563px] max-xl:w-[1280px] max-lg:w-[1024px] max-lg:px-[15px] px-[50px] max-sm:px-[20px]'>
      <div className='flex flex-col'>
        <HashRouter>
          <Nav/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/works' element={<Works/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
          <Footer />
        </HashRouter>
      </div>
      <div>
      </div>
    </div>
  )
}

export default App