import React , { useState } from 'react'

const ValidationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pass: '',
    confirmPass: ''
  })

  const [error, setError] = useState({
    name: '',
    email: '',
    pass: '',
    confirmPass: ''
  })

  const [submitData, setSubmitData] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const nameErr = validateName(formData.name)
    const emailErr = validateEmail(formData.email)
    const passErr = validatePass(formData.pass)
    const cPassErr = validateConfirmPass(formData.confirmPass, formData.pass)

    setError({ name: nameErr, email: emailErr, pass: passErr, confirmPass: cPassErr })
    if (!nameErr && !emailErr && !passErr && !cPassErr) {
      setSubmitData(formData)
    }
  };

  const validateName = (name) => {
    if (name.trim() === '') return 'Name is required'
    return ''
  };

  const validateEmail = (email) => {
    if (email.trim() === '') return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Invalid email format!'
    return '';
  };

  const validatePass = (pass) => {
    if (pass.trim() === '') return 'Password cannot be empty'
    if (pass.length < 8) return 'Password must be at least 8 characters'
    return ''
  };

  const validateConfirmPass = (cp, p) => {
    if (cp.trim() === '') return 'Confirm your password'
    if (cp !== p) return 'Passwords do not match'
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (name === 'name') setError((prev) => ({ ...prev, name: validateName(value) }));
    if (name === 'email') setError((prev) => ({ ...prev, email: validateEmail(value) }));
    if (name === 'pass') setError((prev) => ({ ...prev, pass: validatePass(value) }));
    if (name === 'confirmPass') setError((prev) => ({ ...prev, confirmPass: validateConfirmPass(value, formData.pass) }));
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="h-auto w-[60vw] border-2 border-gray-700 flex justify-center items-center flex-col p-8 rounded-xl bg-gradient-to-b from-gray-800 to-gray-700 shadow-xl">
        <form className="w-full" onSubmit={handleSubmit}>
          <input
            className="h-[40px] mt-5 rounded p-3 w-full border-2 border-gray-600 bg-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors outline-none"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your Name.."
          />
          {error.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}

          <input
            className="h-[40px] mt-3 rounded p-3 w-full border-2 border-gray-600 bg-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors outline-none"
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
          {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}

          <input
            className="h-[40px] mt-3 rounded p-3 w-full border-2 border-gray-600 bg-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors outline-none"
            name="pass"
            type="password"
            value={formData.pass}
            onChange={handleChange}
            placeholder="Enter Password"
          />
          {error.pass && <p className="text-red-500 text-sm mt-1">{error.pass}</p>}

          <input
            className="h-[40px] mt-3 rounded p-3 w-full border-2 border-gray-600 bg-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors outline-none"
            name="confirmPass"
            type="password"
            value={formData.confirmPass}
            onChange={handleChange}
            placeholder="Confirm Password"
          />
          {error.confirmPass && <p className="text-red-500 text-sm mt-1">{error.confirmPass}</p>}

          <button
            className="h-[45px] mt-5 w-full rounded bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all text-white font-semibold outline-none"
            type="submit"
          >
            Submit
          </button>
        </form>

        {submitData && (
          <div className="mt-5 border-2 border-gray-600 p-4 w-full rounded bg-gray-800 text-white">
            <h2 className="font-bold text-blue-400 mb-2">Submitted Data:</h2>
            <p><strong>Name:</strong> {submitData.name}</p>
            <p><strong>Email:</strong> {submitData.email}</p>
            <p><strong>Password:</strong> {submitData.pass}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ValidationForm
