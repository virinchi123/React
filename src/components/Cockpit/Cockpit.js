import React,{ useEffect, useRef } from 'react';
import './Cockpit.css';
import AuthorisationContext from '../context/auth-context.js';
import styled from 'styled-components';

const StyledButton = styled.button`
 background-color: ${props => props.alts ? 'red' : 'green'};
      font: inherit;
      color:white;
      border: 1px solid gray,
      cursor: pointer;
      padding: 16px;
      margin: 5px;
      boxShadow: 0 5px 3px #ccc;
      &:hover{
        background-color: ${props => props.alts ? 'salmon' : 'lightgreen'};
        color: black;
      }
`


const Cockpit = (props) =>
{


    const buttonRef = useRef(null);

    useEffect(() => {
        console.log("UseEffect is running");
        buttonRef.current.click();

        return(()=>'cleanup work in progress');
    }, []);

    const classes = [];
    if (props.persons.length < 2) {
        classes.push('red');
    }
    if (props.persons.length < 1) {
        classes.push('bold');
    }
    return(
        <div>
            <h1>Hi! I am a React App</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <StyledButton ref={buttonRef} id="ShowPersonsButton" alts={props.showPersons} onClick={() => props.togglePersons()}>Show Persons</StyledButton>
            <AuthorisationContext.Consumer>{(context)=><StyledButton onClick ={context.login}>Log In</StyledButton>}</AuthorisationContext.Consumer>
        </div>
    )
}

export default Cockpit;