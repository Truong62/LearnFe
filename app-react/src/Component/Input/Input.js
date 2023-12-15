import React, { useEffect, useRef } from 'react';

const Input = () => {
    const divRef = useRef();
    const inputRef = useRef();

    useEffect(() => {
        if(inputRef.current) inputRef.current.focus()
    }, [])

    return (
        <div className='input-div' ref={divRef}>
            <input 
            type="text" 
            ref={inputRef}
            placeholder='auto focus' 
            className='border inline-block p-5 border-gray-200 focus:border-blue-400 focus:outline-none'/>
        </div>
    );
};

export default Input;