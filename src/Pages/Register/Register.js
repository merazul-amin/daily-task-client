import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import signUpPic from '../../assets/Sign up-bro.png';
import { AuthContext } from '../../contexts/UserContext';
import {
    useNavigate,
    useLocation
} from "react-router-dom";



const Register = () => {

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const { createUser, googleLogin } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                form.reset();
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(error);
            });
    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {

                // The signed-in user info.
                const user = result.user;

                navigate(from, { replace: true });
                // ...
            }).catch((error) => {
                // Handle Errors here.
                console.log(error);
                // ...
            });
    }
    return (
        <div className="relative">

            <div className="relative bg-gray-900 bg-opacity-60">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <img src={signUpPic} alt="" />

                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                    Please Register
                                </h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="firstName"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Name
                                        </label>
                                        <input
                                            placeholder="Your Name"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="firstName"
                                            name="name"
                                        />
                                    </div>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="email"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Email
                                        </label>
                                        <input
                                            placeholder="Your Email"
                                            required
                                            type="email"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="email"
                                            name="email"
                                        />
                                    </div>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="password"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Password
                                        </label>
                                        <input
                                            placeholder="Your Password Here"
                                            required
                                            type="password"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="password"
                                            name="password"
                                        />
                                        <p>Already have an account? <Link className='text-blue-600 underline font-bold' to={`/login`}>Log In</Link></p>
                                    </div>
                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button type="submit" className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full  dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2">
                                            Sign Up
                                        </button>
                                    </div>

                                </form>
                                <div>
                                    <button onClick={handleGoogleLogin} type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg w-full text-sm px-5 py-2.5 text-center inline-flex justify-center dark:focus:ring-[#4285F4]/55 mr-2 mt-0">
                                        <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                                        Sign in with Google
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;