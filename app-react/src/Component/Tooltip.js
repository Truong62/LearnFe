import React, { useState } from 'react';
import useHover from '../hook/useHover';
import reactDom from "react-dom"

const Tooltip = ({ children, text }) => {
    const [hovered, nodeRef] = useHover();
    const [coords, setCoords] = useState({});
    const handelHover = e => {
        setCoords(e.target.getBoundingClientRect())
    }
    return (
        < div className="p-10 m-20">
            {nodeRef && (<TooltipContent coords={coords}>{children}</TooltipContent>)}
            <span className='font-semibold' ref={hovered} onMouseOver={handelHover}>{text}</span>
        </div>
    );
};

const TooltipContent = ({ children, coords }) => {
    console.log(coords)
    return reactDom.createPortal(
        <p className='bg-black inline-block p-3 text-white rounded-xl absolute -translate-y-full  -translate-x-2/4' style={{ top: coords.top - coords.height, left: coords.left + coords.width / 2 + window.scrollY }}>
            {children}
        </p>,
        document.querySelector("body")
    )
}

export default Tooltip;
