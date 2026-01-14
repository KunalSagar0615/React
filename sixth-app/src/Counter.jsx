import { useState } from "react";

const Counter = () => {

    // let count = 10;
    const [count, setCount] = useState(10);

    const increment = () => {
        // count = count + 1;
        setCount(count + 1)
    }

    const decrement = () => {
        // count = count - 1;
        setCount(count - 1)
    }

    return (
        <div className="flex justify-center gap-10 text-8xl mt-10">
            <button type="button" className="bg-sky-400 px-5 rounded-2xl cursor-pointer" onClick={decrement}>-</button>

            <p>{count}</p>

            <button type="button" className="bg-sky-400 px-5 rounded-2xl cursor-pointer" onClick={increment}>+</button>
        </div>
    )
}

export default Counter

export const Counter2 = () => {

    // let count = 10;
    const [count, setCount] = useState(10);

    return (
        <div className="flex justify-center gap-10 text-8xl mt-10">
            <button type="button" className="bg-sky-400 p-5 rounded-2xl cursor-pointer flex justify-center text-center" onClick={() => setCount(count - 1)}>-</button>

            <p>{count}</p>

            <button type="button" className="bg-sky-400 flex justify-center text-center rounded-2xl cursor-pointer" onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}