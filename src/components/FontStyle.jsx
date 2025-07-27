import React, { useRef, useState } from 'react'
import './FontStyle.css'


import axios from 'axios';


function FontStyle() {

    const [inputval,setInputval] = useState('');

    const demo = () => {
      setInputval('You are so good looking')
    }

    const naamFonts = [
      'Roboto',
      'Poppins',
      'Open Sans',
      'Montserrat',
      'Raleway',
      'Oswald',
      'Lobster',
      'Source Sans Pro',
      'Ubuntu',
      'Merriweather',
      'Lato',
      'Nunito',
      'Abril Fatface',
      'Acme',
      'Aldrich',
      'Alex Brush',
      'Amatic SC',
      'Angilla',
      'Anton',
      'Arvo',
      'Bangers',
      'Barlow',
      'Barlow Condensed',
      'Baskervville',
      'Bebas Neue',
      'Bitter',
      'Bree Serif',
      'Bungee',
      'Cabin',
      'Candal',
      'Cardo',
      'Chewy',
      'Chivo',
      'Coda',
      'Comfortaa',
      'Copse',
      'Courgette',
      'Dancing Script',
      'Droid Sans',
      'Droid Serif',
      'EB Garamond',
      'Ek Madhvani',
      'Ekrond',
      'Exo',
      'Exo 2',
      'Fira Sans',
      'Fira Mono',
      'Francois One',
      'Fredoka One',
      'Gaegu',
      'Galada',
      'Gentium Basic',
      'Gloock',
      'Gloria Hallelujah',
      'Great Vibes',
      'Habibi',
      'Hammersmith One',
      'Handlee',
      'Hanna',
      'Hardwell',
      'Heebo',
      'Helvetica',
      'Hollywood',
      'Iceland',
      'Inconsolata',
      'Indie Flower',
      'Inspiration',
      'Italiana',
      'Julius Sans One',
      'Kamila',
      'Karla',
      'Katibeh',
      'Kavivanar',
      'Khand',
      'Kosugi',
      'Lato',
      'Lora',
      'Lucida Grande',
      'Manrope',
      'Maven Pro',
      'Merriweather',
      'Muli',
      'Nanum Gothic',
      'Oceanic',
      'Overpass',
      'Patua One',
      'Permanent Marker',
      'Playfair Display',
      'Poppins',
      'Raleway',
      'Roboto',
      'Satisfy',
      'Scada',
      'Signika',
      'Sigmar One',
      'Slabo 27px',
      'Spartan',
      'Stone Sans',
      'Teko',
      'Title',
      'Ubuntu',
      'Ultra',
      'Volkhov',
      'Zilla Slab'
    ];
    

    const val = () => {
        setInputval(e.target.value)                
    }
    
  return (
    <>
      <nav className='bg-slate-300 w-screen shadow-3xl h-[30vh] flex selection:bg-green-500 
                        items-center justify-center flex-col px-4 sticky top-0 ' >
                            
        <h1 className='text-[4vw] text-blue-900 font-extrabold tracking-normal'>
           Quick Change Font Style 
        </h1>

        <h6 className='text-gray-700 font-thin font-sans tracking-wider text-[2vw] '>
            We have 100+ Font's Style. Just search & see ✨
        </h6>

        <form className='w-[80%] h-[20%] relative rounded-xl shadow-lg mt-4' 
              onSubmit={(e) =>{
                e.preventDefault();
                // setInputval('');
              
              }}
        >
        <input type="text"
               placeholder='Write here...' 
               value={inputval}
               onChange={(e) => {
                setInputval(e.target.value)                
               }}
               className='w-full px-6 h-full text-[1.2vw] border text-gray-500
                outline-blue-900  rounded-xl shadow-sm font-mono bg-slate-200 '
        />
        <button className=' absolute right-6 top-[20%] text-blue-800 font-semibold text-[1vw]'
                onClick={demo}
                type='button'>Demo text
        </button>
        </form>
      </nav>

      <main className='gridcnt h-[70vh] bg-slate-300 text-white sm:grid gap-2 pl-6 pr-6 selection:bg-green-500 '>
                  
          <div className='sidebar bg-slate-800 rounded-lg sm:block hidden' >
            <ul>
              <li>home</li>
              <li>about</li>
              <li>contact</li>
              <li>servies</li>
              <li>text</li>
            </ul>
          </div>

          <div className='mainContent bg-slate-800 rounded-lg sm:overflow-scroll overflow-scroll p-4 sm:pr-44 text-justify h-[70vh]'>
            <ul class="list-none tracking-wider p-4 rounded-lg shadow-md space-y-2">
              {naamFonts.map( (name, idx) => {
                return <li key={idx}
                           className='text-slate-900 sm:p-2 rounded-full bg-slate-300 sm:text-3xl flex items-center w-full px-4 pr-8 justify-between overflow-hidden ' 
                           style={{fontFamily: name}}>
                            {inputval} {inputval === '' ? "Example Text" : val }
                          <h4 className='font-semibold font-mono text-blue-400 sm:text-xl '>Copy</h4>
                       </li>
              })}
              
            </ul>
          </div>

      </main>
    </>
  )
}

export default FontStyle
