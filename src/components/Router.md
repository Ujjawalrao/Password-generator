// importent note:- use App Component with <BrowserRouter> <App /> </BrowserRouter> in main.jxs

import './App.css'
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import BgChanger from './components/BgChanger'
import ColorPicker from './components/ColorPicker'
import Notes from './components/Notes';
import Card from './components/Card'

function App() {

return(
  <>
  <Navbar />
  <Routes>
    <Route path='/' element={<BgChanger />} />
    <Route path='/ColorPicker' element={<ColorPicker />}/>
    <Route path='/Notes' element={<Notes />}/>
    <Route path='/Card' element={<Card />}/>
  </Routes>
  <Footer />
  </>
)
}

export default App;
