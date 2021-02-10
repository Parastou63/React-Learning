import React from 'react';
import './Cockpit.css';
const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPeople) {
        btnClass = 'Red';
    }
    if (props.people.length <= 2) {
        assignedClasses.push('red'); // classes = ['red']
    }
    if (props.people.length <= 1) {
        assignedClasses.push('bold'); // classes = ['red', 'bold']
    }
    return (
        <div className='Cockpit'>
            <h1>{props.title}<span role='img' aria-label='Balloon'>🎈</span></h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle People</button>
        </div>
    );
};

export default cockpit;
