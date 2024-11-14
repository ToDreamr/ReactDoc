import React, { useState } from 'react';
export function StateButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    function Click(){
        return(
            <button onClick={handleClick}>
                Clicked {count} times
            </button>
        )
    }
    return (
        <div>
            <h3>Counters that update isolate</h3>
            <Click/>
        </div>
    );
}