import React from 'react';

const ValidationComponent = (props) => {
    let paragraph = null;
    if(props.length<5)
    {
        paragraph = 'Text too short';
    }
    else if(props.length>15)
    {
        paragraph = 'Text too long';
    }
    else{
        paragraph = 'Text long enough';
    }
    return(
        <p>{paragraph}</p>
    );
}

export default ValidationComponent;