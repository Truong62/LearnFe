import React, { useState } from 'react';
import Table from './Table';
import "./GameStyle.css"
import { Winner } from '../../helper';

const Game = () => {
    // const [boarch, setBoarch] = useState(Array(9).fill(null))
    // const [xIsNext, setXIsNext] = useState(true)
    const [state, setState] = useState({
        boarch: Array(9).fill(null),
        xIsNext: true
    })
    const winner = Winner(state.boarch)
    const handleClick = (index) => {
        const boardCopy = [...state.boarch]
        if (winner || boardCopy[index]) return
        boardCopy[index] = state.xIsNext ? "X" : "O";
        setState({
            ...state,
            boarch: boardCopy,
            xIsNext: !state.xIsNext
        })
        // setBoarch(boardCopy)
        // setXIsNext(!state.xIsNext)
    }
    const hendleResetGame = () => {
        // setBoarch(Array(9).fill(null))
        // setXIsNext(true)
        setState({
            ...state,
            boarch: (Array(9).fill(null)),
            xIsNext: true
        })
    }
    return (
        <div>
            <Table cells={state.boarch} onClick={handleClick}></Table>
            {winner && <div className="winner-game">
                {winner ? `Winner is ${winner}` : ""}
            </div>}
            <button className='gameReset' onClick={hendleResetGame}>Rese Game</button>
        </div>


    );
};

export default Game;