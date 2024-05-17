import {useState, createContext, useContext} from 'react';
import React from 'react';
const NameContext = createContext();


function FirstComponent() {
    const [name, setName] = React.useState('Giri Prasad P');

    return(
        <NameContext.Provider value={name}>
            <h1>Hi. Welcome, This is First Component!</h1>
            <SComponent />
        </NameContext.Provider>
    )
    
}   

function SComponent(){
    return(
        <div>
            <h5>Hi Welcome!, This is SComponent</h5>
            <TComponent />
        </div>
    )
}

function TComponent(){
    const name = useContext(NameContext);
    return(
        <div>
            <h5>Hi. Welcome! TComponent</h5>
            <p>${name} </p>
        </div>
    )

    // Context is a way to pass data through the component tree without having to pass props down manually at every level.
    // provider is a component that allows consuming components to subscribe to context changes.
    // useContext is a hook that returns the current context value for a context.
}

export {FirstComponent, SComponent, TComponent}