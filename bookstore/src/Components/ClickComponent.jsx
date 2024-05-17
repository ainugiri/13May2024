import React, {Fragment, useRef} from 'react';
export default function ClickComponent() {
    console.log("ClickComponent");
    
    const focusPoint = useRef(null);

    const handleClick = () => {
        focusPoint.current.value = "React useRef is used to access the DOM element directly.";
        focusPoint.current.focus();
    };

    return (
        <Fragment>            
            <div>
                <h1>Hi. Welcome! This is Click Component</h1>
                <button onClick={handleClick}>Click me</button>
            </div>
                <label>useRef</label> <br />
                <textarea ref={focusPoint}></textarea>
        </Fragment>
    )
}