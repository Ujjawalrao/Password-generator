import { useState } from "react"

function ColorPicker(params) {

    const [color,setColor] = useState('#111')
    
    return(
        <>
        <div className="container bg-slate-600 w-72 min-h-96 rounded-lg p-3 text-white font-semibold text-xl text-center shadow-lg">

            <h1 className="text-[1.4rem] ">Colour Picker</h1>
            <div
            className="h-40 rounded-2xl text-black m-4 shadow-xl border "
            style={{backgroundColor: color}}></div>

            <h2 className="font-extralight text-sm">Pick colour code from here👇</h2>

            <input 
            type="text"
            className="font-mono m-4 text-center rounded-xl text-black shadow-lg outline-none border-none"
            // style={{color:color}} 
            value={color} 
            readOnly  />

            <h4 className="mb-2">Choose color</h4>

            <input 
            className="shadow-lg w-30 ease-in-out hover:scale-125 transition-all "
            type="color"
            value={color} 
            onChange={(e)  =>{
                setColor(e.target.value)
            } }/>

        </div>
        </>
    )
}

export default ColorPicker;