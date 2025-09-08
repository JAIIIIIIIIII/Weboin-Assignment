import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    const userData = { name, email, password };
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Registration successful!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
          Sign Up
        </h1>
        <label className="form-control w-full mb-4">
          <span className="label-text text-lg font-semibold text-gray-700 mb-1 block">
            Name
          </span>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="form-control w-full mb-4">
          <span className="label-text text-lg font-semibold text-gray-700 mb-1 block">
            Email
          </span>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="form-control w-full mb-6">
          <span className="label-text text-lg font-semibold text-gray-700 mb-1 block">
            Password
          </span>
          <input
            type="password"
            placeholder="Enter your password"
            className="input input-bordered w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className="p-5">
          <button
            className="btn btn-neutral w-full text-white text-lg hover:bg-gray-700 transition-colors"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <p className="text-center mt-6 text-gray-600">
          Existing user?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Click here
          </Link>{" "}
          to login.
        </p>
      </div>
    </div>
  );
};
