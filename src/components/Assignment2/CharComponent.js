import React from 'react';

const CharComponent = (props) => {
    const paragraphStyle={
        display:'inline-block',
        textAlign: 'center',
        padding: '16px',
        margin: '16px',
        border: '1px solid black'
    }
    return(
    <p style = {paragraphStyle} onClick = {props.delete}>{props.character}</p>
    );
}

export default CharComponent;