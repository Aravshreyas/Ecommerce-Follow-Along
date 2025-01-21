import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [fileUrl, setFileUrl] = useState(null);
  const profilePicture = watch("profilePicture");

  // Validation functions
  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z][a-zA-Z\s'-]{1,49}$/;
    if (name.length < 2) {
      return "Name must be at least 2 characters long.";
    }
    if (!nameRegex.test(name)) {
      return "Name can only include letters, spaces, apostrophes, or hyphens.";
    }
    return true;
  };

  const validatePass = (password) => {
    const passwordRegex = {
      minLength: 8,
      maxLength: 128,
      hasUpperCase: /[A-Z]/,
      hasLowerCase: /[a-z]/,
      hasSpecialChar: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
      hasDigit: /\d/,
    };
    if (password.length < passwordRegex.minLength) {
      return "Password should be at least 8 characters long.";
    }
    if (password.length > passwordRegex.maxLength) {
      return "Password should be less than 128 characters.";
    }
    if (!passwordRegex.hasLowerCase.test(password)) {
      return "Password should include lowercase characters (a-z).";
    }
    if (!passwordRegex.hasUpperCase.test(password)) {
      return "Password should include uppercase characters (A-Z).";
    }
    if (!passwordRegex.hasSpecialChar.test(password)) {
      return "Password should include special characters.";
    }
    if (!passwordRegex.hasDigit.test(password)) {
      return "Password should include at least one numeric character (0-9).";
    }
    return true;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.length > 254) {
      return "Email is too long.";
    }
    if (!emailRegex.test(email)) {
      return "Write the email in the correct format (e.g., name@example.com).";
    }
    return true;
  };

  const handleSignUp = async (data) => {
    const { name, email, password, profilePicture } = data;
    const file = profilePicture[0];

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("profilePicture", file);

      const response = await axios.post("http://localhost:8080/user/create-user", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },  
      });

      alert(`Sign-up successful! Welcome, ${name}`);
    } catch (error) {
      console.error("Sign-up error:", error);
      alert("An error occurred during sign-up. Please try again.");
    }
  };

  // Handle file preview URL creation
  useEffect(() => {
    if (profilePicture && profilePicture[0]) {
      const fileUrl = URL.createObjectURL(profilePicture[0]);
      setFileUrl(fileUrl);
      return () => URL.revokeObjectURL(fileUrl); // Cleanup the URL
    }
  }, [profilePicture]);

  return (
    <div className="bg-gray-900 flex justify-center items-center min-h-screen">
      <div className="bg-gray-700 rounded-lg p-8 shadow-lg max-w-sm w-full">
        <h1 className="text-center text-3xl text-white mb-6 font-bold">Sign Up</h1>
        <form onSubmit={handleSubmit(handleSignUp)}>
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 bg-gray-600 border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="name"
              placeholder="Full Name"
              {...register("name", {
                required: "Name is required",
                validate: (value) => validateName(value) === true || validateName(value),
              })}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && <p className="text-red-500 text-sm mb-4">{errors.name.message}</p>}
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 bg-gray-600 border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                validate: (value) => validateEmail(value) === true || validateEmail(value),
              })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p className="text-red-500 text-sm mb-4">{errors.email.message}</p>}
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 bg-gray-600 border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              id="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                validate: (value) => validatePass(value) === true || validatePass(value),
              })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && <p className="text-red-500 text-sm mb-4">{errors.password.message}</p>}
          </div>

          {/* Profile Picture Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="profilePicture">
              Profile Picture
            </label>
            <input
              className="w-full px-3 py-2 bg-gray-600 border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="file"
              id="profilePicture"
              accept="image/*"
              {...register("profilePicture", { required: "Profile picture is required" })}
              aria-invalid={errors.profilePicture ? "true" : "false"}
            />
            {errors.profilePicture && (
              <p className="text-red-500 text-sm mb-4">{errors.profilePicture.message}</p>
            )}

            {fileUrl && (
              <div className="mt-4">
                <img
                  src={fileUrl}
                  alt="Preview"
                  className="w-20 h-20 rounded-full object-cover mx-auto"
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-md mt-5 p-1.5 hover:bg-blue-700 shadow-lg"
            >
              Sign Up
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center mt-4">
            <p className="text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-400 hover:underline">
                Log in here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
