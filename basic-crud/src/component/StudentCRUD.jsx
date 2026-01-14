import React from 'react'
import { useState } from 'react'

const StudentCRUD = () => {

    const [students, setStudents] = useState([])
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [studentId, setStudentId] = useState('')
    const [idFound, setIdFound] = useState(false)


    const addStudentData = () => {
        const newStudent = { name, age, email, mobile }
        setStudents([...students, newStudent])
        setName('')
        setAge('')
        setEmail('')
        setMobile('')
    }

    const findStudent = () => {    
    }

    return (
        <div className="min-h-screen flex flex-col gap-2 items-center justify-center bg-gray-100 p-2">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
                    Add Student
                </h2>

                <form className="space-y-4">
                    <input type="text" placeholder="Enter student name" value={name} onChange={(e) => setName(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />

                    <input type="number" placeholder="Enter age" value={age} onChange={(e) => setAge(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />

                    <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />

                    <input type="text" placeholder="Enter mobile number" value={mobile} onChange={(e) => setMobile(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />

                    <button type="button" onClick={addStudentData}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded transition duration-200">
                        Add Student
                    </button>
                </form>
            </div>



            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
                    Delete Student
                </h2>
                <form >
                    <input type="number" placeholder="Enter student ID to delete" value={studentId} onChange={(e) => setStudentId(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400 mb-4" />
                    <button type="submit"
                        className="w-full bg-red-500 hover:bg-red-600 text-white p-2 rounded transition duration-200">
                        Delete Student
                    </button>
                </form>
            </div>



            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
                    Display All Students
                </h2>
                <button
                    className="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded transition duration-200 mb-4">
                    Show Students
                </button>
                <div className="overflow-x-auto">
                    {students.length === 0 ? (
                        <p className="text-center text-gray-500">
                            No students found
                        </p>
                    ) : (
                        <table className="w-full border border-gray-300 text-sm">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="border px-2 py-1">Id</th>
                                    <th className="border px-2 py-1">Name</th>
                                    <th className="border px-2 py-1">Age</th>
                                    <th className="border px-2 py-1">Email</th>
                                    <th className="border px-2 py-1">Mobile</th>
                                </tr>
                            </thead>

                            <tbody>
                                {students.map((student, index) => (
                                    <tr key={index} className="text-center hover:bg-gray-100">
                                        <td className="border px-2 py-1">{index + 1}</td>
                                        <td className="border px-2 py-1">{student.name}</td>
                                        <td className="border px-2 py-1">{student.age}</td>
                                        <td className="border px-2 py-1">{student.email}</td>
                                        <td className="border px-2 py-1">{student.mobile}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

            </div>


            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
                    Update Student
                </h2>

                <form className="space-y-4">
                    <input type="number" placeholder="Enter student ID" value={studentId} onChange={(e) => setStudentId(e.target.value)}
                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400" />

                    <button type='button' onClick={findStudent}>
                        Find Student
                    </button>
                    {
                        idFound ?
                         <div>
                            <input type="text" placeholder="Enter updated name" value={name} onChange={(e) => setName(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400" />

                            <input type="number" placeholder="Enter updated age" value={age} onChange={(e) => setAge(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400" />

                            <input type="email" placeholder="Enter updated email" value={email} onChange={(e) => setEmail(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400" />

                            <input type="text" placeholder="Enter updated mobile number" value={mobile} onChange={(e) => setMobile(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400" />

                            <button type="submit"
                                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded transition duration-200" >
                                Update Student
                            </button>
                        </div> :
                        <div>
                            <p className="text-center text-gray-500">
                                No student found with the given ID
                            </p>
                        </div>
                    }
                </form>
            </div>


        </div>

    )
}

export default StudentCRUD