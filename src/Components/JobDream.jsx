import React, { useState } from "react";
import ReactPlayer from "react-player";
// import icons
import { FaCheck } from "react-icons/fa6";
import { FaPlayCircle } from "react-icons/fa";
import { RiCloseLargeLine } from "react-icons/ri";
import Counters from "./Counters";

function JobDream() {
  const [youtubevideo, showyoutubevideo] = useState(false);
  const handlevideoshown = () => {
    showyoutubevideo(!youtubevideo);
  };
  return (
    <>
      <div className="Container flex  ">
        <div className="pl-[15px] md:pl-[65px] pr-[25px] pt-[14px] pb-[38px] flex-col items-start justify-between bg-[#614137]  md:w-7/12">
          <div className="  flex-col items-start justify-between py-7 border-b border-solid border-white  ">
            <span className="text-[#00bf58] font-medium text-[18px] mb-[15px] block">
              Business Solution
            </span>
            <h2 className=" md:!text-[64px] !leading-[1.062em] text-white mb-5">
              Get quick Solution for your
              <span className="text-[#DFA79C]">business.</span>
            </h2>
            <p className="smallp !text-white !text-[14px]">
              A full suite of hybrid workforce management tools are yours to
              use, as well as access to our top 1% of talent.
            </p>
          </div>
          <Counters />
          <button className="btn">Explore Jobi Business</button>
        </div>
        <div className="md:w-5/12 hidden md:flex">
          <img src="/Images/Home/Get the job/img_20.jpg" />
        </div>
      </div>
    </>
  );
}

export default JobDream;
