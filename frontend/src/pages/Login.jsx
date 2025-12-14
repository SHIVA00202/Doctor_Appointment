import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    
  };

  

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center mt-10 md:my-16">
      <div className="flex flex-col gap-4 m-auto p-8 min-w-[340px] sm:min-w-96 border rounded-xl shadow-lg text-sm text-zinc-600">
        <h2 className="text-2xl font-semibold text-center">Login</h2>
        <p className="text-center">Login to book appointment</p>

        <div>
          <p>Email</p>
          <input
            className="border rounded w-full p-2 mt-1"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <p>Password</p>
          <input
            className="border rounded w-full p-2 mt-1"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-white w-full py-2 rounded-md text-base hover:opacity-90 transition"
        >
          Login
        </button>

        <p className="text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-primary underline">
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Login;
