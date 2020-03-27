import React, { Component } from 'react';
import InputField from './InputField';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class Root extends Component {
    state = {
        text:''
    };
    nameChangedHandler = (event) => {
        const val = event.target.value;
        this.setState({text: val});
    }

    deleteHandler = (event,index) => {
        let newText=this.state.text.split('');
        console.log(newText);
        newText.splice(index,1);
        let newTexts=newText.join('');
        console.log(newTexts);
        this.setState({text:newTexts})
    }
    render() {
        let splits=this.state.text;
        let characters= splits.split("").map((character,index) => {
            return(
                <CharComponent
                    character={this.state.text[index]}
                    delete={(event) => {this.deleteHandler(event,index)}}
                />
            );
        })

        return(
            <div className="Root">
                <h1>Hi! I am a React App</h1>
                <InputField 
                changed={this.nameChangedHandler}
                container={this.state.text}
                />
                <ValidationComponent
                length={this.state.text.length}
                />
                {characters}
            </div>
        );
    }
}

export default Root;