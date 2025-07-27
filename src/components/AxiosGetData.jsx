import { useState, useEffect } from "react"

import axios from 'axios';
import React from 'react'
import Card from "./Card";

function AxiosGetData() {

    const [data,setData] = useState([])

    const getData = async () => {
      let res = await axios.get('https://picsum.photos/v2/list?page=2&limit=10');
      // console.log(res);
      console.log(res.data);
      console.log(res.data[0].author);
      
      setData(res.data);
    }
  
  // auto invoke fu here with useEffect
   useEffect( () => {
    getData()
   }, );

  return (
    <>
    {/* <button 
    className='px-4 bg-blue-500 text-white rounded-lg active:scale-95 block'
    onClick={getData}
  >Get data</button> */}

  {data.map( (ele, idx) => {
    return <Card key={idx} userName={ele.author} url={ele.download_url} />
  })}

{/* 
<div className='bg-black text-white '>
  {data.map( (res,idx) => {
    return <div key={idx} className='flex justify-between items-center text-2xl m-4'>

      <img src={res.download_url} className='w-[500px]' />
      <h1>{res.author}</h1>

    </div>
  })}
</div> */}
    </>
  )
}

export default AxiosGetData
