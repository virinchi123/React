import React, { Component } from 'react';
import '../App.css';
import UserInput from './Assignment1/UserInput';
import UserOutput from './Assignment1/UserOutput';
import './Assignment1/UserOutput.css';

class App extends Component {

    state = {
        username: "User",
        showPersons: false
    };
    paragraphChangedHandler = (event) =>{
      this.setState(
        {
          username : event.target.value
        }
      );
      console.log(this.state);
    }

    render() {
        return (
            <div className="App">
                <UserInput init={this.state.username} Click={this.paragraphChangedHandler} />
                <UserOutput string1={this.state.username} string2="Hi" />
                <UserOutput string1="Test" string2={this.state.persons[0].name} />
            </div>
        );
    }
}

export default App;