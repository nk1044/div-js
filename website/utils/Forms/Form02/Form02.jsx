import React, { useState } from "react";

function Form02() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6 animate-fade-in">
          Create Account
        </h2>

        <form className="space-y-6">
          {/* Full Name Field */}
          <div className="relative">
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="peer w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300"
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-300"
            >
              Full Name
            </label>
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="peer w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-300"
            >
              Email Address
            </label>
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
              className="peer w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300"
            />
            <label
              htmlFor="password"
              className="absolute left-4 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-300"
            >
              Password
            </label>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md transition duration-300 hover:bg-blue-600 hover:shadow-lg transform hover:-translate-y-1"
          >
            Sign Up
          </button>

          {/* Social Login Divider */}
          <div className="flex items-center gap-2 my-4">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="text-gray-500">or</span>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          {/* Google Login Button */}
          <button className="w-full py-3 bg-gray-100 border border-gray-300 text-gray-700 font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition duration-300">
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
        </form>

        {/* Already Have an Account? */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

export default Form02;
