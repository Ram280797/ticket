import { useFormik } from 'formik';
import React from 'react'
import { Link } from "react-router-dom";

function CreateTheaters() {
  const formik = useFormik({
    initialValues :{
     
        "name": "",
        "type": "",
        "address": {
          "line1": "",
         
        },
        "owner name": "person1",
        "owner email": "person@gmail.com",
        "phonenumber": "8056587373",
        "url": "https://image3.mouthshut.com/images/imagesp/925741627s.jpg",
        "show time": "2:30pm",
      },

    },
  )

  return (
    <div class="container-fluid">
      <form>
    <div class="card shadow mb-4">
        <div class="card-header py-3">
         <div class="card-body">
        <div class="row">
    <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <label><h5 class="card-title">Name</h5></label>
        <input type={"text"} className="form-control"/>
    
        <label><h5 class="card-title">type</h5></label>
       <select className='form-control'>
        <option value={"Ac"}>Ac</option>
        <option value={"non-Ac"}>non-Ac</option>
       </select>
       <div className='col-sm-4'>
        <label>Showtime</label>
        <select className='form-control'>
         <input type="time" className="form-control" name="ot"/>
      
       </select>
       </div>
       <div className='col-sm-4'>
       <label>ShowEndtime</label>
        <select className='form-control'>
         <input type="time" className="form-control" name="ct"/>
      
       </select>
       </div>
       <div className='row'>
       <div className='col-sm-8'>
        <label> Phonenumber</label>
        <input type={"text"} className="form-control"/>
        </div>
<div className='col-sm-12'>
        <label>Image url</label>
        <input type={"text"} className="form-control"/>
      </div>
      </div>
      <h3>Address</h3>
      <div className='row'>
       <div className='col-sm-12'>
        <label>Line 1</label>
        <input type={"text"} className="form-control"/>
         </div>
       </div>
       <input type={"submit"} value="Submit" className='mt-2 btn btn-primary '/>
      </div>
      </div>
  </div>
  </div>
  </div>  
  </div>
  </div>  
  

  </form>
  </div>  
  )}; 


export default CreateTheaters