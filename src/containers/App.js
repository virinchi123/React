import React, { Component } from 'react';
import './App.css';
//import './Person/Person.css';
import AuthorisationContext from '../components/context/auth-context';
import Persons from "../components/Persons/Persons";
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    state={
      persons: [
        { id: '1', name: "Virinchi", age: 20, authenticated:false },
        {id: '2', name: "test", age: 100, authenticated :false }
      ],
      showPersons:false,
      authenticated: false
    };

  switchNameHandler = (newName) => {
      this.setState({persons: [
        { name: "Virinchi", age: 20 },
        { name: newName, age: 101 }
      ]});
  }


  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
    if(!this.state.showPersons)
    {
    document.getElementById("ShowPersonsButton").innerHTML="Hide Persons";
    //style.backgroundColor='red';
    }
    else{
      document.getElementById("ShowPersonsButton").innerHTML = "Show Persons";
    }
  }

  nameChangedHandler = (event,id) => {
    const newPersons=[...this.state.persons];
    const index= newPersons.findIndex(p=>
      {
        return p.id===id;
      })
    const thisPerson = newPersons[index];
    thisPerson.name=event.target.value;
    this.setState({
        persons: [...newPersons]
  });
}
  loginHandler=(index) =>{
    const person = [...this.state.persons];
    if (person[index] === undefined) {
      this.setState({ authenticated: true });
    }
    else{
      person[index].authenticated=true;
      this.setState({person})
    }
  }
  deleteHandler = (index) => {
    const person = [...this.state.persons];
    person.splice(index, 1);
    this.setState({ persons: person });
  }

  render(){
    let personCode = null;
    if(this.state.showPersons)
    {
      personCode=(
        <Persons
          persons={this.state.persons}
          clicked={this.switchNameHandler}
          changed={this.nameChangedHandler}
          delete ={this.deleteHandler}
          login={this.loginHandler}
          isAuthenticated={this.state.authenticated}>
        </Persons>
      );
    }

    return(
    <div className="App">
        <AuthorisationContext.Provider value={{
          authenticated: this.state.authenticated,
          login: this.loginHandler
          }}>
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          togglePersons={() => this.togglePersonsHandler()}
        />
        {personCode}
        </AuthorisationContext.Provider>
    </div>
  );
}
}

export default App;