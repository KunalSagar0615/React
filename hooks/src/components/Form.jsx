import React from 'react'
import { useState } from 'react'

const Form = () => {

    const [formData, setFormData] = useState(
        {
            name: " ",
            email: " ",
            phone: " ",
            city: " "
        }
    )


    return (
        <div className='flex justify-center items-center w-[100vw] h-[100vh]'>

            <div className='text-center border-2 border-black w-[22vw] rounded'>
                <form action="">
                    <div>
                        <input type="text" name='name' placeholder='Enter name..' className='py-1 px-3 m-4 outline-none border-2 border-black rounded  ' /><br />
                    </div>

                    <div>
                        <input type="email" name='email' placeholder='Enter email..' className='py-1 px-3 m-4 outline-none border-2 border-black rounded  ' /><br />
                    </div>

                    <div>
                        <input type="text" name='phone' placeholder='Enter phone..' className='py-1 px-3 m-4 outline-none border-2 border-black rounded  ' /><br />
                    </div>
                    <div>
                        <input type="text" name='city' placeholder='Enter City..' className='py-1 px-3 m-4 outline-none border-2 border-black rounded  ' /><br />
                    </div>
                    <div>
                        <button type="submit" className='py-1 px-3 m-4 outline-none border-2 border-black rounded '>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form