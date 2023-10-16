import React from "react"
import Register from "./components/Register"
import Login from "./components/Login"
import Home from "./components/Home"
import Loan from "./components/Loan"
import Deposit from "./components/Deposit"
import TransactionHistory from "./components/TransactionHistory"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ProfileNew from "./components/ProfileNew"
import Transfer from "./components/Transfer"
import Dashboard from "./views/Dashboard"
import FD from "./components/FD"
import Success from "./components/Success"
import Failure from "./components/Failure"
import KycUpgrade from "./components/KycUpgrade";



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/profile' element={<ProfileNew />}/>
        <Route path='/loan' element={<Loan />}/>
        <Route path='/transfer' element={<Transfer/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/transactions' element={<TransactionHistory />}/>
        <Route path='/fixeddeposit' element={<FD />}/>
        <Route path='/deposit' element={<Deposit />}/>
        <Route path='/kycupgrade' element={<KycUpgrade />}/>
        <Route path='/confirmation' element={<Success />}/>
        <Route path='/failed' element={<Failure />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
