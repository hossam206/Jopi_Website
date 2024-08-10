import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  signInWithEmail,
  signInWithFacebook,
  SignnIn,
  SignOut,
} from "../../firebase/mainfunction";
import { useDispatch, useSelector } from "react-redux";
import {
  ToggleShowLogInForm,
  ToggleShowPostJobForm,
} from "../../Rtk/actions/Actions";

function Login() {
  const dispatch = useDispatch();
  const AppState = useSelector((state) => state.userState.user);
  // show and hide password
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // handle show or hide Log In
  const handleLogInForm = (status) => {
    dispatch(ToggleShowLogInForm(status));
  };
  // handle log in with google func
  const handleGoogleSignIn = () => {
    seTLoader(true);
    dispatch(SignnIn());
    if (AppState) {
      handleLogInForm(false);
    }
  };
  // handle log in with Facebook func
  const handleFacebookSignIn = () => {
    seTLoader(true);
    dispatch(signInWithFacebook());
    if (AppState) {
      handleLogInForm(false);
    }
  };
  // handle Login Withs email func
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const LoginWithemailandPassword = (e) => {
    seTLoader(true);
    e.preventDefault();
    dispatch(signInWithEmail(email, password));
    if (AppState) {
      setemail("");
      setPassword("");
 
    }
  };
  // handle sign out
  const [Loader, seTLoader] = useState(false);
  const handleGoogleSignOut = () => {
    dispatch(SignOut());
    seTLoader(true);
    setTimeout(() => {
      handleLogInForm(false);
    }, 1200);
  };

  useEffect(() => {
    if (AppState) {
      handleLogInForm(false);
    }
  }, [AppState]);

  return (
    <div>
      {Loader && (
        <div className="fixed top-0 left-0 z-50 w-full h-full text-center flex flex-col items-center justify-center bg-[#000000b0]">
          <button
            type="button"
            className="pointer-events-none inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 disabled:opacity-70 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            disabled
          >
            <div
              className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            ></div>
          </button>

          <span className="text-white"> Loading...</span>
        </div>
      )}
      <div className=" fixed top-0 left-0 right-0 w-full h-full bg-[#12201a75] z-30  ">
        <div className="Container scrollbar-custom absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2  h-screen bg-[#fff] mx-[auto]   lg:w-[620px] w-[400px] !rounded-[10px]   overflow-y-scroll">
          <div className="my-[20px] px-10   text-center">
            <div
              className="flex items-end justify-end   rounded-[10px] text-grayColor cursor-pointer text-3xl hover:text-red-500"
              onClick={() => handleLogInForm(false)}
            >
              <IoCloseOutline />
            </div>
            <div>
              <h3 className="lg:text-[50px] text-[30px] my-2 font-normal text-[#244034]  ">
                Hi, Welcome Back!
              </h3>
            </div>
            <form onSubmit={LoginWithemailandPassword}>
              <div className="flex flex-col items-start justify-start mb-[20px]">
                <label className="text-[14px] font-normal text-[rgba(0,_0,_0,_.5)] block mb-[6px]">
                  Email *
                </label>
                <input
                  placeholder="James Brower@.com"
                  type="email"
                  name="name"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required
                  className="w-full h-[55px] outline-none text-[16px] border border-solid border-[rgba(0,0,0,.06)] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-[rgba(49,_121,_90,_.09)]"
                ></input>
              </div>
              <div className="flex flex-col items-start justify-start mb-[20px] relative">
                <label className="text-[14px] font-normal text-[rgba(0,_0,_0,_.5)] block mb-[6px]">
                  Password *
                </label>
                <input
                  placeholder="Enter Password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-[55px] outline-none text-[16px] border border-solid border-[rgba(0,0,0,.06)] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-[rgba(49,_121,_90,_.09)]"
                ></input>
                <span className="absolute right-3 top-12 cursor-pointer">
                  {showPassword ? (
                    <FaEye onClick={togglePasswordVisibility} />
                  ) : (
                    <FaEyeSlash onClick={togglePasswordVisibility} />
                  )}
                </span>
              </div>

              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-2">
                  <input type="checkbox" />
                  <p className="text-[15px] text-[#1e1e1e]">
                    Keep me logged in
                  </p>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-[15px] text-[#1e1e1e] hover:underline hover:text-hoverColor"
                  >
                    Forget Password?
                  </a>
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full leading-[50px] outline-none text-center block mx-[auto] my-[0] font-medium tracking-[-.5px] text-[#fff] bg-[#31795A] rounded-[10px] capitalize hover:bg-mainColor duration-200"
                >
                  LOGIN
                </button>
              </div>
            </form>
            <div className="flexRow justify-between">
              <div className="w-full  h-[1px] bg-neutral-300  "></div>
              <h4 className="text-[20px] text-gray-600 mx-2  ">
                &nbsp; OR &nbsp;
              </h4>
              <div className="w-full h-[1px] bg-neutral-300 "></div>
            </div>
            <div className="flexRow gap-2  ">
              <a
                href="#"
                className="text-[15px] text-[#000] h-[55px] border-[1px] border-[solid] border-[#e5e5e5] rounded-[7px] flex flex-row items-center justify-center w-full px-4 hover:bg-neutral-100
                          duration-200
                                                  "
                onClick={handleGoogleSignIn}
              >
                <div className="w-5 h-5">
                  <img src="/Images/Register/google.webp" />
                </div>
                <span className="pl-2">Signup with Google</span>
              </a>
              <a
                href="#"
                className="text-[15px] text-[#000] h-[55px] border-[1px] border-[solid] border-[#e5e5e5] rounded-[7px] flex flex-row items-center justify-center w-full px-4 text-center hover:bg-neutral-100
                          duration-200"
                onClick={handleFacebookSignIn}
              >
                <div className="w-5 h-5">
                  <img src="/Images/Register/facebook.webp" />
                </div>
                <span className="pl-2">Signup with Facebook</span>
              </a>
            </div>
            <p className="text-[18px] text-[#00000080] mt-3">
              Switch To another Account &nbsp;
              <a
                href="#"
                className="underline hover:text-hoverColor"
                onClick={handleGoogleSignOut}
              >
                Log Out
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
