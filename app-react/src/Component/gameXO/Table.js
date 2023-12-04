import React from 'react';
import Cell from './Cell';
// import { Winner } from '../../helper';

const Table = (props) => {
    console.log(props)
    return (
        <div className='table-Game'>
            {props.cells.map((item, index) => (
                <Cell key={index}
                    value={item}
                    onClick={() => props.onClick(index)}
                    className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
                ></Cell>
            ))}
        </div>
    );
};

export default Table;