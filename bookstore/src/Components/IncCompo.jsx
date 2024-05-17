import React, {useEffect, useState} from 'react'

export default function IncCompo(props){
    const [count, setCount] = useState(props.count);

    useEffect(() => {
        console.log(count);
        document.title = `👍 ${count}`;
    }, [count]);


    return (
        <div>
            <h1>Hi. Welcome!</h1>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                👍</button> <span>{count}</span>
        </div>
    );
}