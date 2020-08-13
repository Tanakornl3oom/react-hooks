import React, { useRef } from 'react';

function UseRef() {
    const inputEl = useRef<HTMLInputElement>(null);
    const inputElTest = useRef<HTMLInputElement>(null);

    const onButtonClick = () => {
        if (inputEl?.current) inputEl.current.focus();
        console.log(inputEl);
    };

    const onButtonClickTest = () => {
        if (inputElTest?.current) inputElTest.current.focus();
        console.log(inputElTest);
    };

    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>

            <input ref={inputElTest} type="text" />
            <button onClick={onButtonClickTest}>test the input</button>
        </>
    );
}

export default UseRef;
