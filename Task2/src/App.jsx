import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonalInfo from './components/PersonalInfo'

function App() {

  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: "",
    phone: "",
    city: "",
    state: "",
    zip: "",
    username: "",
    password: "",
    confirmPassword: "",
  })

  const nextStep = () => {
    setStep((prev) => prev + 1)
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
  }

  return (
    <>
      <PersonalInfo
        formData={formData}
        setFormData={setFormData}
        nextStep={nextStep}
      />
      
    </>
  )
}

export default App
