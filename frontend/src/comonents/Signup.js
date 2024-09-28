import React,{useState} from 'react';
import { Link } from 'react-router-dom'
import {useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";
const cookies = new Cookies();
const Signup = () => {
  const [user,setUser]=useState({
    Username:"",
    email:"",
    phoneno:"",
    password:"",
    cnfpassword:"",
  });
  const navigate = useNavigate();
  function handleInput(e){
    let name=e.target.name;
    let value=e.target.value;
    setUser({...user,[name]:value,});
  }
  async function handleSubmit(e){
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/auth/signup',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(user),
    })
    const data =await response.json();
    console.log("signup" ,);
    if(response.ok){
      setUser({
        Username:"",
        email:"",
        phoneno:"",
        password:"",
        cnfpassword:"",
      });
      const expires = new Date(Date.now() + 600000); 
      cookies.set("jwt", data.token,{expires});
      localStorage.setItem("user_id",data.user_id);
      navigate("/");

    }
    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    <section className="signup_section contact_section layout_padding">
    <div className="container p-3">
      <div className="heading_container">
        <h2>
           SIGN <span>UP</span>
        </h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form_container">
            <form onSubmit={handleSubmit}>
              <div>
                <input type="text" name='Username' placeholder="Full Name" value={user.Username} onChange={handleInput}/>
              </div>
              <div>
                <input type="email" name='email' placeholder="Email" value={user.email} onChange={handleInput}/>
              </div>
              <div>
                <input type="text" name='phoneno' placeholder="Phone Number" value={user.phoneno} onChange={handleInput}/>
              </div>
              <div>
                <input type="password" name='password' placeholder="Password" value={user.password} onChange={handleInput} />
              </div>
              <div>
                <input type="password" name='cnfpassword' placeholder="Confirm Password" value={user.cnfpassword} onChange={handleInput} />
              </div>
              <div className="btn_box">
                <button className="sign" type="submit">
                  SIGN UP
                </button>

                <p></p>
                <p>Allready have a Account, <Link to="/login">
                login
               </Link></p>

                {/* <button>
                  GOOGLE
                </button> */}
              </div>
              
            </form>
          </div>
        </div>
        <div className="col-md-4">
          <div className="img-box">
            <img src="images/signup_img.jpg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Signup
