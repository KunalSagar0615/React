import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { authService } from "../services/authService"

export function RegisterPage() {

  const navigate = useNavigate()

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  async function handleSubmit(e){
    e.preventDefault()

    const user = {
      name,
      email,
      password
    }

    try{

      await authService.register(user)

      alert("Employee Registered Successfully")

      setName("")
      setEmail("")
      setPassword("")

      navigate("/login")

    }catch(err){
      alert("Registration failed")
    }

  }

  return (

    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <form 
      onSubmit={handleSubmit}
      autoComplete="off"
      className="bg-white p-8 rounded-xl shadow-lg w-[350px] hover:shadow-2xl transition duration-300"
      >

        {/* Hidden fields to stop Chrome autofill */}
        <input type="text" name="fake-user" autoComplete="username" style={{display:"none"}} />
        <input type="password" name="fake-pass" autoComplete="new-password" style={{display:"none"}} />

        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Register Employee
        </h2>

        <input
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-400 transition"
        placeholder="Name"
        autoComplete="off"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />

        <br/><br/>

        <input
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-400 transition"
        placeholder="Email"
        type="email"
        autoComplete="new-email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />

        <br/><br/>

        <input
        type="password"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-blue-400 transition"
        placeholder="Password"
        autoComplete="new-password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />

        <br/><br/>

        <button 
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 hover:scale-[1.02] transition duration-200"
        >
          Register
        </button>

      </form>

    </div>

  )

}