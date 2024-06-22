import React from "react";
import { GoDash } from "react-icons/go";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const LogIn = () => {

  return (
    <div className="pt-20 bg-slate-200 flex flex-col items-center justify-center">
      {/* Logo */}
      <p className="flex items-center justify-center text-3xl font-serif py-10">
        E<GoDash />
        SHOP
      </p>
      {/* Login form */}
      <div className="flex flex-col gap-4 min-h-[90vh]">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-white shadow-md border-2 border-slate-300 rounded-md flex flex-col items-center gap-4 px-5 py-8 w-[300px]"
        >
          <div className="flex flex-col gap-1 w-full">
            <label className="text-slate-600" htmlFor="userName">
              UserName or Email Address
            </label>
            <input
              className="text-2xl text-slate-700 border border-slate-500 rounded px-2 py-1 outline-blue-500"
              type="text"
              id="userName"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label className="text-slate-600" htmlFor="userPassword">
              Password
            </label>
            <input
              className="text-2xl text-slate-700 border border-slate-500 rounded px-2 py-1 outline-blue-500"
              type="password"
              id="userPassword"
            />
          </div>

          <div className="w-full flex items-start justify-between">
            <div className="flex gap-2">
              <input
                className="w-6 h-6 rounded-md"
                type="checkbox"
                id="rememberUser"
              />
              <label className="text-slate-600" htmlFor="rememberUser">
                Remember Me
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="bg-blue-500 px-3 py-2 rounded text-white"
              >
                Log in
              </button>
            </div>
          </div>
        </form>

        <div className="flex flex-col items-start gap-3 pl-5">
          <button className="text-slate-600 hover:text-blue-500 duration-300">Lost your password?</button>
          <Link to="/" className="flex items-center gap-1 text-slate-600 hover:text-blue-500 duration-300">
            <span className="text-lg">
              <IoIosArrowRoundBack />
            </span>
            Go to Brandstore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
