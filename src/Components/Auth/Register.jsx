import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import useAuth from '../Hooks/useAuth';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-hot-toast';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import LoginIcon from '../Icon/Icon';

export default function Register() {

    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState("");

    const { createUser, googleLogin } = useAuth(AuthContext)

    const onSubmit = (data) => {
        const fullName = data.fullName;
        const email = data.email;
        const password = data.password;

        const newUser = { fullName, email, password, role: "user" };
        console.log(newUser);

        // create user function
        createUser(email, password)
            .then(async (res) => {

                if (res.user) {
                    await axiosPublic.post("/users", newUser);
                    toast.success('Account Create Successfully !')
                    navigate("/");
                }
                console.log("user info", re.user);
            })
            .catch((error) => {
                toast.error("Please Try Again");
            });
    };



    const hadleGoogleLogin = () => {
        googleLogin()
            .then(async (res) => {
                const loggedUser = res.user;
                const fullName = loggedUser?.displayName;
                const email = loggedUser?.email;
                const profilePhoto = loggedUser?.photoURL;
            
                await axiosPublic.post("/users", { fullName, email, profilePhoto, role: "user" });
                toast.success('Login Successfully !')
                navigate("/");
            })
            .catch((error) => {
                setErrorMessage(error.message);
                toast.error('Please Try Again!')
            });
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
                <h2 className="text-center text-3xl font-semibold pb-3">Register</h2>

                {/* social login buttons */}
                <div className="">
                    <motion.button
                        onClick={hadleGoogleLogin}
                        whileHover={{ scale: 1.06 }}
                        className="flex justify-center items-center  w-full "
                    >
                        <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                            <LoginIcon />
                            Sign in with Google
                        </button>
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

                    {/* full name feild  */}
                    <div className=" pb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name "
                            {...register("fullName", { required: "Full Name is required" })}
                            className="shadow-sm text-sm rounded-sm  block w-full p-2.5 border-2 "
                        />
                        {errors.fullName && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.fullName.message}
                            </p>
                        )}
                    </div>

                    {/* email field */}
                    <div className="float-label-input pb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
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
                            className="shadow-sm text-sm rounded-sm  block w-full p-2.5 border-2 "
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* password field */}
                    <div className="float-label-input pb-4 relative">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
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
                            className="shadow-sm text-sm rounded-sm  block w-full p-2.5 border-2 "
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
                        className="bg-[#62AB00] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Register
                    </motion.button>

                    {/* redirect login page */}
                    <p className="text-gray-400 text-center mt-3">
                        <span className='text-lg '>
                            Already have an account?{" "}
                            <Link
                                className=" ml-2 font-semibold text-[#ac0493a2] hover:text-[#04bf9d]"
                                to={"/login"}
                            >
                                login
                            </Link>
                        </span>
                    </p>
                </form>
            </motion.div>
            {/* <ToastContainer /> */}
        </div>
    );
}
