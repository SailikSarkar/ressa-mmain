import React from "react";
import { useFormik } from "formik";
import { Redirect, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import sprkon from "./password.svg";
import { loginUserAction } from "../../../redux/slices/users/usersSlices";
import Profile from "../Profile/Profile";

//Form schema
const formSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();
  //formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: values => {
      //dispath the action
      dispatch(loginUserAction(values));
    },
    validationSchema: formSchema,
  });

  //redirect
  const store = useSelector(state => state?.users);
  const { userAuth, loading, serverErr, appErr } = store;
  if (userAuth) return <Redirect to={`/profile/${userAuth?._id}`} />;
  return (
    <>
      <section className="min-h-screen    relative py-20 2xl:py-40 dark:bg-darkk-800 bg-gray-100 overflow-hidden">
        <div className="absolute  top-0 mt-0 left-24   lg:bottom-20 h-full  w-full lg:w-4/12 bg-violet-500 lg:overflow-hidden">
          {/* <img
            className="hidden lg:block ml-44 mt-64 h-96 w-96 object-cover"
            src={sprkon}
            alt=""
          /> */}
        </div>
        <div className="relative container xl:bottom-24 px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full lg:w-2/5 px-1">
                <div className="px-6  backdrop-filter rounded-2xl backdrop-blur-3xl lg:px-6 py-12 lg:py-24   border-gray-200 dark:border-gray-800">
                  {/* Form */}
                  <form onSubmit={formik.handleSubmit}>
                    <h2 className="mb-5 flex text-2xl sm:text-3xl font-black text-black dark:text-white font-heading">
                      {/* Header */}
                      Sign in to 
                      <p className=" text-yellow-500 ml-3">
                      your account
                    </p>
                    </h2>
                   
                    <h2 className="mb-10 text-sm text-gray-700 dark:text-gray-500 font-bold font-heading">
                      {/* Header */}
                      Greetings on your return! We kindly request you to enter your details.
                    </h2>
                    <div className="flex mb-4 ">

                    <Link
                                  to={`/upload-profile-photo`}
                                  className="inline-flex justify-center font-bold w-42 px-4 py-2 border  shadow-sm text-xs sm:text-xs  rounded-xl text-black bg-yellow-300   focus:outline-none mr-4   focus:ring-pink-500"
                                >
                                 <img  className="-ml-1 mr-2 h-5 w-5 font-bold text-black "
                                    aria-hidden="true" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAMNJREFUSEvtltENwjAMRF83gU1gE5gEmAQ2gU4Co6BDRLKiNjGBEFVKfvrRyi93PlceaHSGRlwWD968nXtEz1lDv1Es2AEI0AARfJ1rYSl4BdxnilcFCyr41KkGnlJ7A0Zzi2MNq9XTqynsUhhfpKTHO+BsCkntNqewg71Wp1Icu3gB9jnra4BPwM9S/YniZmAlXElPHq/Vtkgfp/4DyeXq9b6Hy2NTH6e/jZNWH7tvaQMJa62nVcWpdhdPfVgyTssGPwEXDDEfqY+WsgAAAABJRU5ErkJggg=="/>

                                  {/* <UploadIcon
                                    className="-ml-1 mr-2 h-4 w-4 text-pink-700 "
                                    aria-hidden="true"
                                  /> */}
                                  <span>Login With Facebook</span>
                                </Link>



                                <Link
                                  to={`/upload-profile-photo`}
                                  className="inline-flex justify-center font-bold  rounded-xl w-42 px-4 py-2  border border-gray-300 shadow-sm text-xs  rounded-xltext-white bg-yellow-300  "
                                >
                               <img  className="-ml-1 mr-2 h-5 w-5 font-bold text-black " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAU5JREFUSEvFloFNAzEMRX83gUkKm8AktJMAkwCTwCZUT4qlcMSOm6StpaqVLs2L7X/f2elGsbsRVyvBd5KeJB0yyawCA3spwNSeqUWdDD4kPZQ1b5Ker5ExpX2tQI+SPq8B/pZEbwkyJeNUzJb6V9JPgaYytVNlwKZW/rOX9FXKaaDtcw5ia/jdjB4Y0SCeVtimVurtGp4fvfJH4Aia6mNpA4L7l3kEpn+z4arcA9eGMAoPVe6B69dkFHzfKnFP1SvAoXC9h7P9RUxk7IYHrv13pNTDYPwXH54J3mF3RF5S1aGVeuAV5kG1gL+3Mo+UN9tnaxOejpH8iUtbJrCme/WGxGzWzWw5TQ/M5MFMRuNsr65B2+tN9hDhNaiXsUHqoYFSbdjzTVW4INiFL5zDPa9uZQWAj3fF4Zl74zhH1dmSDq3Llnpo85EhsRy03fAEx2A/H7pC1ksAAAAASUVORK5CYII="/>

                                    

                                  {/* <UploadIcon
                                    className="-ml-1 mr-2 h-4 w-4 text-pink-700 "
                                    aria-hidden="true"
                                  /> */}
                                  <span>Login With Apple</span>
                                </Link>

                                </div>
                                <div className="flex mb-6">
                                <div className=" border-t-2 w-2/5 mb-5 mt-8 border-yellow-300">


                                </div>
                                <p className=" ml-6 mt-5 mr-5 text-gray-900 dark:text-gray-500">  OR </p>

                                <div className=" border-t-2 w-2/5 mb-5 mt-8 border-yellow-300">


</div>

                                </div>



                    {/* display err */}
                    {serverErr || appErr ? (
                      <h2 className="text-red-500 font-mono text-sm">
                        {serverErr} - {appErr}
                      </h2>
                    ) : null}
                    <div className="flex items-center pl-6 mb-3 border border-gray-50 bg-yellow-300 rounded-full">
                      <span className="inline-block pr-3 border-r border-gray-50">
                      <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" ><path d="M12 2C9.243 2 7 4.243 7 7v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7zm4 10.723V20h-2v-2.277a1.993 1.993 0 0 1 .567-3.677A2.001 2.001 0 0 1 14 16a1.99 1.99 0 0 1-1 1.723z"></path></svg>
                      </span>
                      {/* Email */}
                      <input
                        value={formik.values.email}
                        onChange={formik.handleChange("email")}
                        onBlur={formik.handleBlur("email")}
                        className="w-full pr-6 pl-4 py-4 font-bold placeholder-gray-500 border-gray-400 rounded-r-full focus:outline-none"
                        type="email"
                        placeholder="enter email"
                      />
                    </div>
                    {/* Err message */}
                    <div className="text-red-400 mb-2">
                      {formik.touched.email && formik.errors.email}
                    </div>
                    <div className="flex items-center pl-6 mb-6 border  bg-yellow-300  rounded-full">
                      <span className="inline-block pr-3 border-r border-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" ><path d="M18 10H9V7c0-1.654 1.346-3 3-3s3 1.346 3 3h2c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2zm-7.939 5.499A2.002 2.002 0 0 1 14 16a1.99 1.99 0 0 1-1 1.723V20h-2v-2.277a1.992 1.992 0 0 1-.939-2.224z"></path></svg>

                      </span>
                      {/* Password */}
                      <input
                        value={formik.values.password}
                        onChange={formik.handleChange("password")}
                        onBlur={formik.handleBlur("password")}
                        className="w-full pr-6 pl-4 py-4 font-bold border-gray-400 placeholder-gray-500   rounded-r-full focus:outline-none"
                        type="password"
                        placeholder=" Password"
                      />
                    </div>
                    {/* Err msg */}
                    <div className="text-red-400 mb-2">
                      {formik.touched.password && formik.errors.password}
                    </div>
                    {/* Login btn */}
                    {loading ? (
                      <button
                        disabled
                        className="py-4 w-full bg-gray-500 text-black font-bold rounded-full ring-1 ring-white transition duration-200"
                      >
                        Loading...
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="py-4 w-full bg-yellow-500  text-black font-extrabold ring-1 ring-white rounded-full transition duration-200"
                      >
                        Login
                      </button>
                    )}
                  </form>
                  <div className="p-2">
                    <Link
                      to="/password-reset-token"
                      className="font-medium text-gray-900 dark:text-gray-200 hover:text-indigo-500"
                    >
                      Forget Password ?
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full  relative overflow-hidden sm:w-7  lg:w-3/5 px-4  lg:mb-0 order-first lg:order-last">
              <div className="absolute left-0 lg:bottom-0 h-full  lg:h-auto w-full lg:w-full bg-violet-500 ">
                
         <div className="  backdrop-filter backdrop-blur-xl    rounded-xl h-52 mt-60 border-2 border-gray-200  m-10 "> 
         <p className="dark:text-white text-gray-800 font-bold text-3xl p-5  "> Hi There  </p>
         <p className="text-gray-600 dark:text-gray-300 font-bold text-md ml-5  tracking-widest  "> Welcome to ressa  </p>
         <p className="text-gray-900 dark:text-white font-mono text-md ml-5 tracking-widest  m-5  ">"Hope , you guys will love it , and come again soon . Feel free to share feedbacks " </p>
          

          
         
           </div>
        </div>
                
              <div className="  top-0 left-0 lg:bottom-0 h-full lg:h-auto w-full   bg-violet-500 lg:overflow-hidden">
                
          <img
            className="hidden lg:block bg-gray-100 dark:bg-darkk-800   w-full  rounded-2xl"
            src={sprkon}
            alt=""
          />
       
        </div>

       
               
                <h2 className=" absolute mb-10 text-center text-6xl lg:text-7xl text-gray-300 font-bold font-heading">
                  Ready to start? Login Now.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
