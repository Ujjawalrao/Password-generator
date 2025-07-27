import { Link, NavLink } from "react-router-dom";

function Navbar() {

    return (
        <>
        <nav className="flex items-center justify-between bg-black text-yellow-700 px-8 py-2 uppercase font-bold">
            <h1 className="text-2xl font-thin">Code</h1>

            <ul className="flex items-center justify-evenly gap-4 list-none text-white cursor-pointer">
                <NavLink to='/' 
                className={ ({isActive}) => `hover:text-yellow-600 hover:from-neutral-100 active:scale-95 
                ${isActive ? "text-yellow-700" : "text-white"}` } ><li  >bg-Changer</li></NavLink>
                <NavLink to='/ColorPicker' 
                className={ ({isActive}) => `hover:text-yellow-600 hover:from-neutral-100 active:scale-95 
                ${isActive ? "text-yellow-700" : "text-white"}` } ><li  >ColorPicker</li></NavLink>
                <NavLink to='/Notes'
                className={ ({isActive}) => `hover:text-yellow-600 hover:from-neutral-100 active:scale-95 
                ${isActive ? "text-yellow-700" : "text-white"}` } > <li >Notes</li></NavLink>
                <NavLink to='/PasswordGen' 
                className={ ({isActive}) => `hover:text-yellow-600 hover:from-neutral-100 active:scale-95 
                ${isActive ? "text-yellow-700" : "text-white"}` } ><li >PasswordGen</li></NavLink>
                
            </ul>
        </nav>


        </>
    )
}

export default Navbar;