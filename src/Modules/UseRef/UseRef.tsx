import React, { useRef } from 'react';

function UseRef() {
    // use Ref access DOM node
    const inputEl = useRef<HTMLInputElement>(null);
    const inputElTest = useRef<HTMLInputElement>(null);

    //storing mutable variables
    const variable = useRef(0);

    const onButtonClick = () => {
        if (inputEl?.current) inputEl.current.focus();
        if (variable?.current !== null && variable?.current !== undefined)
            variable.current = variable.current + 1;
        console.log('variable.current', variable.current);
    };

    const onButtonClickTest = () => {
        if (inputElTest?.current) inputElTest.current.focus();
        console.log(inputElTest);
    };

    return (
        <>
            <h1>UseRef React Hooks</h1>
            <h1> ส่วนใหญ่ใช้กัน 2 ทำงาน</h1>
            <p>1. access dom</p>
            <p>Managing focus, text selection, or media playback.</p>
            <p>Integrating with third-party DOM libraries.</p>
            <input ref={inputElTest} type="text" />
            <button onClick={onButtonClickTest}>test the input</button>
            <p>
                2. store variable ไม่ค่อยได้ใช้เพราะไม่ re-render *ให้ check ได้จากกด focus the
                input แล้วดู log on chrome
            </p>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}

export default UseRef;
