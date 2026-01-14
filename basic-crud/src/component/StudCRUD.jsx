import React, { useState } from 'react'

const StudCRUD = () => {
  const [students, setStudents] = useState([])
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [studentId, setStudentId] = useState('')
  const [idFound, setIdFound] = useState(false)
  const [showStudents, setShowStudents] = useState(false)

  const commonCardClasses =
    'bg-slate-900/80 shadow-xl rounded-xl p-6 w-full ' +
    'max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl ' +
    'border border-slate-800'

  const addStudentData = () => {
    const newStudent = { name, age, email, mobile }
    setStudents([...students, newStudent])
    setName('')
    setAge('')
    setEmail('')
    setMobile('')
  }

  const findStudent = () => {
    const index = parseInt(studentId, 10) - 1
    if (!Number.isNaN(index) && students[index]) {
      const s = students[index]
      setName(s.name)
      setAge(s.age)
      setEmail(s.email)
      setMobile(s.mobile)
      setIdFound(true)
    } else {
      setIdFound(false)
    }
  }

  const updateStudent = (e) => {
    e.preventDefault()
    const index = parseInt(studentId, 10) - 1
    if (!Number.isNaN(index) && students[index]) {
      const updated = [...students]
      updated[index] = { name, age, email, mobile }
      setStudents(updated)
      setName('')
      setAge('')
      setEmail('')
      setMobile('')
      setStudentId('')
      setIdFound(false)
    }
  }

  const deleteStudent = (e) => {
    e.preventDefault()
    const index = parseInt(studentId, 10) - 1
    if (!Number.isNaN(index) && students[index]) {
      const filtered = students.filter((_, i) => i !== index)
      setStudents(filtered)
      setStudentId('')
      setIdFound(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col gap-6 items-center justify-center bg-slate-950 text-slate-100 p-4">
      {/* Add Student */}
      <div className={commonCardClasses}>
        <h2 className="text-2xl font-semibold text-center mb-6 text-slate-100">
          Add Student
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Enter student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-100 placeholder-slate-500"
          />

          <input
            type="number"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-100 placeholder-slate-500"
          />

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-100 placeholder-slate-500"
          />

          <input
            type="text"
            placeholder="Enter mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-100 placeholder-slate-500"
          />

          <button
            type="button"
            onClick={addStudentData}
            className="w-full bg-blue-600 text-white p-2 rounded-lg font-medium"
          >
            Add Student
          </button>
        </form>
      </div>

      {/* Delete Student */}
      <div className={commonCardClasses}>
        <h2 className="text-2xl font-semibold text-center mb-6 text-slate-100">
          Delete Student
        </h2>
        <form onSubmit={deleteStudent} className="space-y-4">
          <input
            type="number"
            placeholder="Enter student ID to delete"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-100 placeholder-slate-500"
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white p-2 rounded-lg font-medium"
          >
            Delete Student
          </button>
        </form>
      </div>

      {/* Display All Students */}
      <div className={commonCardClasses}>
        <h2 className="text-2xl font-semibold text-center mb-6 text-slate-100">
          Display All Students
        </h2>

        <button
          type="button"
          onClick={() => setShowStudents((prev) => !prev)}
          className="w-full bg-green-600 text-white p-2 rounded-lg font-medium mb-4"
        >
          {showStudents ? 'Hide Students' : 'Show Students'}
        </button>

        {showStudents && (
          <div className="overflow-x-auto">
            {students.length === 0 ? (
              <p className="text-center text-slate-400">
                No students found
              </p>
            ) : (
              <table className="w-full border border-slate-800 text-sm table-auto">
                <thead className="bg-slate-950/80">
                  <tr>
                    <th className="border border-slate-800 px-2 py-2">Id</th>
                    <th className="border border-slate-800 px-2 py-2">Name</th>
                    <th className="border border-slate-800 px-2 py-2">Age</th>
                    <th className="border border-slate-800 px-2 py-2">Email</th>
                    <th className="border border-slate-800 px-2 py-2">Mobile</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    <tr key={index} className="text-center bg-slate-900/60">
                      <td className="border border-slate-800 px-2 py-2">
                        {index + 1}
                      </td>
                      <td className="border border-slate-800 px-2 py-2">
                        {student.name}
                      </td>
                      <td className="border border-slate-800 px-2 py-2">
                        {student.age}
                      </td>
                      <td className="border border-slate-800 px-2 py-2">
                        {student.email}
                      </td>
                      <td className="border border-slate-800 px-2 py-2">
                        {student.mobile}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>

      {/* Update Student */}
      <div className={commonCardClasses}>
        <h2 className="text-2xl font-semibold text-center mb-6 text-slate-100">
          Update Student
        </h2>

        <form className="space-y-4" onSubmit={updateStudent}>
          <input
            type="number"
            placeholder="Enter student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-slate-100 placeholder-slate-500"
          />

          <button
            type="button"
            onClick={findStudent}
            className="w-full bg-indigo-600 text-white p-2 rounded-lg font-medium"
          >
            Find Student
          </button>

          {idFound ? (
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Enter updated name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-slate-100 placeholder-slate-500"
              />

              <input
                type="number"
                placeholder="Enter updated age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-slate-100 placeholder-slate-500"
              />

              <input
                type="email"
                placeholder="Enter updated email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-slate-100 placeholder-slate-500"
              />

              <input
                type="text"
                placeholder="Enter updated mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 text-slate-100 placeholder-slate-500"
              />

              <button
                type="submit"
                className="w-full bg-yellow-500 text-slate-900 p-2 rounded-lg font-semibold"
              >
                Update Student
              </button>
            </div>
          ) : (
            <p className="text-center text-slate-400">
              No student found with the given ID
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default StudCRUD
