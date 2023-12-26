import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegistrationPage from './pages/common/registration/RegistrationPage'
import LoginPage from './pages/common/login/LoginPage'
import { register } from './pages/common/registration/RegistrationHandler'

const AppRoutes = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<LoginPage/>}></Route>
    <Route path="/registration" element={<RegistrationPage register={register}/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default AppRoutes
