import React, { useEffect, useState } from 'react';

const Count = () => {
    const [count, setCount] = useState({
        name: "NNT",
        lastName: "ngoc"
    })
    useEffect(() => {
        console.log(count)
    }, [count])
    return (
        <div>
            <button onClick={() => {
                setCount(count + 1)
            }}>Set Count</button>
            <br />
            <span>{count}</span>
        </div>
    );
};

export default Count;