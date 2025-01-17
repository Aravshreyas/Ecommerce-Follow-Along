import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const handleSignIn = (data) => {
    const { email, password } = data;
    
    // Proceed with your sign-in logic here, e.g., API call.
    alert(`Welcome, ${email}!`);
  };  

  return (
    <>
      <div className="bg-gray-900 flex justify-center items-center min-h-screen">
        <div className="bg-gray-700 rounded-lg p-8 shadow-lg max-w-sm w-full">
          <h1 className="text-center text-3xl text-white mb-6 font-bold">Login</h1>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="email">Email</label>
              <input
                className="w-full px-3 py-2 bg-gray-600 border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                placeholder="Email"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && <p className="text-red-500 text-sm mb-4">{errors.email.message}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="password">Password</label>
              <input
                className="w-full px-3 py-2 bg-gray-600 border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                id="password"
                placeholder="Password"
                {...register('password', { required: 'Password is required' })}
              />
              {errors.password && <p className="text-red-500 text-sm mb-4">{errors.password.message}</p>}
            </div>

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
                Don’t have an account? <Link to="/signup" className="text-blue-400 hover:underline">Sign up here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
