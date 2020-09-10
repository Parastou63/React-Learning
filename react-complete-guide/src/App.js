import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserInput from './BaseSyntaxAssignment/UserInput/UserInput';
import UserOutput from './BaseSyntaxAssignment/UserOutput/UserOutput';
import Validation from './ListConditionalAssignment/Validation/Validation';
import Char from './ListConditionalAssignment/Char/Char';
//import Radium, { StyleRoot } from 'radium';
import styled from 'styled-components';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

const StyledButton = styled.button`
background-color: ${props => props.toggleColors ? 'red' : 'green'};
color: white;
font: inherit;
border: 1px solid green;
padding: 8px;
margin: 8px;
cursor: pointer;
&:hover {
  background-color: ${props => props.toggleColors ? 'salmon' : 'lightgreen'};
  color: black;
};
`;

class App extends Component {
  state = {
    people: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    useroutputs: [
      { userName: 'Matthew' },
      { userName: 'Parastou' }
    ],
    textContent: 'Jooj',
    showPeople: false
  }

  // switchNameHandler = (newName) => {
  //   //console.log('Was clicked!');
  //   //DON'T DO THID: this.state.people[0].name = 'Maximilian';
  //   this.setState({
  //     people: [
  //       { name: newName, age: Math.floor(Math.random() * 30) },
  //       { name: 'Manu', age: Math.floor(Math.random() * 30) },
  //       { name: 'Stephanie', age: Math.floor(Math.random() * 30) }
  //     ]
  //   })
  // }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(p => p.id === id);

    const person = {
      ...this.state.people[personIndex]
    };
    //const person = Object.assign({}, this.state.people[personIndex]);
    person.name = event.target.value;
    const people = [...this.state.people];
    people[personIndex] = person;
    this.setState({
      people: people
      // people: [
      //   { name: 'Max', age: Math.floor(Math.random() * 30) },
      //   { name: event.target.value, age: Math.floor(Math.random() * 30) },
      //   { name: 'Stephanie', age: Math.floor(Math.random() * 30) }
      // ]
    });
  };

  userNameChangeHandler = (event) => {
    this.setState({
      useroutputs: [
        { userName: event.target.value },
        { userName: 'Parastou' }
      ]
    })

  }

  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople;

    this.setState({
      showPeople: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    //const people = this.state.people;
    //const people = this.state.people.slice(); //slice copies arrays 
    const people = [...this.state.people]; //spread works in ES6 to copy objects or arrays
    people.splice(personIndex, 1);
    this.setState({ people: people });
  }

  changeTextHandler = (event) => {
    this.setState({
      textContent: event.target.value
    });
  }

  deleteCharHandler = (charIndex) => {
    const char = this.state.textContent.split('');
    char.splice(charIndex, 1);
    this.setState({ textContent: char.join('') });
  }

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid green',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   },
    //   margin: '8px'
    // };

    const textStyle = {
      width: '300px'
    }
    let people = null;

    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map((person, index) => {
            return <ErrorBoundary key={person.id}><Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            /></ErrorBoundary>
          })}

          {/* <Person
            name={this.state.people[0].name}
            age={this.state.people[0].age} />
          <Person
            name={this.state.people[1].name}
            age={this.state.people[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')}
            changed={this.nameChangedHandler}
          >My Hobbies: Racing</Person>
          <Person
            name={this.state.people[2].name}
            age={this.state.people[2].age} /> */}
        </div>
      );
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black',
      // }
    }

    //let classes = ['red', 'bold'].join(' ');
    const classes = [];
    if (this.state.people.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.people.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    let characters = null;

    if (this.state.textContent) {
      characters = (
        <div>
          {
            this.state.textContent.split('').map((letter, index) => {
              return <Char
                click={() => this.deleteCharHandler(index)}
                char={letter}
                key={index}
                textLength={this.state.textContent.length}
              />
            })
          }
        </div>
      );

    }

    return (
      // <StyleRoot>
      <div className="App">
        <h1>Hi, I am a React App.🎈</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        {/* <button style={style}
          onClick={() => { this.switchNameHandler('Maximilian!!') }}>Switch Name</button> */}
        <StyledButton toggleColors={this.state.showPeople} onClick={this.togglePeopleHandler}>
          Toggle People
          </StyledButton>
        {people}
        <UserInput
          userName={this.state.useroutputs[0].userName}
          changed={this.userNameChangeHandler}
        />
        <UserOutput
          userName={this.state.useroutputs[0].userName}
        />
        <UserOutput
          userName={this.state.useroutputs[1].userName}
        />
        <input type="text" style={textStyle} onChange={this.changeTextHandler} value={this.state.textContent} />
        <Validation
          textLength={this.state.textContent.length}
        />
        {characters}
      </div>
      /* </StyleRoot> */
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m React App!'));

  }
}

export default App;
//export default Radium(App);