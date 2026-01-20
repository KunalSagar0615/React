import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateAccount from './components/CreateAccount'
import DeleteAccount from './components/DeleteAccount'
import UpdateAccount from './components/UpdateAccount'
import DisplayAllAccountDetails from './components/DisplayAllAccountDetails'
import HomePage from './components/HomePage'
import { useState } from 'react'
function App() {
const [accountData,setAccountData]=useState([]);

  return (
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/create-account' element={<CreateAccount accountData={accountData} setAccountData={setAccountData}/>}/>
        <Route path='/delete-account' element={<DeleteAccount accountData={accountData} setAccountData={setAccountData}/>}/>
        <Route path='/update-account' element={<UpdateAccount accountData={accountData} setAccountData={setAccountData}/>}/>
        <Route path='/display-accounts' element={<DisplayAllAccountDetails accountData={accountData} />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
