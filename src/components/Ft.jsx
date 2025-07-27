import React, { useEffect, useRef, useState } from 'react';

function Ft() {

  const [count, setCount] = useState(1);
  
  const valref = useRef(0);

  useEffect(() => {
    valref.current = valref.current+1
  })

  function bt(params) {
    setCount( p => p += 1)
    valref.current.style.background = "pink";
  }
  
  
  return (
    <>
    <h1>{count}</h1>
    <button onClick={bt}>add</button>
    <h1>{valref.current}</h1>
    </>
  );
}

export default Ft;
