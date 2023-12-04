import React, { useState } from 'react';
import Table from './Table';
import "./GameStyle.css"
import { Winner } from '../../helper';

const Game = () => {
    const [boarch, setBoarch] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = Winner(boarch)
    const handleClick = (index) => {
        const boardCopy = [...boarch]
        if (winner || boardCopy[index]) return
        boardCopy[index] = xIsNext ? "X" : "O";
        setBoarch(boardCopy)
        setXIsNext(!xIsNext)
    }
    const hendleResetGame = () => {
        setBoarch(Array(9).fill(null))
        setXIsNext(true)
    }
    return (
        <div>
            <Table cells={boarch} onClick={handleClick}></Table>
            {winner && <div className="winner-game">
                {winner ? `Winner is ${winner}` : ""}
            </div>}
            <button className='gameReset' onClick={hendleResetGame}>Rese Game</button>
        </div>


    );
};

export default Game;