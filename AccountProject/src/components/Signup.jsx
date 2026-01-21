import React, { useState } from "react";

const Signup = ({ goToLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!email || !password) {
      alert("All fields required");
      return;
    }

    alert("Signup successful! Please login.");
    goToLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-6 rounded w-80 text-white">
        <h2 className="text-xl mb-4 text-center">Sign Up</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 bg-gray-700 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 bg-gray-700 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-green-600 py-2 rounded hover:bg-green-700"
        >
          Sign Up
        </button>

        <p
          onClick={goToLogin}
          className="mt-3 text-sm text-center text-blue-400 cursor-pointer"
        >
          Back to Login
        </p>
      </div>
    </div>
  );
};

export default Signup;
