import React from 'react';
import Person from './Person/Person';
//import { checkPropTypes } from 'prop-types';

const Persons = (props) =>
{
    return props.persons.map((person, index) => {
            return (
                <Person name={person.name}
                    age={person.age}
                    click={() => props.clicked("test")}
                    key={person.id}
                    changed={(event) => props.changed(event, person.id) }
                    delete={() => props.delete(index)}
                    login={()=> props.login(index)}
                    authenticationStatus={person.authenticated}
                   />
            );
        })
};

export default Persons;


