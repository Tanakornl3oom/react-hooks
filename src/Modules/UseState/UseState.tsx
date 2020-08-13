import React, { useState } from 'react';

function UseState() {
    const [example, setExample] = useState<number>(0);

    const increase = () => {
        setExample(prevCount => prevCount + 1);
    };
    const decrease = () => {
        setExample(prevCount => prevCount - 1);
    };

    return (
        <>
            <h1>UseState React Hooks</h1>
            <p>เหมือน this.state</p>
            <p>Syntax const [state,setState] = useState(value)</p>
            <p>state คือ ค้าของ state</p>
            <p>setState คือ function ที่เอาไว้ set ค้า</p>

            <p>Example : {example}</p>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
        </>
    );
}

export default UseState;
