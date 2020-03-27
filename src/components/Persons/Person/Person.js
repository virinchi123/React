import React from 'react';
import styled from 'styled-components';
import AuthorisationContext from '../../context/auth-context.js';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 5px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width:500px){
            width: 450px;}
`;
const StyledButton = styled.button`
    background-color:${props => props.alt?'red':'green'};
    color:white;
    &:hover{
        background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: black;
`


const Person = (props) => {
    return (<StyledDiv><AuthorisationContext.Consumer>{(context)=>context.authenticated||props.authenticationStatus ? <p>Authenticated</p>: <p>Please log in</p>}</AuthorisationContext.Consumer>
    <p onClick={props.click}>Hello! I am {props.name}, and I am {props.age} years old!</p>
    <input type= "text" onChange={props.changed} value={props.name}></input>
    <StyledButton alt= 'false' onClick= {props.delete}>Delete</StyledButton>
    <StyledButton alt='' onClick={props.login}>Log in</StyledButton>
    </StyledDiv>);
}

export default Person;