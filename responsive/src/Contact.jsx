import { useState } from "react"

import large from "./assets/slider-image-1-large.jpg"
import small from "./assets/slider-image-1-small.jpg"

const Contact = () => {

    const [isShow, setIsShow] = useState(false);

    return (
        <>
        <h1 className="text-center text-6xl my-10 text-red-500 md:text-green-500 lg:text-blue-500">Good Morning</h1>
        <div>
            <img src={large} className="w-full hidden md:block" />
            <img src={small} className="w-full md:hidden"  />
        </div>
        
        <div className="flex justify-center text-3xl text-center my-10">
            <div>
                <input type={isShow ? 'text': 'password'} className="border rounded-2xl p-3" placeholder="Type your password..." />

                <button type="button" className="bg-slate-400 p-3 rounded-2xl cursor-pointer" onClick={() => setIsShow(!isShow)} >{isShow ? 'Hide': 'Show'}</button>
            </div>
        </div>
        </>
    )
}

export default Contact