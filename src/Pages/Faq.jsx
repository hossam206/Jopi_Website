import React, { useState } from "react";
import FixedNavbar from "../Components/FixedNavbar/FixedNavbar";
// import icons
import { FaPlus, FaMinus } from "react-icons/fa";
import { Faqarr } from "../assets/asset";
import MostCompleteJop from "../Components/MostCompleteJop";
import Footer from "../Components/Footer";
import withLoader from "../Components/HigherOrderComp/HigherorederLoader";

function Faq() {
  // handle collapse
  const [collapse, setcollapse] = useState(false);
  const handleCollapse = (index) => {
    setcollapse(collapse === index ? null : index);
  };
  // handle categpry
  const [filter, setfilter] = useState("All");

  const filterdData =
    filter === "All"
      ? Faqarr
      : Faqarr.filter((item) => item.category.includes(filter));

  const Categoryarr = [
    "All",
    "Marketing",
    "Buying",
    "User Manual",
    "Payments",
    " Terms & Conditions",
    "Account",
  ];
  
  return (
    <div>
      <FixedNavbar
        MainTitle={"Question & Answers"}
        PageName={"Find your answers"}
      />
      <div className="Container">
        <div className="pt-24 relative text-center m-auto">
          <div className="flex flex-row flex-wrap items-center justify-center">
            {Categoryarr.map((cat, index) => (
              <div
                key={index}
                className={`text-[13px] leading-[37px] rounded-[30px] px-[15px] py-[0] mt-[10px] mx-[5px] mb-[0]   border-[0]  cursor-pointer ${
                  filter === cat
                    ? "bg-hoverColor text-[#D2F34C]  "
                    : "bg-transparent text-grayColor  "
                }`}
                onClick={() => setfilter(cat)}
              >
                {cat}
              </div>
            ))}
          </div>

          <div className="bg-[#eff6f3] rounded-[30px] pt-[3px]  text-star px-[10px] mx-3 lg:px-[60px] pb-[9px] mt-[60px]">
            {filterdData.map((data, index) => (
              <div
                key={index}
                className="w-full relative border-b border-solid fade-in border-neutral-200 last:border-b-0  py-2 mb-1"
              >
                <div
                  className="flex flex-row items-center justify-between"
                  onClick={(e) => handleCollapse(data.id)}
                >
                  <span className="bg-transparent px-[0] py-[10px] border-[none] outline-[none] [box-shadow:none] lg:text-[22px] text-[14px] font-medium text-[#000]">
                    {data.title}
                  </span>
                  <div
                    className="w-[30px] h-[30px] bg-[#fff] rounded-[50%] text-[10px] text-grayColor text-center  flex items-center flex-row justify-center cursor-pointer
                hover:rotate-180 duration-200 hover:bg-mainColor hover:text-white"
                  >
                    {collapse === data.id ? <FaMinus /> : <FaPlus />}
                  </div>
                </div>
                {collapse === data.id && (
                  <div
                    className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                      collapse
                        ? "max-h-[200px] opacity-100  "
                        : "max-h-0 opacity-0 "
                    }`}
                  >
                    <p className="smallp !text-[#212529] text-[18px] text-start">
                      {data.Text}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <MostCompleteJop />
        <Footer />
      </div>
    </div>
  );
}

export default withLoader(Faq);
