import React from 'react'

const Demo2 = () => {

    var  tcolor="white",temp;
    var cName='null';
    const mouseEvent = () =>{
        console.log("Mouse entered");
    }


    const mouseEvent1 = () => {
        console.log("Mouse leave event");
    }

    
    var cnt=0
    const ChangeEvent = (e) =>
    {
        console.log(e.target.value);
        cnt++;
        console.log("change count ",cnt)
    }
    
    const setTextColor = (e) => {
        const {value, id} = e.target
        tcolor=value
        temp = id
    }

    const setColor = () => {
        if(temp=='bgcolor')
        document.body.style.backgroundColor=tcolor
        else
            document.body.style.color=tcolor
    }

    const colorName = (e) =>{
        cName=e.target.value
    }

    const changeColor = () =>{
        if(cName=='null')
            console.log("first enter the color")
        else
            document.body.style.backgroundColor=cName
    }

  return (
    <div className='m-5'>
        <h1 className='text-4xl' onMouseEnter={mouseEvent} onMouseLeave={mouseEvent1} >Welcome to react event</h1>
        <input type="text" onChange={ChangeEvent} className='text-4xl m-2 bg-gray-200 p-4 my-3 border border-black rounded'  placeholder='Enter your name..' />
        <input type="email" onChange={ChangeEvent} className='text-4xl m-2 bg-gray-200 p-4 my-3 border border-black rounded'  placeholder='Enter your Email..' />
    
    <hr/>
        <div>
            <label htmlFor="bgcolor">Background Color</label><br />
            <input type="color" name='color' id='bgcolor' onChange={setTextColor} />
            <hr />
            <label htmlFor="textcolor">Text Color</label><br />
            <input type="color" name='color' id='textcolor' onChange={setTextColor} /> <br />
            <button onClick={setColor} className='px-4 py-1 bg-blue-600 text-3xl rounded m-5'>Set Color</button>
        </div>

        <div>
        <input type="text" name="choosecolor" placeholder='Enter color.. ' onChange={colorName} />
        <button className='px-4 py-1 bg-blue-600 text-3xl rounded m-5' onClick={changeColor}>ChangeColor</button>
        </div>

    </div>
  )
}

export default Demo2