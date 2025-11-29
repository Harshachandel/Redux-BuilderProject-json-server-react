import React, { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { MdEdit } from 'react-icons/md'

import "../App.css"
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import SideBar from './sideBar'

const StudentView = () => {

  const [view, setView] = useState([])

   const navigate = useNavigate()

  async function getData() {
    const res = await axios.get('http://localhost:3001/students')
    setView(res.data)
  }

  async function trash(id){
    alert(id)
    if(confirm("Did you want to delete this ??")){

      await axios.delete(`http://localhost:3001/students/${id}`)
      getData()
    }
  }

  
  function edit(id) {
    navigate(`/studentForm/${id}`)
  }
  
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* StudentView */}
      <div className="details-container">

        {/* Sidebar */}
        <SideBar/>


        {/* Student Card */}
        {/* <section className="student-card"> */}
          <main className="details-main">

            {
              view && view.map((ele) => (
                <div key={ele.id}>
        <header className="top-header">
          <h2>{ele.name}</h2>
          <img src={ele.profile} alt="pic" className="profile-img" />
        </header>
                <section className='student-card '>
                {/* <div className='main_view_div student-info-left' key={ele.id}> */}
                  
                  <div>
                    <img  src={ele.profile} className="student-photo" />

                  <h3 className="student-name text-center">{ele.name}</h3>
                   <p className="student-id text-center">ID: {ele.id}</p>

                  <div className="action-buttons d-flex justify-content-center me-4">
                    <button className="icon-btn-pro delete" onClick={()=>trash(ele.id)}>
                    <FaTrash />
                    </button>
                    <button className="icon-btn-pro edit" onClick={()=>{edit(ele.id)}}>
                     <MdEdit />
                    </button>
                 </div> 
                  </div>

                   <div className="student-info-right">
                     <div className="info-row">
                       <span>Course:</span> <p>{ele.course}</p>
                    </div>
                   <div className="info-row">
                      <span>Batch:</span> <p>{ele.join_date}</p>
                    </div>
                    <div className="info-row">
                     <span>Fees:</span> <p>{ele.fees}</p>
                      </div>
                    <div className="info-row">
                     <span>Contact:</span> <p>+91 9988776655</p>
                     </div>
                  </div>
            
            {/* </div> */}
                </section>

                </div>
              ))
            }

            {/* <h3 className="student-name">{ele.name.toUpperCase()}</h3> */}

            
          </main>



          
        {/* </section> */}

        {/* Academic Stats */}
        {/* <section className="cards-section">
          <div className="card">
            <h3>Completed Courses</h3>
            <p>08</p>
          </div>
          <div className="card">
            <h3>Attendance</h3>
            <p>92%</p>
          </div>
          <div className="card">
            <h3>Assignments Submitted</h3>
            <p>34</p>
          </div>
        </section> */}

      </div>

    </>
  )
}

export default StudentView