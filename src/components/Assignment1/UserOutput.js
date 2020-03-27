import React from 'react';
/*
class UserOutput extends Component{
    /*constructor = (props) =>
    {
        super(props);
        string1=props.string1;
        string2=props.string2;
    }
    render()
    {
        return (
            <div>
                <p className="paragraph">{this.props.string1}</p>
                <p>{this.props.string2}</p>
            </div>
        );
    }
}*/

const UserOutput = (props) =>
{
    return(
        <div>
            <p className="paragraph">{props.string1}</p>
            <p>{props.string2}</p>
        </div>
    );
}
export default UserOutput;