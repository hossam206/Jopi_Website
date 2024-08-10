import React, { useState } from "react";
import FixedNavbar from "../Components/FixedNavbar/FixedNavbar";
import Footer from "../Components/Footer";
// import icons
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import withLoader from "../Components/HigherOrderComp/HigherorederLoader";

function Register() {
  const [fadein, setfadein] = useState("");
  // add active class on button
  const [activeButton, setActiveButton] = useState(1);
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  // show and hide password
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <FixedNavbar
        MainTitle={"Register"}
        PageName={"Create an account & Start posting or hiring talents"}
      />
      <div className="bg-[#EFF6F3] relative  pt-[100px] pb-[180px] ">
        <div className="Container">
          <div className="bg-[#fff] mx-[auto] my-[0] max-w-[720px] !rounded-[20px] pt-[50px] px-[15px] pb-[20px] text-center">
            <h2>Create Accounts</h2>
            <div className=" mt-1 max-w-[565px] m-auto">
              <div className="flex flex-row items-center  w-full bg-[#f0f5f3] rounded-[40px] mt-4  ">
                <div
                  className={`w-[50%] block   h-full py-3  border border-solid border-hoverColor rounded-[40px] text-[18px] text-[rgba(0,_0,_0,_.5)] cursor-pointer ${
                    activeButton == 1
                      ? "border-hoverColor bg-white"
                      : "border-transparent"
                  }`}
                  onClick={() => handleButtonClick(1)}
                >
                  Candidates
                </div>
                <div
                  className={`w-[50%] block   h-full py-3  border border-solid border-hoverColor rounded-[40px] text-[18px] text-[rgba(0,_0,_0,_.5)] cursor-pointer ${
                    activeButton == 2
                      ? "border-hoverColor bg-white"
                      : "border-transparent"
                  }`}
                  onClick={() => handleButtonClick(2)}
                >
                  Employer
                </div>
              </div>

              <div
                className={`mt-[40px] ${
                  activeButton == 2 ? "fadeIn" : "bg-transparent"
                }`}
              >
                <div className="[transition:opacity_.15s_linear]">
                  <form>
                    <div className="flex flex-col items-start justify-start mb-[25px]">
                      <label className="text-[14px] font-normal text-[rgba(0,_0,_0,_.5)] block mb-[6px]">
                        Name *
                      </label>
                      <input
                        placeholder="James Brower"
                        type="text"
                        name="name"
                        required
                        className="w-full h-[55px] outline-none text-[16px] border border-solid border-[rgba(0,0,0,.06)] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-[rgba(49,_121,_90,_.09)]"
                      ></input>
                    </div>
                    <div className="flex flex-col items-start justify-start mb-[25px]">
                      <label className="text-[14px] font-normal text-[rgba(0,_0,_0,_.5)] block mb-[6px]">
                        Email *
                      </label>
                      <input
                        placeholder="james@example.com"
                        type="email"
                        name="email"
                        required
                        className="w-full h-[55px] outline-none text-[16px] border border-solid border-[rgba(0,0,0,.06)] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-[rgba(49,_121,_90,_.09)]"
                      ></input>
                    </div>
                    <div className="flex flex-col items-start justify-start mb-[25px] relative">
                      <label className="text-[14px] font-normal text-[rgba(0,_0,_0,_.5)] block mb-[6px]">
                        Password *
                      </label>
                      <input
                        placeholder="Enter Password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        required
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
                    <div className="flex flex-row items-start justify-start gap-2  ">
                      <input type="checkbox" className="mt-1" />
                      <p className="relative text-[16px] tracking-[-.1px] text-[#244034] cursor-pointer font-thin  text-start">
                        By hitting the Register button, you agree to the
                        <span className="text-[#31795a] underline">
                          {" "}
                          Terms conditions{" "}
                        </span>
                        &
                        <span className="text-[#31795a] underline">
                          {" "}
                          Privacy Policy
                        </span>
                      </p>
                    </div>
                    <div className="my-8">
                      <button
                        type="submit"
                        className="w-full leading-[50px] text-center uppercase block mx-[auto] my-[0] font-medium tracking-[-.5px] text-[#fff] bg-[#31795A] rounded-[10px]   hover:bg-mainColor duration-200"
                      >
                        Login now
                      </button>
                    </div>
                    <div className="flexRow justify-between">
                      <div className="w-full  h-[1px] bg-neutral-200  "></div>
                      <h4 className="text-[20px] text-gray-600 mx-2 font-thin">
                        OR
                      </h4>
                      <div className="w-full h-[1px] bg-neutral-200 "></div>
                    </div>
                    <div className="flexRow gap-2 py-3">
                      <a
                        href="#"
                        className="text-[15px] text-[#000] h-[55px] border-[1px] border-[solid] border-[#e5e5e5] rounded-[7px] flex flex-row items-center justify-center w-full px-4 hover:bg-neutral-100
                          duration-200
                                                  "
                      >
                        <div className="w-5 h-5">
                          <img src="/Images/Register/google.webp" />
                        </div>
                        <span className="pl-2">Signup with Facebook</span>
                      </a>
                      <a
                        href="#"
                        className="text-[15px] text-[#000] h-[55px] border-[1px] border-[solid] border-[#e5e5e5] rounded-[7px] flex flex-row items-center justify-center w-full px-4 text-center hover:bg-neutral-100
                          duration-200"
                      >
                        <div className="w-5 h-5">
                          <img src="/Images/Register/facebook.webp" />
                        </div>
                        <span className="pl-2">Signup with Google</span>
                      </a>
                    </div>
                    <div>
                      <p className="smallp !text-gray-500">
                        Have an account?{" "}
                        <span className="text-hoverColor hover:underline duration-200 cursor-pointer">
                          Sign In
                        </span>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withLoader(Register);
