import React, { useReducer } from 'react';



// const countReducer = (state, action) => {
//     switch (action) {
//         case "tang":
//             return state + 1
//         case "giam":
//             return state - 1
//         case "hp":
//             return state = 0
//         default:
//             return state;
//     }
// }

// const UseReducer = () => {
//     const [cout, dispatch] = useReducer(countReducer, 10);
//     return (
//         <div>
//             <h1>Count: {cout}</h1>
//             <button onClick={() => dispatch("tang")} >TĂNG</button>
//             <button onClick={() => dispatch("giam")}>GIẢM</button>
//             <button onClick={() => dispatch("hp")}>KHÔI PHỤC</button>
//         </div>
//     );
// };

const arrNumber = {
    chan: [],
    le: []
}

const addNumber = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action) {
        case "addChan":
            while (true) {
                const number = Math.floor(Math.random() * 100);
                if (number % 2 === 0) {
                    return { ...state, chan: [...state.chan, number, ","] }
                }
            }
        case "addLe":
            while (true) {
                const number = Math.floor(Math.random() * 100);
                if (number % 2 !== 0) {
                    return { ...state, le: [...state.le, number, ","] }
                }
            }
        case "reset":
            return arrNumber;

    }
}
const UseReducer = () => {
    const [number, numberDispatch] = useReducer(addNumber, arrNumber)
    const addNbChan = () => {
        setTimeout(() => {
            for (let i = 0; i <= 20; i++) {
                numberDispatch("addChan")
            }
        }, 3000)
    }

    const addNble = () => {
        setTimeout(() => {
            for (let i = 0; i <= 20; i++) {
                numberDispatch("addLe")
            }
        }, 3000)
    }
    return (
        <div>
            {number.chan.length <= 20 ? <p>Loading....</p> : <h1>SỐ CHẴN {number.chan}</h1>}
            {number.le.length <= 20 ? <p>Loading....</p> : <h1>SỐ lẻ {number.le}</h1>}
            <button onClick={() => { numberDispatch("reset") }}>RESET</button>
            <button onClick={addNbChan}> THEM SO CHAN</button>
            <button onClick={addNble}> THEM SO LE</button>
        </div>
    )
}

export default UseReducer;