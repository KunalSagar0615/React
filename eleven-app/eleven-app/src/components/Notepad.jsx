import { FaBold } from "react-icons/fa";
import { LiaItalicSolid } from "react-icons/lia";
import { FaUnderline } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa";
import { FaAlignCenter } from "react-icons/fa";
import { FaAlignRight } from "react-icons/fa";
import { BsAlphabetUppercase } from "react-icons/bs";
import { RxLetterCaseLowercase } from "react-icons/rx";
import { RxLetterCaseCapitalize } from "react-icons/rx";


import { useState } from "react";
import { useRef } from "react";


const Notepad = () => {

    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);
    const [alignment, setAlignment] = useState('text-start');
    const [fontSize, setFontSize] = useState('text-xl');
    const [textCase, setTextCase] = useState('lowercase');

    const textArea = useRef(null);

    const changeFontColor = (e) => {
        textArea.current.style.color = e.target.value;
    }

    return (
        <section className="p-3">
            {/* Toolbar */}
            <div className="flex items-center gap-3 py-2 text-2xl">
                {/* Bold, Italics and Underline */}
                <div className="flex items-center border border-gray-300">
                    <button type="button" className={`cursor-pointer p-1 ${isBold ? 'bg-slate-300' : ''} `} onClick={() => setIsBold(!isBold)}><FaBold /></button>
                    <button type="button"
                        onClick={() => setIsItalic(!isItalic)}
                        className={`cursor-pointer p-1 ${isItalic ? 'bg-slate-300' : ''} `}><LiaItalicSolid /></button>

                    <button type="button" onClick={() => setIsUnderline(!isUnderline)}
                        className={`cursor-pointer p-1 ${isUnderline ? 'bg-slate-300' : ''} `}><FaUnderline /></button>
                </div>

                {/* Align Left, Center and Right */}
                <div className="flex items-center border border-gray-300">
                    <button type="button" onClick={() => setAlignment('text-start')}
                        className={`cursor-pointer p-1 ${alignment == 'text-start' ? 'bg-slate-300' : ''} `}
                    ><FaAlignLeft /></button>
                    <button type="button" onClick={() => setAlignment('text-center')}
                        className={`cursor-pointer p-1 ${alignment == 'text-center' ? 'bg-slate-300' : ''} `}><FaAlignCenter /></button>
                    <button type="button" onClick={() => setAlignment('text-end')}
                        className={`cursor-pointer p-1 ${alignment == 'text-end' ? 'bg-slate-300' : ''} `}><FaAlignRight /></button>
                </div>
                
                {/* Uppercase, Lowercase and CapitalCase */}
                <div className="flex items-center border border-gray-300">
                    <button type="button" onClick={() => setTextCase('lowercase')}
                        className={`cursor-pointer p-1 ${textCase == 'lowercase' ? 'bg-slate-300' : ''} `}><RxLetterCaseLowercase /></button>

                    <button type="button" onClick={() => setTextCase('uppercase')}
                        className={`cursor-pointer p-1 ${textCase == 'uppercase' ? 'bg-slate-300' : ''} `}
                    ><BsAlphabetUppercase /></button>
                    
                    <button type="button" onClick={() => setTextCase('capitalize')}
                        className={`cursor-pointer p-1 ${textCase == 'capitalize' ? 'bg-slate-300' : ''} `}><RxLetterCaseCapitalize /></button>
                </div>

                <div className="flex items-center border border-gray-300">
                    <input type="color" onChange={changeFontColor} />
                </div>
                
                <div className="flex items-center border border-gray-300">
                    <select onChange={(e) => setFontSize(e.target.value)}>
                        <option value="text-xl">xl</option>
                        <option value="text-2xl">2xl</option>
                        <option value="text-3xl">3xl</option>
                        <option value="text-4xl">4xl</option>
                        <option value="text-5xl">5xl</option>
                        <option value="text-6xl">6xl</option>
                    </select>
                </div>

            </div>

            {/* User Input */}
            <div className="h-[80vh]">
                <textarea ref={textArea} className={`rounded-2xl p-2 border border-gray-600 w-full h-full  
                ${isBold ? 'font-bold' : ''} 
                ${isItalic ? 'italic' : ''}
                ${isUnderline ? 'underline underline-offset-4' : ''} 
                ${alignment} ${fontSize} ${textCase}
                `}></textarea>
            </div>



        </section>
    )
}

export default Notepad