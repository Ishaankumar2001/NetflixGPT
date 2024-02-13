import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);
  const phone = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //Validate the Form Data
    checkValidData(email.current.value, password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    //Signin-SignUp
  };

  return (
    <div className="w-full h-screen">
      <img
        className="sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="logo"
      ></img>
      <div className="bg-black/20 fixed top-0 left-0 w-full h-screen" />

      <div className="bg-black fixed top-0 left-0 w-full object-cover" />

      <div className="fixed w-full px-4 py-24 z-20 text-white">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold mb-7">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>

            <form onSubmit={(e) => e.preventDefault()} className="">
              {!isSignInForm && (
                <div>
                  <input
                    ref={fullname}
                    type="text"
                    placeholder="Full Name"
                    autoComplete="Email"
                    className="p-3 my-2 w-full bg-gray-700 rounded"
                  />
                  <input
                    ref={phone}
                    type="text"
                    placeholder="Phone Number"
                    autoComplete="Phone Number"
                    className="p-3 my-2 w-full bg-gray-700 rounded"
                  />
                </div>
              )}

              <input
                ref={email}
                type="text"
                placeholder="Email Address"
                autoComplete="Email"
                className="p-3 my-2 w-full bg-gray-700 rounded"
              />
              <input
                ref={password}
                type="password"
                placeholder="Password"
                autoComplete="Password"
                className="p-3 my-2 w-full bg-gray-700 rounded"
              />

              <button
                className="py-3 my-6 font-bold s bg-red-600 w-full rounded-lg"
                onClick={handleButtonClick}
              >
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>
              <p className="text-red-500 font-bold">{errorMessage}</p>

              <div className=" text-gray-400 ">
                <div className="mt-10">
                  {isSignInForm && (
                    <label className="flex justify-between items-center">
                      <div className="flex  items-center">
                        <input type="checkbox" className="w-5 h-5" />
                        <span className="ml-2">Remember me</span>
                      </div>

                      <span className="justify-between cursor-pointer">
                        Need Help?
                      </span>
                    </label>
                  )}
                </div>
              </div>
              <p className="my-4">
                <span className="text-gray-400">
                  {" "}
                  {isSignInForm
                    ? " New to Netflix ?"
                    : "Already Registered?"}{" "}
                </span>
                <Link
                  className="m-3 underline font-bold"
                  onClick={toggleSignInForm}
                >
                  {isSignInForm ? "Sign Up" : "Sign In"}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
