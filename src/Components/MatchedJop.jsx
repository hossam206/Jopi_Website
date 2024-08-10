import React from "react";
import { BsCloudUploadFill } from "react-icons/bs";

function MatchedJop() {
  return (
    <div className="Container py-16">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#244034] px-4 pt-14 z-10 ">
        <div className="relative  overflow-hidden">
          <img src="/Images/Home/Get yourMatchedJob/img_09.webp" />
          <div className="overflow-hidden">
            <img
              src="/Images/Home/Get yourMatchedJob/shape_12.896401fd.svg"
              className="absolute top-[24%] left-[10%] w-20 h-20"
            />
            <img
              src="/Images/Home/Get yourMatchedJob/shape_12.896401fd.svg"
              className="absolute top-[40%] right-[10%] w-20 h-20"
            />
          </div>
        </div>

        <div className="grid md:w-6/12 pb-[43px]">
          <h2
            className="text-white text-[38px] md:text-[64px]
           leading-[1.1] m-0"
          >
            Get your
            <br /> <span className=" text-[#D2F34C]">Matched Jobs </span>
            in a few minutes.
          </h2>
          <p className="  mt-[25px] mb-[45px] text-[17px]  md:text-[20px] text-[#81b197]">
            Find your dream job & earn from world leading brands. Upload your CV
            now.
          </p>
          <form>
            <input
              type="file"
              id="cv"
              name="Upload Your cv"
              className="hidden"
            ></input>
            <span
              className="flex flex-row items-center justify-center  btn
            lg:w-[37%] gap-2 !bg-[#D2F34C] !font-semibold !text-grayColor cursor-pointer text-center  "
            >
              <BsCloudUploadFill className="text-xl" />
              <label htmlFor="cv" className="cursor-pointer">
                Upload Your Cv
              </label>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MatchedJop;
