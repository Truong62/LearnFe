import React from 'react';

const Cell = (props) => {
    return (
        <div className='game-Cell' onClick={props.click}>
            {props.value}
        </div>
    );
};

export default Cell;