import React,{useState} from 'react';
import {useNavigate } from 'react-router-dom';
function Contacts() {
  const navigate = useNavigate();
  const [contact,setContact]=useState({
    fullname:"",
    phoneno:"",
    email:"",
    message:"",
  });
  function handleChange(e){
    let name=e.target.name;
   let value=e.target.value;
   setContact({
    ...contact,
    [name]:value,
   })
  }
  async function handleSubmit(e){
    e.preventDefault();
    console.log(contact);
    try {
      const response = await fetch('http://localhost:4000/api/form/contact',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(contact),
    })
    console.log(response);
    if(response.ok)
      {
        setContact({
          fullname:"",
          phoneno:"",
          email:"",
          message:"",
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className="contact_section layout_padding-bottom">
    <div className="container">
      <div className="heading_container">
        <h2>
          Get In <span>Touch</span>
        </h2>
      </div>
      <div className="row">
        <div className="col-md-7">
          <div className="form_container">
            <form onSubmit={handleSubmit}>
              <div>
                <input type="text" placeholder="Full Name" name="fullname" value={Contacts.fullname} onChange={handleChange}/>
              </div>
              <div>
                <input type="email" placeholder="Email" name="email" value={Contacts.email} onChange={handleChange} />
              </div>
              <div>
                <input type="text" placeholder="Phone Number" name="phoneno" value={Contacts.phoneno} onChange={handleChange}/>
              </div>
              <div>
                <input type="text" className="message-box" placeholder="Message" name="message" row="10" col="10" value={Contacts.message} onChange={handleChange}/>
              </div>
              <div className="btn_box">
                <button type='submit'>
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-5">
          <div className="img-box">
            <img src="images/contact-img.jpg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contacts
