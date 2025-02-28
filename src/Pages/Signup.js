import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 
import Input from "../components/Input";
import { BlueButton } from "../components/Buttons";

axios.defaults.baseURL = "https://joyous-beret-worm.cyclic.app";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    axios
      .post("/api/auth/signup", { name, email, password })

      .then((res) => {
        alert(res.data.message)
        console.log(res.data);
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
      if (err.response && err.response.status === 400) {
        // If the response status is 400, it's a duplicate user
        alert("User already exists. Please login.")
        setName("");
        setEmail("");
        setPassword("");
      }
      else if(err.response && err.response.status === 401){
        alert("Invalid Email");
      } 
      else {
        console.log(err);
      }
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <Input
            label="Name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="text-center">
            <BlueButton val="Sign Up" />
          </div>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
