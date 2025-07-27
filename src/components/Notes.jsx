import { useState } from "react";

function Notes(params) {
    
    let [fruit,setFruit] = useState([])
    const [name,,setName] = useState("")
  
    const add = (e) =>{
      let newitem =  document.getElementById('in').value;
      if (newitem == "" || newitem == " ") {
        return document.getElementById('in').value = "";
      }
      else{
        setFruit([...fruit,newitem]);
        document.getElementById('in').value = "";
      }
    };
  
    let dlt = (idx) => {
        setFruit(fruit.filter( (_,i) => i !== idx))
    }
  
    return(
      <>    
      <span className='bg-blue-300 rounded-md shadow-lg p-2 block w-80'>
      <div className='flex justify-between'>
      <h1 className='font-semibold  '>Notes</h1>
      <span className='font-semibold bg-white px-4 mb-1 rounded-sm active:scale-90 active:text-ellipsis overflow-hidden cursor-pointer'
      onClick={ () => (setFruit([]))}
      >Clear</span>
      </div>
      <hr />
      <br />
  
      <input type="text" 
      placeholder='Write here' 
      className='border-2 border-zinc-700 px-2 outline-indigo-300 border-opacity-15 shadow-lg rounded-lg mr-1 w-[75%]' 
      id='in' 
      required/>
  
       <button className='bg-blue-500 text-white font-semibold px-5 rounded-lg active:scale-90'
       onClick={() => {
        add()
       }} >Add</button>
  
       </span>
  
       {fruit.map( (val,idx) => {
        return <div className='bg-blue-300 w-80 flex justify-between pl-1 my-2 items-center rounded-lg'>
         <li className='text-wrap overflow-hidden'
         key={idx} > {val} </li>
         <button  
         onClick={ () => dlt(idx) }
         className='bg-white font-semibold px-2 min-w-[21%] flex rounded-sm h-6'>Dlt 🗑️</button>
        </div>
        })}
      
      </>
    )
}

export default Notes;