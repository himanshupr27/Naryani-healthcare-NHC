import React,{useState} from 'react'
import {useNavigate,Link } from 'react-router-dom';
import Cookies from "universal-cookie";
const cookies = new Cookies();
const Login = () => {
  const navigate = useNavigate();
  const [user,setUser]= useState({
    email:"",
    password:"",
  });
  function handleInput(e){
   let name=e.target.name;
   let value=e.target.value;
   setUser({
    ...user,
    [name]:value,
   })
  }
  async function handleSubmit(e){
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch('http://localhost:4000/api/auth/login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(user),
    })
    const data=await response.json();
    if(response.ok){
      setUser({
        email:"",
        password:"",
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
    <section className="login_section signup_section contact_section layout_padding">
    <div className="container p-5">
      <div className="heading_container">
        <h2>
           LOG<span>IN</span>
        </h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form_container">
            <form onSubmit={handleSubmit}>
              <div>
                <input type="email" placeholder="Email" name='email' value={user.email} onChange={handleInput}/>
              </div>
              <div>
                <input type="password" placeholder="Password" name='password' value={user.password} onChange={handleInput} />
              </div>
              <div className="btn_box">
                <button className="sign">
                  LOGIN
                </button>
                <p></p>
                <p>Don't have a Account,<Link to="/signup">
                sign up
               </Link></p>
                 
              </div>
              {/* <div className="google_box my-2">
                <button className="google">
                  <img src="images/google3.png" alt="/"/>Login with Google
                </button>
              </div> */}
              
            </form>
          </div>
        </div>
        <div className="col-md-3">
          <div className="img-box">
            <img src="images/login_img.avif" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Login
