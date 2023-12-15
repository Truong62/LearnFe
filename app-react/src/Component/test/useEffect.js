import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [title,setTitle] = useState("");
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{res.json()})
        .then(post =>{
            console.log(post)
        },[])
    })
    return (
        <div>
            <input value={title}
            className='border border-blue-300'
            onChange={e=> setTitle(e.target.value)} />
        </div>
    );
};

export default UseEffect;