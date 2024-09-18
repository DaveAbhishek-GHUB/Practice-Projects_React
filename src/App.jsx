/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Profile from './Profile'
import Todo from './Todolist'
import NotFound from './NotFound'
import Searchbar from './Searchbar'
import Datatablecomponent from './Datatablecomponent'
import Searchthemovie from './Searchthemovie'
import Searchwebseries from './Searchwebseries'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/todo' element={<Todo/>}></Route>
      <Route path='/searchbar' element={<Searchbar/>}></Route>
      <Route path='datatablecomponent' element={<Datatablecomponent/>}></Route>searchthemovie
      <Route path='searchthemovie' element={<Searchthemovie/>}></Route>
      <Route path='searchwebseries' element={<Searchwebseries/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    </>
  )
}

export default App
