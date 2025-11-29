import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Api from './Api';
import { useNavigate, useParams } from 'react-router-dom';
import SideBar from './sideBar';

const StudentForm = () => {

    const {register , handleSubmit , reset} = useForm();

    const [category, setcategory] = useState([]);
    // const [updateData , setUpdateData] = useState("");

    const { id } = useParams();
    const navigate = useNavigate();
    
    async function getCate(){
      const res =  await axios.get(`http://localhost:3001/category`)

      setcategory(res.data)
    }

    useEffect(()=>{
      getCate()
    },[])

    async function fetchStudent() {
        if (id) {
            const res = await axios.get(`http://localhost:3001/students/${id}`)
            reset(res.data)      // Auto fill form
        }
    }

    useEffect(()=>{
      fetchStudent()
    },[id])

    async function onSubmit(data){
      
      if(id){
        await axios.put(`http://localhost:3001/students/${id}`,data)
        alert("Updated Successfully !!")
      }else{
            await axios.post(`http://localhost:3001/students`,data)
            alert("Successfully Added New Student");
            // reset();

          }
          navigate("/")
    }

    
  

  return (
    <>
        <div className='details-container mx'>

        <SideBar/>

        <form className="student-form h-50" onSubmit={handleSubmit(onSubmit)} >
      
      <h2 className="form-title">{id ? "Update" : "Add New Student"}</h2>

      <input type="text" placeholder="Name" {...register("name")} className="input-field" required />

      <input type="text" placeholder="Profile Image URL"
        {...register("profile")} className="input-field" required />

      <select {...register("course")} className="input-field" required>
         <option value="">Select IT Course</option>
        {/*  <option value="Full Stack">Full Stack</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Java">Java</option>
        <option value="Python">Python</option> */}

          

          {
            category && category.map((ele)=>(
              // <div>
                <option value={ele.cate_name}>{ele.cate_name}</option>
              // </div>
            ))
          }
        

      </select>

      <input type="number" placeholder="Fees" {...register("fees")} className="input-field" required />

      <input type="date" {...register("join_date")} className="input-field" required />

      <button type="submit" className="submit-btn">{id ? "Update" : "Submit"}</button>
    </form>
    
        </div>

    </>
  )
}

export default StudentForm
