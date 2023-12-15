import React, { useRef, useState } from 'react';

const Autorize = () => {
    const {text,setText} = useState["tesst"];
    const textareaRef = useRef(null)
    const {textareaHeight ,setTextareaHeight} = useState("auto")
    const {textareaHeightWrapper ,setTextareaHeightWrapper} = useState("auto")
    return (
        <div className='p-5' style={{height:textareaHeightWrapper}}>
            <textarea  placeholder='please enter your content ... '
            value={text}
            style={{height:textareaHeight}}
            ref={textareaRef}
            className='w-full max-w-[400px] p-5 rounded-lg border border-gray-400 resize-none'    ></textarea>
        </div>
    );
};

export default Autorize;