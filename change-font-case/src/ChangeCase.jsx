import React from 'react'
import { useState } from 'react';
import { BsAlphabetUppercase } from "react-icons/bs";
import { RxLetterCaseLowercase } from "react-icons/rx";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { FaUnderline } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa6";
import { FaAlignRight } from "react-icons/fa6";
import { FaAlignCenter } from "react-icons/fa6";

const ChangeCase = () => {

    const [font, setFont] = useState('lowercase');
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);
    const [textSize, setTextSize] = useState('');
    const [textAlign,setTextAlign]=useState('');
    const [fontColor,setFontColor]=useState('');

    const handleChange = (e) => {
        setTextSize(e.target.value);
    }

    const handleAlingnment = (e) =>{
        setTextAlign(e.target.value);
    }

    const handleFontColor = (e) =>{
        setFontColor(e.target.value);
    }

    return (
        <div>
            <div className='flex flex-wrap flex-col justify-center p-4'>
                <div className='flex flex-wrap justify-between text-center'>
                    <button type="button" className='bg-slate-400 cursor-pointer py-1 px-3 m-2 rounded' onClick={() => setFont('uppercase')}><BsAlphabetUppercase/></button>
                    <button type="button" className='bg-slate-400 cursor-pointer py-1 px-3 m-2 rounded' onClick={() => setFont('lowercase')}><RxLetterCaseLowercase/></button>
                    <button type="button" className='bg-slate-400 cursor-pointer py-1 px-3 m-2 rounded' onClick={() => setFont('capitalize')}><RxLetterCaseCapitalize/></button>
                    <button type="button" className={` cursor-pointer py-1 px-3 m-2 rounded ${isBold ? 'bg-slate-600' : 'bg-slate-400'}`} onClick={() => setIsBold(!isBold)}><FaBold/></button>
                    <button type="button" className='bg-slate-400 cursor-pointer py-1 px-3 m-2 rounded ' onClick={() => setIsItalic(!isItalic)}><FaItalic/></button>
                    <button type="button" className='bg-slate-400 cursor-pointer py-1 px-3 m-2 rounded ' onClick={() => setIsUnderline(!isUnderline)}><FaUnderline/></button>
                </div>
                <div className='flex flex-wrap justify-evenly m-2 '>
                    <select name="textSize " id="textSize" className='border m-1 px-2 py-1 rounded' onChange={handleChange}>
                        <option value="" selected disabled>Select Text Size</option>
                        <option value="text-2xl" className='text-center font-bold'>2xl</option>
                        <option value="text-3xl" className='text-center font-bold'>3xl</option>
                        <option value="text-4xl" className='text-center font-bold'>4xl</option>
                        <option value="text-5xl" className='text-center font-bold'>5xl</option>
                        <option value="text-6xl" className='text-center font-bold'>6xl</option>
                    </select>
                    <select name="" id="alignement" className='border px-2 m-1 py-1 rounded text-black' onChange={handleAlingnment}>
                        <option value="" selected disabled>Select Alignement</option>
                        <option value="text-left"   className='text-center'>Left</option>
                        <option value="text-right"  className='text-center'>Right</option>
                        <option value="text-center" className='text-center'>Center</option>
                    </select>
                    <select name="" id="" className='border px-2 m-1 py-1 rounded ' onChange={handleFontColor}>
                        <option value="" selected disabled >Select text color </option>
                        <option value="text-amber-600"  className='text-center'>Amber</option>
                        <option value="text-blue-600"   className='text-center'>Blue</option>
                        <option value="text-red-500"    className='text-center'>Red</option>
                        <option value="text-purple-600" className='text-center'>purple</option>
                        <option value="text-cyan-500"   className='text-center'>cyan</option>
                    </select>
                </div>
                
            </div>
            <div className='flex justify-center p-2'>
                <textarea className={`border w-[98%] rounded  h-[60vh] p-2 ${fontColor} ${textAlign} ${textSize} ${font} ${isBold ? 'font-bold' : ''} ${isItalic ? 'italic' : ''} ${isUnderline ? 'underline' : ''}`} id='text-area' placeholder='Type text here...' ></textarea>
            </div>
        </div>
    )
}

export default ChangeCase