import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import {useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";
const cookies = new Cookies();
function Bookappoint() {
  const navigate = useNavigate();
  const dateStyle = {
     width: "100%",
     height: "2.8rem",
     fontSize: "1.0rem",
  };
  const [appoint,setAppoint]=useState({
    paitentname:"",
     email:"",
     time:"",
     date:"",
     phoneno:"",
     doctor:"",
     department:"",
     symptoms:"",
  });
  function handleChange(e){
    let name=e.target.name;
    let value=e.target.value;
    setAppoint({
      ...appoint,
      [name]:value,
    })
  }
 async function handleSubmit(e){
    e.preventDefault()
    console.log(appoint);
    if(!!cookies.get("jwt")){
      try {
        const response = await fetch('http://localhost:4000/api/book/appoint',{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(appoint),
      });
      console.log(response);
      if(response.ok)
        {
          setAppoint({
            paitentname:"",
             email:"",
             time:"",
             date:"",
             phoneno:"",
             doctor:"",
             department:"",
             symptoms:"",
          });
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
    else 
    navigate("/login");
    
  }
  return (
    <section className="book_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit}>
            <h4>
              BOOK <span>APPOINTMENT</span>
            </h4>
            <div className="form-row my-4">
              <div className="form-group col-lg-4">
                <label for="inputPatientName">Patient Name </label>
                <input type="text" className="form-control" id="inputPatientName" placeholder="Enter the Name" name="paitentname" value={appoint.paitentname} onChange={handleChange}/>
              </div>
              <div className="form-group col-lg-4 mx-3">
                <label for="inputDepartmentName">Department's Name</label>
                <Form.Select className="form-control wide" id="inputDepartmentName" name="department" value={appoint.department} onChange={handleChange}>
                  <option value="Normal distribution ">Select the depeartment</option>
                  <option value="Department 1 ">Department 1 </option>
                  <option value="Department 2 ">Department 2 </option>
                  <option value="Department 3 ">Department 3 </option>
                </Form.Select>
              </div>
              <div className="form-group col-lg-4">
                <label for="inputDoctorName">Doctor's Name</label>
                <Form.Select name="doctor" value={appoint.doctor} onChange={handleChange} className="form-control wide" id="inputDoctorName">
                  <option value="None">Select the Doctor </option>
                  <option value="Doctor 1 ">Doctor 1 </option>
                  <option value="Doctor 2 ">Doctor 2 </option>
                  <option value="Doctor 3 ">Doctor 3 </option>
                </Form.Select>
              </div>
              
            </div>
            <div className="form-row my-4">
              <div className="form-group col-lg-4">
                <label for="inputPhone">Phone Number</label>
                <input type="number" className="form-control" id="inputPhone" placeholder="XXXXXXXXXX" name="phoneno" value={appoint.phoneno} onChange={handleChange}/>
              </div>
              <div className="form-group col-lg-4 mx-3">
                <label for="inputSymptoms">Symptoms</label>
                <input type="text" className="form-control" id="inputSymptoms" placeholder="Enter the Symptoms" name="symptoms" value={appoint.symptoms} onChange={handleChange}/>
              </div>
              <div className="form-group col-lg-4">
                <label for="inputDate">Choose Date </label>
               <input
               className="form-control" id="inputDate"
                  type="date"
                  style={dateStyle}
                  value={appoint.date}
                  onChange={handleChange}
                  name='date'
               />
            </div>
              </div>
              <div className="form-row my-4">
              <div className="form-group col-lg-8 ">
                <label for="inputPhone">Email Address</label>
                <input type="email" className="form-control" id="inputPhone" placeholder="abc123@gmail.com" name="email" value={appoint.email} onChange={handleChange}/>
              </div>
              <div className="form-group col-lg-4 mx-3">
                <label for="inputTimeSlot">Time Slot</label>
                <Form.Select name="time" value={appoint.time} onChange={handleChange} className="form-control wide" id="inputTimeSlot">
                  <option value="none">Select the Time Slot</option>
                  <option value="09:00 AM">09:00 AM </option>
                  <option value="10:00 AM ">10:00 AM </option>
                  <option value="12:00 PM ">12:00 PM </option>
                  <option value="01:00 PM ">01:00 PM </option>
                </Form.Select>
              </div>
              </div>
            <div className="btn-box">
              <button type="submit" className="btn ">Submit Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Bookappoint
