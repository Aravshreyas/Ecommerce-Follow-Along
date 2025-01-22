import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate(); // Use this to redirect the user after successful login

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return "Write the email in the correct format (e.g., name@example.com).";
    }
    return true;
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      return "Password should be at least 8 characters long.";
    }
    return true;
  };

  const handleLogin = async (data) => {
    const { email, password } = data;

    try {
      const response = await axios.post("http://localhost:8080/user/login", { email, password });

      if (response.data.success) {
        // Save the JWT token, usually in cookies or localStorage
        localStorage.setItem("token", response.data.token); // Example using localStorage
        alert(`Welcome Back ${email}`)
        // Redirect to the dashboard or home page
        navigate("/dashboard"); // Adjust according to your app
      } else {
        alert("Invalid email or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="bg-gray-900 flex justify-center items-center min-h-screen">
      <div className="bg-gray-700 rounded-lg p-8 shadow-lg max-w-sm w-full">
        <h1 className="text-center text-3xl text-white mb-6 font-bold">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="email">Email</label>
            <input
              className="w-full px-3 py-2 bg-gray-600 border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", { required: "Email is required", validate: validateEmail })}
            />
            {errors.email && <p className="text-red-500 text-sm mb-4">{errors.email.message}</p>}
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="password">Password</label>
            <input
              className="w-full px-3 py-2 bg-gray-600 border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              id="password"
              placeholder="Password"
              {...register("password", { required: "Password is required", validate: validatePassword })}
            />
            {errors.password && <p className="text-red-500 text-sm mb-4">{errors.password.message}</p>}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-md mt-5 p-1.5 hover:bg-blue-700 shadow-lg"
            >
              Log In
            </button>
          </div>

          {/* Link to Sign-Up Page */}
          <div className="text-center mt-4">
            <p className="text-gray-400">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-blue-400 hover:underline">Sign up here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
