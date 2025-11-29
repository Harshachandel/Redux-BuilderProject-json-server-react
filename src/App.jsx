import React from 'react'

import './App.css'
import StudentView from './layouts/StudentView'
import StudentForm from './layouts/StudentForm'
import CategoryForm from './layouts/CategoryForm'
import { Route, BrowserRouter as Router, Routes } from 'react-router'

import 'bootstrap/dist/css/bootstrap.min.css'
import SideBar from './layouts/sideBar'
import Dashboard from './layouts/Dashboard'

const App = () => {
  return (
    <>

      <Router>
        {/* <SideBar/> */}
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/' element={<StudentView/>} />
          <Route path='/cateFrom' element={<CategoryForm/>} />
          <Route path='/studentForm' element={<StudentForm/>} />
          <Route path='/studentForm/:id' element={<StudentForm/>} />
        </Routes>
      </Router>


    </>
  )
}

export default App