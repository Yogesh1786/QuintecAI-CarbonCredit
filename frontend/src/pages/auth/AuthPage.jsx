import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const images = [
    {
      src: "/slide_1.jpg",
      // description: "Explore nature's beauty.",
    },
    {
      src: "/slide_2.jpg",
      // description: "Feel mountain peace.",
    },
    {
      src: "/slide_3.jpg",
      // description: "Enjoy wildflowers' charm.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-200 p-4">
      <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-3xl h-auto lg:h-[500px]">
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
          {isLogin ? (
            <>
              <h2 className="text-3xl font-bold text-center">Welcome Back</h2>
              <p className="text-center text-gray-500">
                Not registered yet?{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={toggleForm}
                >
                  Sign up
                </span>
              </p>
              <form className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Login
                </button>
              </form>
              <p className="text-center text-sm text-gray-500 mt-4">
                Forgotten your password or login details?{" "}
                <span className="text-blue-500 cursor-pointer">Get help</span>
              </p>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-center">Create Account</h2>
              <p className="text-center text-gray-500">
                Already have an account?{" "}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={toggleForm}
                >
                  Login
                </span>
              </p>
              <form className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Sign Up
                </button>
              </form>
            </>
          )}
        </div>

        <div
          className={`w-full lg:w-1/2 p-8 m-3 flex flex-col items-center justify-center bg-blue-300 rounded-3xl  ${
            isLogin ? "" : ""
          }`}
        >
          <div className="text-center">
            <img
              src={images[currentImage].src}
              alt="Sliding Images"
              className="mx-auto transition duration-1000 ease-in-out w-80 h-96 object-cover rounded-lg"
            />
            {/* <p className="text-xl font-semibold mb-2">
              {images[currentImage].description}
            </p> */}
            <br />
            <div className="flex justify-center space-x-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full cursor-pointer transition duration-300 ${
                    currentImage === index ? "bg-white" : "bg-gray-400"
                  }`}
                  onClick={() => setCurrentImage(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
