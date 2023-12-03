import React from 'react';
import Cell from './Cell';

const Table = () => {
    return (
        <div className='table-Game'>
            {Array(9).fill().map((item, index) => (
                <Cell key={index}></Cell>
            ))}
        </div>
    );
};

export default Table;