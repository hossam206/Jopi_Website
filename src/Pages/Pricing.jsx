import React from "react";
import FixedNavbar from "../Components/FixedNavbar/FixedNavbar";
import MostCompleteJop from "../Components/MostCompleteJop";
import Footer from "../Components/Footer";
import { HiExclamationTriangle } from "react-icons/hi2";
import withLoader from "../Components/HigherOrderComp/HigherorederLoader";

function Pricing() {
  return (
    <div>
      <FixedNavbar MainTitle={"Pricing"} PageName={"Choose your membership"} />
      <div className="Container">
        <div className="pt-20 pb-32">
          <div className="text-center mb-8">
            <h2>Simple Plan for All</h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
            <div
              className="relative overflow-hidden text-center bg-[#fff] 
            border border-solid border-[#244034] rounded-[30px] px-[20px] py-[38px]"
            >
              <div>
                <p className="smallp">Standard</p>
              </div>
              <div className="text-[72px] tracking-[-1px] text-[#31795a] leading-[normal] -mt-[4px] mx-[0] mb-[36px]">
                0
              </div>
              <ul>
                <li className="text-[18px] text-[#31795a] mb-[17px]">
                  15 job posting
                </li>
                <li className="text-[18px] text-[#31795a] mb-[17px]">
                  7 featured job
                </li>
                <li className="text-[18px] text-[#31795a] mb-[17px]">
                  Job post live for 30 days
                </li>
              </ul>
              <div className="my-8 capitalize">
                <a
                  href="#"
                  className="w-full leading-[40px] text-center block mx-[auto] my-[0] font-medium tracking-[-.5px] text-[#fff] rounded-[30px] capitalize bg-[#31795A] hover:bg-[#D2F34C] duration-200"
                >
                  post a jop
                </a>
              </div>
            </div>
            <div
              className="relative overflow-hidden text-center bg-[#FAFFE5] 
            border border-solid border-[#D2F34C] rounded-[30px] px-[20px] py-[38px]"
            >
              <div className="absolute top-10 left-0 px-1 bg-[#D2F34C] py-0 rounded-tl-none rounded-br-[7px] rounded-tr-[7px] rounded-bl-none flex flex-row items-center gap-1">
                <HiExclamationTriangle className="text-[#31795A]" />
                <p className="smallp !m-0 !text-[10px] ">Popular</p>
              </div>
              <div>
                <p className="smallp">Gold</p>
              </div>
              <div className="text-[72px] tracking-[-1px] text-[#31795a] leading-[normal] -mt-[4px] mx-[0] mb-[36px] relative">
                <span className="text-[30px] absolute top-3 left-8">$</span> 27.
                <span className="text-[50px] absolute top-4 right-0">99</span>
              </div>
              <ul>
                <li className="text-[18px] text-[#31795a] mb-[17px]">
                  15 job posting
                </li>
                <li className="text-[18px] text-[#31795a] mb-[17px]">
                  7 featured job
                </li>
                <li className="text-[18px] text-[#31795a] mb-[17px]">
                  Job post live for 30 days
                </li>
              </ul>
              <div className="my-8 capitalize">
                <a
                  href="#"
                  className="w-full leading-[40px] text-center block mx-[auto] my-[0] font-medium tracking-[-.5px] text-[#31795a] rounded-[30px] capitalize bg-[#D2F34C]  duration-200"
                >
                  choose plan
                </a>
              </div>
            </div>
            <div
              className="relative overflow-hidden text-center bg-[#fff] 
            border border-solid border-[#244034] rounded-[30px] px-[20px] py-[38px]"
            >
              <div>
                <p className="smallp">Diamond</p>
              </div>
              <div className="text-[72px] tracking-[-1px] text-[#31795a] leading-[normal] -mt-[4px] mx-[0] mb-[36px] relative">
                <span className="text-[30px] absolute top-3 left-8">$</span> 39.
                <span className="text-[50px] absolute top-4 right-0">70</span>
              </div>
              <ul>
                <li className="text-[18px] text-[#31795a] mb-[17px]">
                  15 job posting
                </li>
                <li className="text-[18px] text-[#31795a] mb-[17px]">
                  7 featured job
                </li>
                <li className="text-[18px] text-[#31795a] mb-[17px]">
                  Job post live for 30 days
                </li>
              </ul>
              <div className="my-8 capitalize">
                <a
                  href="#"
                  className="w-full leading-[40px] text-center block mx-[auto] my-[0] font-medium tracking-[-.5px] text-[#fff] rounded-[30px] capitalize bg-[#31795A] hover:bg-[#D2F34C] duration-200"
                >
                  choose plan
                </a>
              </div>
            </div>
          </div>
          <div className="text-center m-auto flex">
            <p className="smallp mt-14 lg-w-5/12 m-auto">
              We have done it carefully and simply. Combined with <br />
              the ingredients makes for beautiful landings.
            </p>
          </div>
        </div>
        <MostCompleteJop />
        <Footer />
      </div>
    </div>
  );
}

export default withLoader(Pricing);
