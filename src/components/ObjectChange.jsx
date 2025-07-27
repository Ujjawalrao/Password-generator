import React, { useState } from 'react'


function ObjectChange() {
  
    const [car,setCar] = useState({name:"hundai",
        model:2020,
        colour:"venta black"});

const [list,setList] = useState();


return (
<>
<h1 className='text-white'>my car name {car.name} the modes is {car.model} and colour {car.colour} </h1>

<ul className='text-white m-2 font-semibold font-mono'>
{list}
</ul>

<label className='text-white font-semibold'>Car Name:</label><br />
<input type='text' value={car.name} 
onChange={(e) => {
setCar( {...car, name: e.target.value } );
setList( () => {
car.name
})
}} />
<br />

<label className='text-white'>Modle:</label><br />
<input type="number" value={car.model}
onChange={ (e) => {
setCar({...car, model: e.target.value})
}} />
<br />

<label className='text-white'>Color:</label><br />
<input type="text" value={car.colour}
onChange={ (e) => {
setCar({...car, colour: e.target.value})

}} />

</>
)
}

export default ObjectChange
