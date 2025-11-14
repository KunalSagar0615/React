import React from 'react'
import { useState } from 'react'
import QRCode from 'react-qr-code'
import { FaDownload } from "react-icons/fa6";
import { IoPrintSharp } from "react-icons/io5";

const QrCodeGenerator = () => {

    const [userInput, setUserInput] = useState("")
    const [value, setValue] = useState("")

    const handleGenerateClick = () => {
        setValue(userInput)
    }

    const handleResetClick = () => {
        setUserInput('')
        setValue('')
    }

    return (
        <div>
            <h1 className='text-center text-blue-700 my-7 text-5xl font-mono'>QR Code Generator</h1>
            <div className='text-center'>
                <input type="text" onChange={e => setUserInput(e.target.value)} value={userInput} className='w-[70vw] px-2 border outline-none border-blue-300 py-2 rounded ' placeholder='Type here...' />

                <div className='flex justify-around my-5'>
                    <button className='rounded py-1 px-4 cursor-pointer bg-blue-400 ' onClick={handleGenerateClick} type="submit">Generate</button>
                    <button className='rounded py-1 px-4 cursor-pointer bg-red-500 ' onClick={handleResetClick} type="reset">Reset</button>
                </div>

                {
                    value.length > 0 && <div className='flex justify-center'>
                     <div className='w-[40vw]'>   
                    <div className='flex justify-center items-center mt-5'>
                        <QRCode value={value} className='border-2 p-2 rounded' />
                    </div>

                    <div className='flex justify-around mt-4'>
                        <button className='flex py-1 px-4 border-2 rounded justify-center items-center'><FaDownload />Print</button>
                        <button className='flex py-1 px-4 border-2 rounded justify-center items-center'><IoPrintSharp />Download</button>
                    </div>
                    </div>
                    </div>
                }

            </div>
        </div>
    )
}

export default QrCodeGenerator