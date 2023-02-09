import SideBanner from "../../../components/Auth/SideBanner";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const signup = () => {
  return (
    <div>
      <Head>
        <title>Sign up - Syscomatic Blog Dashboard</title>
      </Head>
      <div className="h-screen md:flex">
        <div className="lg:px-16 px-2 md:w-1/2 flex items-center justify-center flex-col relative py-6 bg-accent">
          <div className="bg-gray-700 p-6 rounded-lg w-full">
            <h1 className="text-3xl font-poppins text-center font-bold my-6 lg:my-6">
              Sign up
            </h1>

            <form>
              <div>
                <p className="font-semibold text-lg mb-3">Username </p>
                <div className="flex justify-start items-center text-gray-600 rounded-lg border border-[#c7c7c7e8]  py-2 px-4 ">
                  <div className="inset-y-0 left-0 flex items-center pr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                      />
                    </svg>
                  </div>

                  <input
                    required
                    type="text"
                    name="Your name"
                    className="py-2 text-sm pl-1  w-full text-white rounded-md focus:outline-none focus:bg-white  bg-transparent focus:text-gray-900"
                    placeholder="Your name "
                  />
                </div>
                <p className="font-semibold text-lg mb-3">Email </p>
                <div className="flex justify-start items-center text-gray-600 rounded-lg border border-[#c7c7c7e8]  py-2 px-4 ">
                  <div className="inset-y-0 left-0 flex items-center pr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>

                  <input
                    required
                    type="text"
                    name="Your email"
                    className="py-2 text-sm pl-1  w-full text-white rounded-md focus:outline-none focus:bg-white  bg-transparent focus:text-gray-900"
                    placeholder="Your email "
                  />
                </div>

                <>
                  <p className="font-semibold text-lg mb-4"> Password</p>
                  <div className="flex justify-start items-center text-gray-600 border rounded-lg border-[#c7c7c7e8]  py-2 px-4 ">
                    <div className="inset-y-0 left-0 flex items-center pr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                        />
                      </svg>
                    </div>

                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="py-2 text-sm pl-1 w-full text-white rounded-md focus:outline-none focus:bg-white bg-transparent focus:text-gray-900"
                      placeholder="Your password"
                      required
                    />
                  </div>
                </>
              </div>

              <button
                type="submit"
                className="  block mx-auto w-full rounded-lg btn lg:my-8 my-4 border-none bg-primary text-white text-center relative  overflow-hidden font-semibold   shadow-inner group lg:hover:bg-opacity-90 transition-all"
              >
                Sign up
              </button>
            </form>
            <div className={"divider my-6"}>OR</div>

            <div
              className={
                " flex flex-col-reverse xl:flex-row  justify-between lg:items-center mb-3"
              }
            >
              <p className="text-gray-300 font-medium my-3 lg:my-0">
                Already have an account?{" "}
                <Link href="/dashboard/auth/signin">
                  <span className="text-white font-semibold cursor-pointer lg:hover:underline">
                    Sign in
                  </span>
                </Link>
              </p>{" "}
              <p className="text-white font-semibold cursor-pointer lg:hover:underline">
                Forgot Password?
              </p>
            </div>
          </div>
        </div>
        <SideBanner></SideBanner>
      </div>
    </div>
  );
};

export default signup;
