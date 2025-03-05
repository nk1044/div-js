import React, { useState, useEffect } from "react";

function Form04({ 
    bgImage='https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg'
 }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className="flex items-center w-full  justify-center min-h-screen p-6 transition-all duration-500"
      style={{
        background: bgImage
          ? `url(${bgImage}) center/cover no-repeat`
          : "linear-gradient(to bottom right, #6a11cb, #2575fc)",
      }}
    >
      <div
        className={`w-full max-w-md p-8 rounded-2xl shadow-lg bg-white/20 backdrop-blur-xl border border-white/30
        transition-all duration-700 transform ${
          loaded ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <h2 className="text-2xl font-semibold text-white text-center mb-6">
          Create an Account
        </h2>

        <form className="space-y-5">
          {/* Input Field Component */}
          {["username", "email", "password"].map((field) => (
            <div key={field} className="relative">
              <input
                type={field === "password" ? "password" : "text"}
                id={field+'04'}
                value={formData[field]}
                onChange={(e) =>
                  setFormData({ ...formData, [field]: e.target.value })
                }
                required
                className="w-full px-4 py-3 text-white bg-white/10 border border-white/30 rounded-lg placeholder-transparent focus:ring-2 focus:ring-white/50 focus:outline-none transition-all duration-300 peer"
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              />
              <label
                htmlFor={field+'04'}
                className="absolute left-4 top-3 text-white/70 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-white/50 transition-all duration-300"
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
            </div>
          ))}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-purple-100 hover:shadow-xl"
          >
            Sign Up
          </button>

          {/* Alternative Login Option */}
          <div className="flex items-center gap-2 my-4">
            <div className="h-px flex-1 bg-white/30"></div>
            <span className="text-white/70">or</span>
            <div className="h-px flex-1 bg-white/30"></div>
          </div>

          {/* Google Login Button */}
          <button className="w-full py-3 bg-white/10 border border-white/30 text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all duration-300">
            <span className="text-xl">G</span>
            Sign up with Google
          </button>
        </form>

        {/* Login Redirect */}
        <p className="text-center text-white/70 mt-6">
          Already have an account?{" "}
          <a href="#" className="text-white hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

export default Form04;
