import React from 'react';

const AuthorisationContext = React.createContext({
    authenticated:false,
    login: ()=>{}
    }    
    );

export default AuthorisationContext;