import React, { useState, useContext,useEffect } from "react";

import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { Context} from "../index";
import axios from "axios"

export default function SignUp() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, setIsAuthenticated} =useContext(Context);

  async function handleSubmit (e) {
    e.preventDefault();
   

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/artist/new",
        {
          name,
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

      toast.success("Signed in successfully");
      setIsAuthenticated(true);
      
    } catch (error) {
      toast.error(error.response.data.message);
     
      setIsAuthenticated(false);
    }
  }
  if (isAuthenticated) return <Navigate to={"/home"} />;
  return (
    <div className="text-center m-5-auto">
      <h1>Join us</h1>
      <h5>Create your personal account</h5>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">UserName</label>
          <br />
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div>
          <label htmlFor="email">Email address</label>
          <br />
          <input
            type="email"
            id="email"
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

        <p>
          <input type="checkbox" name="checkbox" id="checkbox" required />{" "}
          <span>I agree all statements in terms of service</span>.
        </p>

        <div>
          <button id="sub_btn" type="submit">
            Register
          </button>
        </div>
      </form>

      <footer>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}
