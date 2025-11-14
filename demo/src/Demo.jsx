import React from 'react'

const Demo = () => {

    const handleEvent = (btnNo) => {
        alert("You clicked on button "+btnNo)
    }

    const handleEvent1 = () => {
        console.log("btn Clicked")
    }
    

    return (
       <div >
         <button className='m-5 px-4 py-1 bg-orange-400 text-2xl rounded-xl' onClick={()=>handleEvent(1)}>Click me 1</button>
          <button className='m-5 px-4 py-1 bg-orange-400 text-2xl rounded-xl' onClick={()=>handleEvent("good morning")}>Click me 2</button>
          <button className='m-5 px-4 py-1 bg-orange-400 text-2xl rounded-xl' onClick={handleEvent1}>Click me 3</button>
          <button className='m-5 px-4 py-1 bg-orange-400 text-2xl rounded-xl' onClick={()=>
            console.log("Hello sir")
          }>Click me 4</button>
       </div>
    )
}

export default Demo