import React from 'react';
import './Char.css';

const char = (props) => {
    return (
        (props.textLength) < 8 ?
            <p className='char-short' onClick={props.click}>{props.char}</p>
            : <p className='char-long-enough' onClick={props.click}>{props.char}</p>
    );
}

export default char;