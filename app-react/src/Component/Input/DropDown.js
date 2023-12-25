import React, { useEffect, useRef, useState } from 'react';

const DropDown = () => {
    const [show, setShow] = useState(true);
    const RefDrop = useRef(null)
    useEffect(()=>{
        const  handleClick =(e) =>{
            if(RefDrop.current && !RefDrop.current.contains(e.target)){
              setShow(false)
            }
            // else{
            //     console.log("insie")
            // }
        }
            document.addEventListener("click" ,handleClick )
            return () =>{
                document.removeEventListener("click" ,handleClick )

            }
        
    })
    return (
        <div className="relative w-full max-w-[400px]" ref={RefDrop}>
            <div
                className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
                onClick={() => {
                    setShow(!show);
                }}>
                Selected
            </div>
            {show &&
                (<div className="border border-gay-200 rounded-lg absolute top-full left-0 w-full bg-yellow-50">
                    <div className="p-5 cursor-pointer">Javascrip</div>
                    <div className="p-5 cursor-pointer">Ascending</div>
                    <div className="p-5 cursor-pointer">Hot</div>
                </div>
                )}
        </div>
    );
};

export default DropDown;