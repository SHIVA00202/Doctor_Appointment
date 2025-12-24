import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const { backendUrl, token, setToken } = useContext(AppContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/register",
        { name, email, password }
      );

      if (data.success) {            
        localStorage.setItem("token", data.token);   
        setToken(data.token);        
        toast.success("Account created successfully");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="min-h-[80vh] flex items-center mt-10 md:my-16"
    >
      <div className="flex flex-col gap-4 m-auto p-8 min-w-[340px] sm:min-w-96 border rounded-xl shadow-lg text-sm text-zinc-600">
        <h2 className="text-2xl font-semibold text-center">
          Create Account
        </h2>
        <p className="text-center">Sign up to book appointment</p>

        <div>
          <p>Full Name</p>
          <input
            className="border rounded w-full p-2 mt-1"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

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
          Create Account
        </button>

        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-primary underline">
            Login here
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignUp;
