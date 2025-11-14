import { useEffect } from "react";
import { useState } from "react"

const RegisterForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState({})
    const [isFormValid,setIsFormValid]=useState(false)

    useEffect(() => {

        const fieldErrors = {};

        if (firstName === '') {
            fieldErrors.firstName = 'first name cannot be empty'
        }

        if (lastName === '') {
            fieldErrors.lastName = 'last name cannot be empty'
        }

        if (email === '') {
            fieldErrors.email = 'email cannot be empty'
        } else {
            if (!(email.includes('@') && email.includes('.'))) {
                fieldErrors.email = 'email should be valid'
            }
        }

        if (password === '') {
            fieldErrors.password = 'password cannot be empty'
        } else {
            if (password.length < 6) {
                fieldErrors.password = 'password must e greater than 6 characters'
            }
        }

        if (confirmPassword === '') {
            fieldErrors.confirmPassword = 'confirm password cannot be empty'
        } else {
            if (password !== confirmPassword) {
                fieldErrors.confirmPassword = 'password and confirm password should be same'
            }
        }

        const isFirstNameValid = firstName!==''
        const isLastNameValid = lastName!==''
        const isEmailValid = email.includes('@') && email.includes('.')
        const isPasswordValid =  password.length >= 6
        const isConfirmPasswordValid = confirmPassword.length >=6 && confirmPassword == password

        setIsFormValid(isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid)

        setError(fieldErrors);
    }, [firstName, lastName,email,password,confirmPassword])


    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            firstName, lastName, email, password, confirmPassword
        }

        console.log("User Data: ", userData)
    }

    return (
        <div className="bg-gray-200 min-h-screen p-4">
            <h1 className="text-center my-5 text-4xl font-bold">Register Form</h1>
            <form className="shadow-md border rounded-2xl p-6 md:w-1/2 lg:w-1/3 mx-auto hover:duration-100 hover:shadow-purple-600 hover:shadow-2xl" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <div className="mb-1 font-semibold">First Name</div>
                    <input type="text" className="w-full border rounded-sm p-2 h-10 outline-none focus:border-4 focus:border-blue-700" onChange={(e) => setFirstName(e.target.value)} />
                    {error.firstName && <p className="text-red-600 italic">{error.firstName}</p> }
                </div>

                <div className="mb-4">
                    <div className="mb-1 font-semibold">Last Name</div>
                    <input type="text" className="w-full border rounded-sm p-2 h-10 outline-none focus:border-4 focus:border-blue-700" onChange={(e) => setLastName(e.target.value)} />
                    {error.lastName && <p className="text-red-600 italic">{error.lastName}</p> }
                </div>

                <div className="mb-4">
                    <div className="mb-1 font-semibold">Email</div>
                    <input type="email" className="w-full border rounded-sm p-2 h-10 outline-none focus:border-4 focus:border-blue-700" onChange={(e) => setEmail(e.target.value)} />
                    {error.email && <p className="text-red-600 italic">{error.email}</p> }
                </div>

                <div className="mb-4">
                    <div className="mb-1 font-semibold">Password</div>
                    <input type="password" className="w-full border rounded-sm p-2 h-10 outline-none focus:border-4 focus:border-blue-700" onChange={(e) => setPassword(e.target.value)} />
                    {error.password && <p className="text-red-600 italic">{error.password}</p> }
                </div>

                <div className="mb-4">
                    <div className="mb-1 font-semibold">Confirm Password</div>
                    <input type="password" className="w-full border rounded-sm p-2 h-10 outline-none focus:border-4 focus:border-blue-700" onChange={(e) => setConfirmPassword(e.target.value)} />
                    {error.confirmPassword && <p className="text-red-600 italic">{error.confirmPassword}</p> }
                </div>
                <div className="mb-4 ">
                    <button type="submit" className="w-full py-2 rounded-sm font-semibold bg-green-400 text-white cursor-pointer" disabled={!isFormValid}>Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm