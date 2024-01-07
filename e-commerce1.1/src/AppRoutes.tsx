import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegistrationHandler from './pages/common/registration/RegistrationHandler'
import LoginHandler from './pages/common/login/LoginHandler'
import SupplierHandler from './pages/supplier/home/SupplierHandler'
import AddProductsHandler from './pages/supplier/products/AddProductsHandler'

const AppRoutes = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<LoginHandler/>}></Route>
    <Route path="/registration" element={<RegistrationHandler/>}></Route>
    <Route path="/supplier-home" element={<SupplierHandler/>}></Route>
    <Route path="/add-product" element={<AddProductsHandler/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default AppRoutes
