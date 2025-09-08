import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    const userData = localStorage.getItem("userData");
    if (!userData) {
      alert("No user found, please register first.");
      return;
    }
    const userEmail = JSON.parse(userData).email;
    const userPassword = JSON.parse(userData).password;
    if (email === userEmail && password === userPassword) {
      alert("Login successful!");
    } else {
      alert("Invalid credentials, please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
          Login
        </h1>

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
          New user?
          <Link to="/register" className="text-blue-600 hover:underline">
            Click Here
          </Link>
          to Sign Up
        </p>
      </div>
    </div>
  );
};

export default Login;
