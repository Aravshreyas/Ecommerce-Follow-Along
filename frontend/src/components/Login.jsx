import { useState } from "react";

// import React from 'react'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Both email and password are required.');
    } else if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
    } else {
      setErrorMessage('');
      // Mock sign-in logic
      alert(`Welcome, ${email}!`);
    }
  };
  return (
<>
<div className="bg-gray-900 flex justify-center items-center min-h-screen">
      <div className="bg-gray-700 rounded-lg p-8 shadow-lg max-w-sm w-full">
        <h1 className="text-center text-3xl text-white mb-6 font-bold">Login</h1>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="email">Email</label>
            <input
              className="w-full px-3 py-2 bg-gray-600 border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="password">Password</label>
            <input
              className="w-full px-3 py-2 bg-gray-600 border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-md mt-5 p-1.5 hover:bg-blue-700 shadow-lg"
            >
              Sign In
            </button>
          </div>
          <div className="text-center mt-4">
            <a href="#" className="text-blue-400 hover:underline">Forgot Password?</a>
          </div>

          <div className="text-center mt-2">
            <p className="text-gray-400">
              Don’t have an account? <a href="#" className="text-blue-400 hover:underline">Sign up here</a>
            </p>
          </div>
        </form>
      </div>
    </div>
</>
  )
}

export default Login
