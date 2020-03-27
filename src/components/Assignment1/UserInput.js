import React from 'react';

/*class UserInput extends Component{

    render(){

    const style = {
        border: '2px solid black'
    };

    return <input type="text" style={style} value={this.props.init} onChange={this.props.Click}></input>
    }
}*/
const UserInput = (props)=>{
    const style = {
        border: '2px solid black'
    };

    return (<input type="text" style={style} value={props.init} onChange={props.Click}/>);
}

export default UserInput;