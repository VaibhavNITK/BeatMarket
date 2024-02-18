import React, { useState, useContext,useEffect } from "react";

import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { Context} from "../index";
import axios from "axios"

export default function Login() {
  // const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const { user } = useAuth();
  const { isAuthenticated, setIsAuthenticated} =useContext(Context);


  

  
  function handleSignup() {
    navigate("/signup");
  }

  async function handleSubmit(e) {
    e.preventDefault();
   

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/artist/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success("Logged in successfully");
      setIsAuthenticated(true);
      
    } catch (error) {
      toast.error(error.response.data.message);
     
      setIsAuthenticated(false);
    }
  }
  if (isAuthenticated) return <Navigate to={"/home"} />;

  return (
    <div className="text-center m-5-auto">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <br />
          <input
            type="email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button id="sub_btn" type="submit">
            Login
          </button>
        </div>
      </form>

      <footer>
        <p>
          First time? <Link to="/signup">Create an account</Link>.
        </p>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}





// import axios from "axios";
// import React, { useContext, useState } from "react";
// import { toast } from "react-hot-toast";
// import { Navigate } from "react-router-dom";
// import { Context} from "../index";
// import {
//   MDBBtn, 
//   MDBContainer,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
//   MDBInput
// }
// from 'mdb-react-ui-kit';
// import "../styles/Login.css"
// function UserLogin() {
//   const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
//     useContext(Context);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const { data } = await axios.post(
//         "http://localhost:4000/api/v1/users/login",
//         {
//           email,
//           password,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );

//       toast.success(data.message);
//       setIsAuthenticated(true);
//       setLoading(false);
//     } catch (error) {
//       toast.error(error.response.data.message);
//       setLoading(false);
//       setIsAuthenticated(false);
//     }
//   };

//   if (isAuthenticated) return <Navigate to={"/userHomePage"} />;
//   return (
    
//     <MDBContainer className="my-5">

//       <MDBCard>
//         <MDBRow className='g-0'>

//           <MDBCol md='6'>
//             <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
//           </MDBCol>

//           <MDBCol md='6'>
//             <MDBCardBody className='d-flex flex-column'>

//               <div className='d-flex flex-row mt-2'>
//                 <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
//                 {/* <span className="h1 fw-bold mb-0">Logo</span> */}
//               </div>

//               <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>User Login here</h5>
//               <form onSubmit={submitHandler}>
//                 <MDBInput value={email} onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4' label='Email address' id='formControlLg1' type='email' size="lg"/>
//                 <MDBInput value={password} onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

//               <MDBBtn disabled={loading} className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
//               </form>
//               {/* <a className="small text-muted" href="#!">Forgot password?</a> */}
//               <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="/userRegister" style={{color: '#393f81'}}>Register here</a></p>
//               <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Are you an Admin? <a href="/adminLogin" style={{color: '#393f81'}}>Login here</a></p>
//               <div className='d-flex flex-row justify-content-start'>
//                 <a href="#!" className="small text-muted me-1">Terms of use.</a>
//                 <a href="#!" className="small text-muted">Privacy policy</a>
//               </div>

//             </MDBCardBody>
//           </MDBCol>

//         </MDBRow>
//       </MDBCard>

//     </MDBContainer>
   
//   );
// }

// export default UserLogin;