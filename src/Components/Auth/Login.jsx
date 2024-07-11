import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    console.log(data);
    // signInUser(email, password)
    //   .then((res) => {
    //     Swal.fire({
    //       position: "top-center",
    //       icon: "success",
    //       title: "Register Successful",
    //       showConfirmButton: false,
    //       timer: 1500,
    //     });
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     toast("Invalid Email or Password!");
    //   });
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('https://i.ibb.co/M56D6xg/intro-section-pattern.png')]">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className="bg-white m-5 p-8 space-y-5 border rounded-md shadow-md w-[400px] max-w-[400px]"
      >
        <h2 className="text-center text-3xl font-semibold pb-3">Login</h2>

        {/* social login buttons */}
        <div className="">
          <motion.button
            // onClick={hadleGoogleLogin}
            whileHover={{ scale: 1.06 }}
            className="flex justify-center items-center gap-2 shadow-sm border py-3 w-full rounded-lg"
          >
            {/* <img src={GOOGLE_ICON} className="w-5" alt="" /> */}
            <span>Google</span>
          </motion.button>
        </div>

        {/* divider */}
        <div className="flex items-center justify-center gap-5">
          <hr className="bg-[#343A40] max-w-[20%] w-[20%]" />
          <p>Or</p>
          <hr className="bg-[#343A40] max-w-[20%] w-[20%]" />
        </div>

        {/* register form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* email field */}
          <div className="float-label-input pb-4">
            <label className="text-[#000] pointer-events-none transition-all duration-200 ease-in-out bg-white">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              placeholder=" Your Email "
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                },
              })}
              className="shadow-sm block w-full bg-transparent focus:outline-none focus:shadow-outline border border-[#ddd] rounded-md py-3 px-4 appearance-none leading-normal"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* password field */}
          <div className="float-label-input pb-4 relative">
            <label className="text-[#000] pointer-events-none transition-all duration-200 ease-in-out bg-white">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="shadow-sm block w-full bg-transparent focus:outline-none focus:shadow-outline border border-[#ddd] rounded-md py-3 px-4 appearance-none leading-normal"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 mt-2 right-0 flex items-center px-4 text-gray-600"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* error message */}
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}

          {/* register button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="bg-[#FFBA00] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </motion.button>

          {/* redirect login page */}
          <p className="text-gray-400 text-center mt-3">
            <small>
              New Account Create Now?{" "}
              <Link
                className="underline font-semibold text-[#ffc20aa2] hover:text-[#ffc10a]"
                to={"/register"}
              >
                Register
              </Link>
            </small>
          </p>
        </form>
      </motion.div>
      {/* <ToastContainer /> */}
    </div>
  );
}
