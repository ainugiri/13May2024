import React, {useState} from 'react';
export default function Older() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(10);
    const [value3, setValue3] = useState(5);

    const incVal1 = () => {
        setState(value1 + 1);
    }
    const decVal1 = () => {
        setValue1(value1 - 1);
    }   

    const incVal2 = () => {
        setValue2(value2 + 1);
    }
    const decVal2 = () => {
        setValue2(value2 - 1);
    }

    const incVal3 = () => {
        setValue3(value3 + 1);
    }
    const decVal3 = () => {
        setValue3(value3 - 1);
    }

    return (
        <div>
            <h5>Hi. Welcome!</h5>  
            <button onClick = {decVal1}>-</button>Value1 is {value1}<button onClick = {incVal1}>+</button> <br />
            <button onClick = {decVal2}>-</button>Value2 is {value2}<button onClick = {incVal2}>+</button> <br />
            <button onClick = {decVal3}>-</button>Value3 is {value3}<button onClick = {incVal3}>+</button> <br />
        </div>
    );
}