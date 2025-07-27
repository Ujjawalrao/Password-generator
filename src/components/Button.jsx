function Button({innerText = 'click me'}) {
    
    return(
        <button className="bg-blue-500 px-5 text-white font-semibold 
                            text-lg rounded-3xl active:scale-90 
                            transition-all ease-in-out my-1">
                            {innerText}
                            </button>
    )
}

export default Button;