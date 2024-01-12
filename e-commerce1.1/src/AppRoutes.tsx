
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegistrationHandler from './pages/common/registration/RegistrationHandler'
import LoginHandler from './pages/common/login/LoginHandler'
import SupplierHandler from './pages/supplier/home/SupplierHandler'
import AddProductsHandler from './pages/supplier/products/AddProductsHandler'
import UniqueProduct from './pages/supplier/products/UniqueProduct'
import UniqueProductHandler from './pages/supplier/products/UniqueProductHandler'
import TopSideNav from './components/TopSideNav/TopSideNav'

const AppRoutes = () => {

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<LoginHandler/>}></Route>
    <Route path="/registration" element={<RegistrationHandler/>}></Route>
    <Route path="/supplier-home" element={<TopSideNav><SupplierHandler/></TopSideNav>}></Route>
    <Route path="/add-product" element={<AddProductsHandler/>}></Route>
    <Route path="/products/:_id" element={<UniqueProductHandler/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default AppRoutes
