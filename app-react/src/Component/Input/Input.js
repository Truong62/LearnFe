import React, { useEffect, useRef } from 'react';

const Input = () => {
    const divRef = useRef;

    useEffect(() => {
        console.log(divRef.current)
    })

    return (
        <div className='input-div' ref={divRef}>
            <h1>ahahhah</h1>
        </div>
    );
};

export default Input;