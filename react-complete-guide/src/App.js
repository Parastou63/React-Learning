import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserInput from './BaseSyntaxAssignment/UserInput/UserInput';
import UserOutput from './BaseSyntaxAssignment/UserOutput/UserOutput';

class App extends Component {
  state = {
    people: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    useroutputs: [
      { userName: 'Matthew' },
      { userName: 'Parastou' }
    ],
    showPeople: false
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    //DON'T DO THID: this.state.people[0].name = 'Maximilian';
    this.setState({
      people: [
        { name: newName, age: Math.floor(Math.random() * 30) },
        { name: 'Manu', age: Math.floor(Math.random() * 30) },
        { name: 'Stephanie', age: Math.floor(Math.random() * 30) }
      ]
    })
  }
  nameChangeHandler = (event) => {
    this.setState({
      people: [
        { name: 'Max', age: Math.floor(Math.random() * 30) },
        { name: event.target.value, age: Math.floor(Math.random() * 30) },
        { name: 'Stephanie', age: Math.floor(Math.random() * 30) }
      ]
    })
  }

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

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer',
      margin: '8px'
    };

    let people = null;
    
    if (this.state.showPeople) {
      people = (
        <div>
          <Person
            name={this.state.people[0].name}
            age={this.state.people[0].age} />
          <Person
            name={this.state.people[1].name}
            age={this.state.people[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')}
            changed={this.nameChangeHandler}
          >My Hobbies: Racing</Person>
          <Person
            name={this.state.people[2].name}
            age={this.state.people[2].age} />
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I am a React App.🎈</h1>
        <p>This is really working!</p>
        <button style={style}
          onClick={() => { this.switchNameHandler('Maximilian!!') }}>Switch Name</button>
        <button style={style}
          onClick={this.togglePeopleHandler}>Toggle People</button>
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
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m React App!'));
  }
}

export default App;
