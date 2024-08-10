import React from "react";
import { HiExclamationTriangle } from "react-icons/hi2";
function Membershib() {
  return (
    <div>
      <div className="mt-4 h-fit mb-7 lg:px-4  ">
        <h3 className="text-[#244034] text-[30px] lg:px-5">Membership</h3>
        <div className=" grid grid-cols-12 border border-solid border-neutral-400 lg:mx-10 rounded-[10px]">
          <div className="col-span-6  lg:p-4 p-2 border-r border-solid border-neutral-400">
            <h3 className="mb-2 font-semibold text-[#254035]">
              Current Plan (Gold)
            </h3>
            <p className="  m-0 lg:text-[17px] text-[14px] text-[#747474] font-normal">
              Unlimited access to our legal document library and online rental
              application tool, billed monthly.
            </p>
          </div>
          <div className="col-span-6  lg:p-4 p-2  items-center gap-3">
            <div>
              <span className="text-[#31795A] lg:text-[60px] lg:font-normal text-[29px] font-bold">
                $29
              </span>
            </div>
            <div className=" flex lg:flex-row flex-col items-start gap-2 ">
              <div>
                <h4 className="text-[18px] text-[#31795a] font-semibold">
                  Monthly Plan
                </h4>
                <p className="m-0 text-[17px] text-[#747474] font-normal">
                  Your subscription renews{" "}
                  <span className="font-semibold text-black">
                    July 12th, 2023
                  </span>
                </p>
                <a
                  href="#"
                  className="underline text-[#31795a] text-[14px] font-semibold hover:text-red-500"
                >
                  Cancel Current Plan
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 py-16 gap-6  ">
          <div
            className=" lg:col-span-4 col-span-12  relative overflow-hidden text-center bg-[#fff] 
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
            className="lg:col-span-4 col-span-12 relative overflow-hidden text-center bg-[#FAFFE5] 
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
            className="lg:col-span-4 col-span-12 relative overflow-hidden text-center bg-[#fff] 
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
      </div>
    </div>
  );
}

export default Membershib;
