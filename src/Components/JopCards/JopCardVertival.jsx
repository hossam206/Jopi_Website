import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { DeletejOP } from "../../Rtk/actions/Actions";

export default function JopCardVertival({
  companylogo,
  job_position,
  job_location,
  job_minsalary,
  job_maxsalary,
  comapanyName,
  jopId,
}) {
  // navigate to jopdetails page
  const navigate = useNavigate();
  const handleNavigate = (jopid, e) => {
    navigate(`/JobDetails/${jopid}`);
    e.preventDefault();
  };
  const dispatch = useDispatch();
  return (
    <div>
      <div className="my-4 py-[25px] px-[20px] lg:py-[35x] border border-solid border-[#dbe8e5] rounded-[10px] relative">
        <div className="flex md:flex-row flex-wrap justify-between items-start flex-col gap-3 md:gap-5 ">
          <div className="flex flex-row items-center justify-start gap-5 ">
            <div className="w-[60px]">
              <img src={companylogo} loading="lazy" className="block" />
            </div>
            <div className="flex flex-col items-start justify-start  ">
              <span className="text-[14px] text-mainColor font-semibold">
                {comapanyName}
              </span>
              <h3 className="!p-0 !m-0">{job_position}</h3>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start text-[16px] text-center">
            <span className=" text-grayColor">{job_location}</span>
            <div className="font-medium text-[#244034]  mx-[0] mb-[25px] flex flex-row items-center">
              <p className="text-[13px] font-medium text-[#aaa]">
                <span className="font-semibold text-grayColor">
                  {job_minsalary}$ - {job_maxsalary}$
                </span>
                &nbsp;&nbsp;Monthly{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between gap-3 ">
            <div className="w-[85px] leading-[35px] font-medium text-[12px] text-center tracking-[1px] text-grayColor bg-secondColor uppercase rounded-[17px] cursor-pointer hover:bg-[#31795A] hover:border-[#31795A] hover:text-white ">
              <a href="#" onClickCapture={(e) => handleNavigate(jopId, e)}>
                Apply
              </a>
            </div>
            <div
              className="p-2  
         border border-solid border-[#d6d6d6] rounded-full text-[#000] bg-secondColor text-center h-[300px]duration-200   hover:text-white hover:bg-[#31795A] hover:border-[#31795A] cursor-pointer"
              onClick={()=>dispatch(DeletejOP(jopId))}
            >
              <MdDeleteOutline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
