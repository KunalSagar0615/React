import React from 'react'
import { useState } from 'react'

const Addition = () => {

    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [result, setResult] = useState(0)

    const handleChange1 = (e) => {
        setNum1(e.target.value)
    }

    const handlechage2= (e) => {
        setNum2(e.target.value)
    }

    const evaluateResult = () =>{
        setResult((num1 * 1)+(num2*1))
    }

    const hadleReset = () => {
        setNum1('')
        setNum2('')
        setResult(0)
    }

    return (
        <div className='h-[100vh] flex justify-center items-center flex-col'>
            <h1 className='underline font-extrabold text-2xl mb-5'>Addition</h1>
            <div className=''>
                <input type="number" name="num2" className='border-2 border-black mr-2 rounded px-3 py-1' onChange={handleChange1} value={num1} placeholder='Enter first no'/>
                +
                <input type="number" name="num1" className='border-2 border-black ml-2 rounded px-3 py-1' onChange={handlechage2} value={num2} placeholder='Enter second no' />
                <button type="button" className='border-2 border-black ml-2 rounded px-3 py-1' onClick={evaluateResult}>Add</button>
                <button type="button" className='border-2 border-black ml-2 rounded px-3 py-1' onClick={hadleReset}>Reset</button>
            </div>
            <h1 className='mt-5 font-extrabold text-3xl'><span>Result : </span>{result}</h1>
        </div>
    )
}

export default Addition