import { useState } from "react";

function BgChanger(params) {

    let [color,setcolor] = useState("")

    return (
        <main 
        className='h-screen  ' 
        style={{backgroundColor:color}}>

            <h1 
                className="text-center font-serif text-2xl p-4 bg-white"
                style={{color:color}}
            >Background Color Changer</h1>

            <div className='flex items-center justify-center bg-black ' >

                <button 
                className='bg-orange-600 m-2 p-1 rounded-md' 
                onClick={() => setcolor("orange")} 
                >orange</button>

                <button 
                className='bg-pink-300 m-2 px-4 py-1 rounded-md' 
                onClick={() => setcolor("pink")} 
                >pink</button>

                <button 
                className='bg-green-900 m-2 p-1 rounded-md' 
                onClick={() => setcolor("green")} 
                >green</button>

                <button 
                className='bg-yellow-400 m-2 p-1 rounded-md' 
                onClick={() => setcolor("yellow")} 
                >yellow</button>

                <button 
                className='bg-blue-600 m-2 p-1 rounded-md' 
                onClick={() => setcolor("blue")} 
                >blue</button>

            </div>
        </main>
    )
    
}
export default BgChanger;