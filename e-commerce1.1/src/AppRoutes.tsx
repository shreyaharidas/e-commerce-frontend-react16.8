import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegistrationHandler from './pages/common/registration/RegistrationHandler'
import LoginHandler from './pages/common/login/LoginHandler'

const AppRoutes = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<LoginHandler/>}></Route>
    <Route path="/registration" element={<RegistrationHandler/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default AppRoutes
