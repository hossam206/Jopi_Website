import React, { useState } from "react";
import FixedNavbar from "../Components/FixedNavbar/FixedNavbar";
// import icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RiCloseLargeLine } from "react-icons/ri";

import { CiPlay1 } from "react-icons/ci";
import ReactPlayer from "react-player";
import Counters from "../Components/Counters";
import GetOverJobi from "../Components/GetOverJobi";
import HowWork from "../Components/HowWork";
import TrustedCompany from "../Components/TrustedCompany";
import MostCompleteJop from "../Components/MostCompleteJop";
import Footer from "../Components/Footer";
import TrustedByStartup from "../Components/TrustedByStartups/TrustedByStartup";
import withLoader from "../Components/HigherOrderComp/HigherorederLoader";
function About() {
  // handle collapse
  const [collapse, setcollapse] = useState(false);
  const HandleCollapse = (index, e) => {
    setcollapse(collapse === index ? null : index);
  };
  // show youtubevideo
  const [youtubevideo, showyoutubevideo] = useState(false);
  const handleyoutubevideo = () => {
    showyoutubevideo(!youtubevideo);
  };
  return (
    <div>
      <FixedNavbar MainTitle={"About us"} PageName={"About"} />
      <div className="Container">
        <div className="flex lg:flex-row flex-col items-start justify-start py-[80px] px-4 gap-5">
          <div className=" w-full lg:w-6/12 px-4">
            <h2 className=" text-[37px] lg:text-[66px] lg:leading-[78px] ">
              We’ve been helping customer globally.
            </h2>
          </div>
          <div className="lg:w-6/12 w-full px-4">
            <div className="w-full relative border-b border-solid border-neutral-200 py-1 mb-1">
              <div
                className="flex flex-row items-center justify-between"
                onClick={(e) => HandleCollapse(1)}
              >
                <span className="text-[24px] py-2">Who we are</span>
                <div>
                  {collapse === 1 ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </div>
              </div>
              {collapse === 1 && (
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden fade-in${
                    collapse
                      ? "max-h-[200px] opacity-100  "
                      : "max-h-0 opacity-0 "
                  }`}
                >
                  <p className="smallp !text-[#212529]">
                    Our founders Dustin Moskovitz and Justin lorem Rosenstein
                    met while leading Engineering teams at Facebook quesi. Lorem
                    ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              )}
            </div>
            <div
              className="w-full relative border-b border-solid border-neutral-200 py-1 mb-1"
              onClick={(e) => HandleCollapse(2)}
            >
              <div className="flex flex-row items-center justify-between">
                <span className="text-[24px] py-2">What is Our goal ?</span>
                <div>
                  {collapse === 2 ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </div>
              </div>
              {collapse === 2 && (
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    collapse
                      ? "max-h-[200px] opacity-100  "
                      : "max-h-0 opacity-0 "
                  }`}
                >
                  <p className="smallp !text-[#212529]">
                    Our founders Dustin Moskovitz and Justin lorem Rosenstein
                    met while leading Engineering teams at Facebook quesi. Lorem
                    ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              )}
            </div>
            <div
              className="w-full relative  py-1 mb-1"
              onClick={(e) => HandleCollapse(3)}
            >
              <div className="flex flex-row items-center justify-between">
                <span className="text-[24px] py-2">Our vision</span>
                <div>
                  {collapse === 3 ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </div>
              </div>
              {collapse === 3 && (
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    collapse
                      ? "max-h-[200px] opacity-100  "
                      : "max-h-0 opacity-0 "
                  }`}
                >
                  <p className="smallp !text-[#212529]">
                    Our founders Dustin Moskovitz and Justin lorem Rosenstein
                    met while leading Engineering teams at Facebook quesi. Lorem
                    ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="border-b border-solid border-neutral-200 pb-[60px]">
          <div className="bg-[url('/Images/AboutUs/img_45.d590a185.jpg')] bg-cover bg-center bg-no-repeat h-[440px] overflow-hidden rounded-[20px] mb-[50px] mt-8 relative">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65px] h-[65px] bg-[#d2f34c] text-[#000] text-[45px] leading-[65px] pl-[7px] flex flex-row justify-center items-center  rounded-full cursor-pointer hover:bg-[#244034] hover:text-white duration-200"
              onClick={handleyoutubevideo}
            >
              <CiPlay1 />
            </div>
            {youtubevideo && (
              <div
                className="fixed  top-0 left-0  w-full h-full bg-[#12201a3b] z-50"
                onClick={handleyoutubevideo}
              >
                <div className="Container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-white rounded-[10px] overflow-hidden">
                  <ReactPlayer
                    url={"https://youtu.be/-6ZbrfSRWKc"}
                    width={"100%"}
                    height={"100%"}
                  />
                  <RiCloseLargeLine className="absolute top-2 right-2 w-7 h-7 bg-secondColor text-xl rounded-md hover:bg-hoverColor hover:text-white cursor-pointer" />
                </div>
              </div>
            )}
          </div>
          <Counters className="!text-grayColor" />
        </div>
        <GetOverJobi />
        <HowWork />
        <TrustedByStartup />
        <TrustedCompany />
        <MostCompleteJop />
        <Footer />
      </div>
    </div>
  );
}

export default withLoader(About);
