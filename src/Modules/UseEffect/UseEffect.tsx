import React, { useEffect } from 'react';

function UseEffect() {
    return (
        <>
            <h1>UseEffect React Hooks</h1>
            <p>
                useEffect เป็นเหมือนการนำ componentDidMount, componentDidUpdate และ
                componentWillUnmount มารวมกันเ
            </p>
            <p>
                {`useEffect (() => { //do something return ()=>{ //unmount clear state} }, // state ที่เราสนใจจะ subscribe [dependency])`}
            </p>
            <p>
                useEffect ก็จะ trigger ทุกครั้งที่ state หรือ props ของ function เปลี่ยนแปลง
                แต่เราสามารถกำหนดได้ด้วย ว่าจะสนใจ state หรือ props ไหน
            </p>
            <p>useEffect เหมาะสำหรับเอาไปใช้รอรับ callback จาก ajax หรือทำ redux dispatch</p>
        </>
    );
}

export default UseEffect;
