import React from 'react';
import './Validation.css';
const validationText = (props) => {
    return (
        (props.textLength < 8) ?
            <p className='short-text'>The text length is too short.</p>
            : <p className='long-enough-text'>The text length is long enough.</p>
    );
}

export default validationText;