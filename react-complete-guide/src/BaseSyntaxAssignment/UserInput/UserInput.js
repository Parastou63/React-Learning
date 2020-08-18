import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    const style = {
        border: '2px solid red',
        display: 'block',
        margin: '0 auto'
    };
    return (
        <input type="text" style={style} onChange={props.changed} value={props.userName} />
    );
}

export default userInput;



