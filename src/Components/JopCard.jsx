import React, { useEffect, useState } from "react";
import { CiBookmarkCheck } from "react-icons/ci";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { saveJop } from "../Rtk/actions/Actions";
import { FaCheck } from "react-icons/fa6";
export default function JopCard({
  companylogo,
  jopDate,
  CompanyName,
  Joptitle,
  joptype,
  jopLocation,
  isButtonVisible,
  JopId,
  jopcard,
  jopNew,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigate = (e, id) => {
    navigate(`/JobDetails/${id}`);
    e.preventDefault();
  };
  // const show Suucessfully added jop
  const [suuceddAdded, setsuccessAdded] = useState(false);
  const SuccessAdded = (jopDetail) => {
 
    dispatch(saveJop(jopDetail));
    setsuccessAdded(true);
    setTimeout(() => {
      setsuccessAdded(false);
    }, 1000);
  };
  // format Date
  const [formattedDate, setFormattedDate] = useState("");
  useEffect(() => {
    if (jopDate) {
      const date = new Date(jopDate);
      const options = { year: "numeric", month: "long", day: "numeric" };
      setFormattedDate(date.toLocaleDateString("en-US", options));
    }
  }, [jopDate]);

  return (
    <>
      <div
        className={`fixed top-24 right-0 px-5 bg-hoverColor h-10 flex flex-row items-center gap-2 rounded-tl-[10px] rounded-bl-[10px] z-40 w-fit transition-transform duration-300 ${
          suuceddAdded ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-7 h-7 bg-slate-200 rounded-full leading-7 flex flex-col items-center justify-center">
          <FaCheck />
        </div>
        <p className="capitalize text-white">
          Jop Suucessfully Applied To Favourite Jop
        </p>
      </div>
      <div className=" pt-[35px] px-[35px] pb-[30px] bg-[#fff]  border border-solid border-[#ebebeb] rounded-[10px]  flex-col h-full [transition:all_.2s_ease-in-out_0s] relative hover:bg-[#F8FDE4] hover:border-[#397E60] ">
        <div className="absolute px-4  top-4 right-0 bg-red-500 text-white content-[${joptype}] text-center rounded-tl-[4px] rounded-bl-[4px]">
          {jopNew}
        </div>
        <div className="flexRow justify-between w-full relative">
          <div className="w-[80px] h-[60px] overflow-hidden">
            {companylogo ? (
              <img src={companylogo} alt="" loading="lazy" />
            ) : (
              <div>
                <Skeleton width={"50%"} />
              </div>
            )}
          </div>
          {isButtonVisible && (
            <div
              className="p-2  
         border border-solid border-[#d6d6d6] rounded-full text-[#cbcbcb] bg-[#fff] text-center h-[300px]duration-200 cursor-pointer hover:text-black hover:bg-secondColor hover:border-secondColor"
              onClick={() => SuccessAdded(jopcard)}
            >
              <CiBookmarkCheck className="items-center " />
            </div>
          )}
        </div>

        <div className="w-full">
          <a
            className="text-[13px] text-[#00bf58] px-[12px] py-[2px] bg-[#e7f6ef] rounded-[3px]
           mt-[24px] mb-[16px] inline-block"
            href="/job-details-v1/1"
          >
            {CompanyName}
          </a>
        </div>
        <div className="h-[70px]">
          <a
            href="#"
            className="text-[24px] leading-[1.416em] text-[#000] hover:text-mainColor duration-150"
            onClick={(e) => handleNavigate(e, JopId)}
          >
            {Joptitle}
          </a>
        </div>
        <div className="text-[16px] text-[#aaa] mt-[18px] mx-[0] mb-[14px]">
          {formattedDate}
        </div>
        <div className="text-[16px] text-[#aaa] mb-[14px] mx-[0] ">
          {joptype}
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="text-[16px] font-medium text-[#000]">
            <span>{jopLocation}</span>
          </div>
          {isButtonVisible && (
            <Link
              to={`/JobDetails/${JopId}`}
              className="btn  !min-w-[88px] !p-[1px] cursor-pointer duration-200"
            >
              APPLY
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
