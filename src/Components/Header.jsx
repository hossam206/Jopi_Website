import React from "react";
// import icons
import { FaStar } from "react-icons/fa";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="bg-[#E2F9EE] mb-10 ">
      <Navbar />

      <div className=" Container lg:grid lg:grid-cols-2 lg:gap-6 md:h-screen">
        <div className="py-14 px-2 w-full flex flex-col items-start justify-start">
          <div>
            <h1 className="font-medium text-[47px] leading-[1.3]">
              Find & Hire
              <br /> Top 3% of expert <br />
              on jobi.
            </h1>
            <p className=" font-light text-[#7a7878] my-5">
              With the largest professional creative community online, simply
              search through from our website
            </p>
            <div className="flex flex-row items-center gap-3">
              <input type="text" placeholder="Search job ,title etc ... " className="bg-white"/>
              <button className="btn w-[50px]">Search</button>
            </div>
          </div>
        </div>
        <div className="relative hidden md:hidden lg:block ">
          <div className="absolute top-0 left-0 h-screen">
            <img src="/Images/Home/Header/img_10.webp" />
          </div>
          <div className="absolute top-10 right-[-45px]  w-[300px]">
            <img src="/Images/Home/Header/screen_04.webp" />
          </div>
          <div className="absolute top-80 left-[-20px] w-[260px]">
            <img src="/Images/Home/Header/screen_05.webp" />
          </div>
        </div>
      </div>

      <div
        className=" relative   bg-cover text-right grid lg:grid-cols-2
          gap-1
           bg-[url('/Images/Home/Header/bg_shape_01.1d6fa27f.png')]
          mt-[-20px]
          overflow-hidden
          z-10
           "
      >
        <div className="text-left relative before:content-[''] after:top-0 after:left-[-100px] after:absolute after:w-[300px] after:h-[300px] after:rounded-full after:bg-[#B8E6CD] z-20"></div>

        <div className="flex items-center gap-7 mt-5   ">
          <div className="w-[200px] ">
            <img src="/Images/Home/Header/screen_06.webp" />
          </div>
          <div className="flex flex-col justify-start items-start">
            <small className="text-[18px] leading-[1.65em] font-semibold">
              18+
            </small>
            <span className="text-[rgba(0,_0,_0,_.5)] text-[14px]">
              individual Freelancer
            </span>
          </div>

          <div className="flex flex-col justify-start items-start">
            <small className="text-[18px] font-semibold leading-[1.65em]">
              A+ Rating
            </small>
            <div className="flex flex-row items-center gap-3 ">
              <div className="flex flex-row items-center text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <span className="text-[14px] text-[rgba(0,_0,_0,_.5)]">
                4.78 (300k+)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
