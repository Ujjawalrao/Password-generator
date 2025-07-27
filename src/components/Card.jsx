function Card({userName, role, about, url }) {
    
    return (
        <>
        <div className="bg-black inline-block p-8 py-12 m-2 rounded-2xl" >
            <img src={url}
                 className="h-44 w-48  rounded-xl bg-gray-400 hover:scale-105 overflow-hidden ease-in-out transition-all hover:backdrop-opacity-35">

            </img>
            <h1 className="text-yellow-600 uppercase text-center m-2">{userName}</h1>
            <p className="text-sm font-bold text-white">Role: {role}</p>
            <p className="text-sm text-wrap font-bold text-white">About: {about} </p>
        </div>
        </>
    )
}
export default Card;