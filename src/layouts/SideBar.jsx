
import React from 'react'
import '../App.css'
import { NavLink } from 'react-router'

const SideBar = () => {
  return (
    <>
        <aside className="sidebar">
          <div className="logo">LMS</div>
          <nav className="nav-menu">
            {/* <a className="active">Dashboard</a> */}
            {/* <NavLink to={"/dashboard"}>Dashboard</NavLink> */}
            <NavLink to={"/"}>View Students</NavLink>
            <NavLink to={"/studentForm"}>Add New Student</NavLink>
            <NavLink to={"/cateFrom"}>Add New Category</NavLink>
            <a>Courses</a>
            <a>Attendance</a>
            <a>Settings</a>
          </nav>
        </aside>
    </>
  )
}

export default SideBar
