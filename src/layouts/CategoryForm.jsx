import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import SideBar from './sideBar'
import { BiEdit, BiTrash } from 'react-icons/bi'

const CategoryForm = () => {

    const {register , handleSubmit , reset , setValue} = useForm()
    
    const [category_view, setCategory_view] = useState([])
    const [editId , setEditId] = useState(null)

    async function onSubmit(data){

      if(editId){

        await axios.put(`http://localhost:3001/category/${editId}`,data) 
        // alert("Category Updated Successfully");
        getData()
        // reset();
        reset({ cate_name: '' })
        setEditId(null)
      }else{
        const res = await axios.get(`http://localhost:3001/category`)
      // setCategory_view(res)

       const exists = res.data.some(
            (ele) => ele.cate_name.toLowerCase() === data.cate_name.toLowerCase()
        );

        if (exists) {
            alert("Category already exists!");
            return;   // Stop function here
        }else{
          await axios.post(`http://localhost:3001/category`,data)
          alert("Successfully Added New Category");
          // reset();
      getData();

        }
        reset();
      }

    }

    async function getData(){
      const res = await axios.get(`http://localhost:3001/category`)
      setCategory_view(res.data)
    }

    useEffect(()=>{
      getData();
    },[])

    async function trash(id){
      if(confirm("Do you want to delete this category ??")){
        await axios.delete(`http://localhost:3001/category/${id}`)
        alert("Deleted Successfully ✅")
      getData();
      }
    }

    async function edit(id) {
      setEditId(id)
      const res = await axios.get(`http://localhost:3001/category/${id}`)
      // setEditState(res.data)
  //     reset({
  //   cate_name: res.data.cate_name
  // });
      reset(res.data)
      getData()
    }


  return (
    <>
    
        <div className='details-container'>
           <SideBar/>

    <form className="student-form h-50" onSubmit={handleSubmit(onSubmit)} >
      
      <h2 className="form-title">Category Form</h2>
      <input type="text" placeholder="Name" {...register("cate_name")} className="input-field" required />

      <button type="submit" className="submit-btn">Submit</button>

    </form>

      <div className="student-form h-50">
          <div className=''>
            <h3>{category_view && category_view.map((ele)=>(
              <div key={ele.id}>
                <h5>{ele.cate_name}</h5>
              <div className='d-flex gap-3'>
                <button className="btn btn-outline-danger" onClick={()=>trash(ele.id)}><BiTrash/></button>
              <button className="btn btn-outline-warning" onClick={()=>edit(ele.id)}><BiEdit/></button>
              </div>
              <hr />
              </div>

            ))
              
              }</h3>
          </div>
      </div>

        </div>
       
    </>
  )
}

export default CategoryForm