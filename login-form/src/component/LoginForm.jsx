import React from 'react'
import { useId } from 'react';
import { useState } from 'react';

const LoginForm = ({ users, setUsers }) => {

    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [mob, setMobile] = useState('')


    const id = useId();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            name: name,
            city: city,
            mob: mob
        };

        setUsers([...users, newUser]);

        console.log("Email:", name);
        console.log("Password:", city);
        console.log("Mobile:", mob);
    }

    return (
        <div className='p-2'>
            <form className='' onSubmit={handleSubmit}>
                <fieldset className=' border-3 border-blue-400 rounded '>
                    <legend className='text-blue-400 text-4xl font-bold underline px-2'>Login From</legend>

                    <div className='px-4 py-2 text-2xl my-2.5'>
                        <label htmlFor={`name-${id}`} className='block'>Name</label>
                        <input type="name" name='name' id={`name-${id}`} placeholder='Enter your name..' className='px-2 py-1 w-full border border-blue-400 rounded' onChange={e => setName(e.target.value)} value={name} />
                    </div>

                    <div className='px-4 py-2 text-2xl my-2.5'>
                        <label htmlFor={`city-${id}`} className='block'>City</label>
                        <input type="text" name='city' id={`city-${id}`} placeholder='Enter your city..' className='px-2 py-1 w-full border border-blue-400 rounded' onChange={e => setCity(e.target.value)} value={city} />
                    </div>

                    <div className='px-4 py-2 text-2xl my-2.5'>
                        <label htmlFor={`phone-${id}`} className='block'>Mobile number</label>
                        <input type="number" name='phone' id={`phone-${id}`} placeholder='Enter your mobile number..' className='px-2 py-1 w-full border border-blue-400 rounded outline-0' onChange={e => setMobile(e.target.value)} value={mob} />
                    </div>

                    <div className='px-4 py-2 text-2xl my-2.5 flex justify-center'>
                        <button type="submit" className='px-4 py-1 rounded bg-blue-400 font-extrabold shadow-lg cursor-pointer hover:bg-blue-500 '>Login</button>
                    </div>

                </fieldset>
            </form>
        </div>
    )
}

export default LoginForm