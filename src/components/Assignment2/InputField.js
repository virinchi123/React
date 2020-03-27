import React from 'react';
import './InputField.css';
const InputField =(props)=>{
    return(
        <div>
        <input type="text" onChange={props.changed} value={props.container}></input>
    <p>{props.container.length}</p>
        </div>
    );
}

export default InputField;