import React from 'react'

import '../App.css'
import SideBar from './sideBar'

const Dashboard = () => {
  return (
    <>
        {/* Main Content */}
      
      <div className='details-container'>

        <SideBar/>

            <main className="main-content">
        {/* Header */}
        <header className="top-header">
          <h2>Welcome, Student</h2>
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="profile-img"
          />
        </header>

        {/* Cards Section */}
        <section className="cards-section">
          <div className="card">
            <h3>Enrolled Courses</h3>
            <p>12</p>
          </div>
          <div className="card">
            <h3>Assignments Due</h3>
            <p>3</p>
          </div>
          <div className="card">
            <h3>Completed Modules</h3>
            <p>27</p>
          </div>
        </section>

        {/* Courses Table */}
        <section className="table-section">
          <h3 className="section-title">Recent Courses</h3>
          <table className="lms-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Instructor</th>
                <th>Status</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Web Development</td>
                <td>Mr. Sharma</td>
                <td><span className="status ongoing">Ongoing</span></td>
                <td>70%</td>
              </tr>
              <tr>
                <td>Data Structures</td>
                <td>Ms. Priya</td>
                <td><span className="status completed">Completed</span></td>
                <td>100%</td>
              </tr>
              <tr>
                <td>Networking Basics</td>
                <td>Dr. Kumar</td>
                <td><span className="status pending">Pending</span></td>
                <td>20%</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>

      </div>

    </>
  )
}

export default Dashboard