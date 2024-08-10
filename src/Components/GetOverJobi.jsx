import React from "react";
import { FaCheck } from "react-icons/fa6";
function GetOverJobi() {
  return (
    <div className="relative pt-[100px] pb-[50px] px-4 lg:px-0">
      <div className="Container">
        <div className="flex flex-col-reverse items-center lg:flex-row relative">
          <div className="lg:w-7/12 w-full">
            <div className="pr-2 relative">
              <div className="flex flex-row ">
                <div className="md:w-6/12 w-8/12">
                  <img src="/Images/AboutUs/img_02.webp" />
                </div>
              </div>
              <div className="flex flex-row gap-7 mt-4">
                <div className="md:w-4/12 w-5/12">
                  <img src="/Images/AboutUs/img_03.webp" className="h-auto" />
                </div>
                <div className="md:w-6/12 w-7/12">
                  <img src="/Images/AboutUs/img_04.webp" className="h-auto" />
                </div>
              </div>
              <img
                src="/Images/AboutUs/screen_01.webp"
                className="absolute text-transparent h-auto
                right-[3%] lg:right-[6%] top-[2%] lg:w-[411px]  w-[224px]"
              />
              <img
                src="/Images/AboutUs/screen_02.webp"
                className="absolute text-transparent h-auto right-[3%] top-[35%] lg:w-[272px] w-[224px]"
              />
              <img
                src="/Images/AboutUs/screen_03.webp"
                className="absolute text-transparent h-auto left-[7%%] bottom-[-9%] lg:w-[333px] w-[211px] "
              />
            </div>
          </div>
          <div className="lg:w-5/12 w-full lg:absolute lg:top-0 lg:right-0 pb-10 ">
            <h2 className="!text-[#254035] text-[40px] lg:text-[50px]">
              Get over 50.000+ talented experts in jobi.
            </h2>
            <p className="smallp my-4">
              A full hybrid workforce management tools are yours to use, as well
              as access to our top 1% of talent.
            </p>
            <ul className="gap-3 flex flex-col mt-4">
              <li className="flex flex-row items-start gap-2 relative">
                <span className="text-[#000] text-[18px] mt-1">
                  <FaCheck />
                </span>
                <p className="text-[18px] !m-0 font-semibold !text-[#244034] ">
                  Seamless searching
                </p>
              </li>
              <li className="flex flex-row items-start gap-2 relative">
                <span className="text-[#000] text-[18px] mt-1">
                  <FaCheck />
                </span>
                <p className="text-[18px] !m-0 font-semibold !text-[#244034] ">
                  Get top 3% experts for your project
                </p>
              </li>
              <li className="flex flex-row items-start gap-2 relative">
                <span className="text-[#000] text-[18px] mt-1">
                  <FaCheck />
                </span>
                <p className="text-[18px] !m-0 font-semibold !text-[#244034] ">
                  Protected payments system
                </p>
              </li>
            </ul>

            <div className="my-8 capitalize">
              <a
                href="#"
                className="w-full leading-[40px] text-center block mx-[auto] my-[0] font-medium tracking-[-.5px] text-[#fff] bg-[#244034] rounded-[30px] capitalize hover:bg-[#31795A] duration-200"
              >
                post a jop
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetOverJobi;
