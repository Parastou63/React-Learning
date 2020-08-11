import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }
  switchNameHandler = () => {
    //console.log('Was clicked!');
    //DON'T DO THID: this.state.people[0].name = 'Maximilian';
this.setState({
  people: [
    { name: 'Maximilian', age: 28 },
    { name: 'Manu', age: 29 },
    { name: 'Stephanie', age: 27 }
  ]
})
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App.🎈</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.people[0].name} age={this.state.people[0].age} />
        <Person name={this.state.people[1].name} age={this.state.people[1].age} >My Hobbies: Racing</Person>
        <Person name={this.state.people[2].name} age={this.state.people[2].age} />

      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m React App!'));
  }
}

export default App;
