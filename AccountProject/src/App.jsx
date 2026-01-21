import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateAccount from './components/CreateAccount'
import DeleteAccount from './components/DeleteAccount'
import UpdateAccount from './components/UpdateAccount'
import DisplayAllAccountDetails from './components/DisplayAllAccountDetails'
import HomePage from './components/HomePage'
import { useState } from 'react'
import DepositAmount from './components/DepositAmount';
import WithdrowAmount from './components/WithdrowAmount';
function App() {
const [accountData,setAccountData]=useState([]);
const [limit,setLimit]=useState(50000);
const [minBalance,setMinBalance]=useState(500);

  return (
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/create-account' element={<CreateAccount accountData={accountData} setAccountData={setAccountData} minBalance={minBalance} />}/>
        <Route path='/close-account' element={<DeleteAccount accountData={accountData} setAccountData={setAccountData}/>}/>
        <Route path='/update-account' element={<UpdateAccount accountData={accountData} setAccountData={setAccountData}/>}/>
        <Route path='/display-accounts' element={<DisplayAllAccountDetails accountData={accountData} />}/>
        <Route path='/deposit-amount' element={<DepositAmount accountData={accountData} setAccountData={setAccountData}/>}/>
        <Route path='/withdraw-amount' element={<WithdrowAmount accountData={accountData} setAccountData={setAccountData} limit={limit} minBalance={minBalance}/>}/>
        <Route path='*' element={<h1 className='text-red-500 text-4xl text-center italic'>404 Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
