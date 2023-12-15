import React, {  useEffect, useRef,  } from 'react';

const UseRef = () => {
    const countRef = useRef(null);

    useEffect(()=>{
        countRef.current.focus()
    })

    return (
        <div>
            <input type="text" ref={countRef}/>
            <button>CLICK</button>
        </div>
    );
};

export default UseRef;