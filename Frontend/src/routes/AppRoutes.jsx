import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../screens/Login'
import Register from '../screens/Register'
import HeroSection from '../screens/Hero'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <HeroSection/> }/>
            <Route path='/login' element={ <Login/> }/>
            <Route path='/register' element={ <Register/> }/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes