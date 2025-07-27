# React + Vite

<!-- this is card componet rule -->

import { useState } from 'react';
import './App.css'
import Card from './components/Card'

function App() {

 let users = [
    {
      "userName":'ujjawal Yadav',
      "role":'Frontend Developer',
      "about":'i looking for oppor'
    },
    {
      "userName":'sonia Yadav',
      "role":'Frontend Developer',
      "about":'i looking for oppor'
    },
    {
      "userName":'deepak Yadav',
      "role":'Frontend Developer',
      "about":'i looking for oppor'
    }    
  ];

  return(
    <>
      <div className='p-10'>
        {users.map( (val,ind) =>{
          return <Card key={ind} userName={val.userName} role={val.role} about={val.about} />
        })}
      </div>
    </>
  )
}
export default App

<!-- font api  -->
<!-- https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyASitD-EQLls9c3o1biUEmk_tNYNm2Th_s -->
