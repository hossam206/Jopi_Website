import React from "react";
// import icons
import { MdAccountCircle } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { FaPenAlt } from "react-icons/fa";

export default function HowWork() {
  return (
    <div className="Container pt-[100px] pb-[30px]   ">
      <div className="flexRow justify-between">
        <div className="w-full  h-[1px] bg-neutral-200  "></div>
        <h1 className="text-[40px] text-[#254035] mx-2">
          How&nbsp;it’s&nbsp;Work?
        </h1>
        <div className="w-full h-[1px] bg-neutral-200 "></div>
      </div>

      <div className="flex flex-col md:flex-row  justify-between  border-b border-solid border-neutral-200 pt-[20px]">
        <div
          className="flexCol pb-[47px] mt-[50px] text-center [transition:.1s_all_ease-in-out] relative border-b border-solid border-white   
        hover:border-mainColor"
        >
          <span className="w-[42px] h-[42px] rounded-full bg-mainColor text-[#fff] leading-[normal] m-auto flex justify-center items-center text-[22px] ">
            <MdAccountCircle />
          </span>
          <h3 className="text-[21px] mt-[24px] mb-[10px]"> Create Account</h3>
          <p className="text-[15px] leading-[2em] text-grayColor">
            It’s very easy to open an account and start your <br />
            journey
          </p>
        </div>

        <div
          className="flexCol pb-[47px] mt-[50px]  text-center relative border-b border-solid border-white   
        hover:border-mainColor"
        >
          <span className="w-[42px] h-[42px] rounded-full bg-mainColor text-[#fff] leading-[normal] m-auto flex justify-center items-center text-[19px]">
            <ImProfile />
          </span>
          <h3 className="text-[21px] mt-[24px] mb-[10px]">
            Complete your profile
          </h3>
          <p className="text-[15px] leading-[2em] text-grayColor">
            Complete your profile with all the info to <br /> get attention of
            client.
          </p>
        </div>
        <div
          className="flexCol pb-[47px] mt-[50px]  text-center relative border-b border-solid border-white   
        hover:border-mainColor"
        >
          <span className="w-[42px] h-[42px] rounded-full bg-mainColor text-[#fff] leading-[normal] m-auto flex justify-center items-center text-[22px]">
            <FaPenAlt />
          </span>
          <h3 className="text-[21px] mt-[24px] mb-[10px]">Apply job or hire</h3>
          <p className="text-[15px] leading-[2em] text-grayColor">
            Apply & get your preferable jobs with all
            <br /> the requirements and get it.
          </p>
        </div>
      </div>
    </div>
  );
}
