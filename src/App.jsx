import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Todo from './components/Todolist'
import NotFound from './components/NotFound'
import Datatablecomponent from './components/Datatablecomponent'
import Searchwebseries from './components/Searchwebseries'
import Datatablecomponentwithfilter from './components/Datatablecomponentwithfilter'
import { Collection } from 'mongoose'
import CartPage from './components/CartPage'
import FashinoLogin from './components/FashinoLogin'
import FashinoRegister from './components/Register'
import HomePage from './components/HomePage'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/todo' element={<Todo/>}></Route>
      <Route path='/datatablecomponent' element={<Datatablecomponent/>}></Route>
      <Route path='/datatablecomponentwithFilter' element={<Datatablecomponentwithfilter/>}></Route>
      <Route path='/searchwebseries' element={<Searchwebseries/>}></Route>
      <Route path='/ecommerce' element={<HomePage/>}></Route>
      <Route path="/collections" element={<Collection />} />
        <Route path="/fashinocart" element={<CartPage />} />
        <Route path="/fashinologin" element={<FashinoLogin />} />
        <Route path="/fashinoregister" element={<FashinoRegister />} />
        <Route path="/fashinoprofile" element={<Profile />} />
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    </>
  )
}

export default App;