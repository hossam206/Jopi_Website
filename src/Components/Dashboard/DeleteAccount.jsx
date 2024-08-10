import React from "react";
import Applyjopcard from "../JopCards/Applyjopcard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function DeleteAccount() {
  const appliedJobs = useSelector((state) => state.jobscards.AppliedJobs);
  console.log(appliedJobs.length);
  const Navigate = useNavigate();
  return (
    <div className=" Container">
      <div className="relative w-full h-screen">
        {appliedJobs.length > 0 ? (
          <div className="relative w-full h-screen">
            <h3 className="text-[#244034] text-[30px] mb-8">My Jobs</h3>
            <div className="lg:px-[45px] px-[20px] py-[60px] rounded-[20px] bg-white lg:overflow-x-hidden overflow-x-scroll  ">
              <div className="flex  flex-row   items-start justify-between bg-[#f0f5f3] text-[15px] font-medium text-[#244034] rounded-[10px] lg:w-full w-fit  ">
                <div className="px-[15px] py-[12px]">Title</div>
                <div className="px-[15px] py-[12px] ml-32">Job Created</div>
                <div className="px-[15px] py-[12px]">Comapny</div>
                <div className="px-[15px] py-[12px] pl-14">Status</div>
                <div className="px-[15px] py-[12px]">Action</div>
              </div>
              <div className="ml-[10px] my-6">
                {appliedJobs.map((ApplyJop) => (
                  <Applyjopcard
                    key={ApplyJop.id}
                    jopUrl={ApplyJop.j}
                    jopid={ApplyJop.id}
                    JopPosition={ApplyJop.position
                      .split(" ")
                      .slice(0, 3)
                      .join(" ")}
                    JopStatus={ApplyJop.location}
                    jopDate={ApplyJop.date}
                    JopComapny={ApplyJop.company}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className=" h-screen text-center flex flex-col items-center justify-start py-4 ">
            <h3 className="text-center py-5 !m-0 text-3xl font-bold capitalize">
              No Job addaed try to add jop now
            </h3>
            <button
              className="py-3 px-10 block font-semibold text-center bg-mainColor text-white rounded-[10px] text-[15px]  cursor-pointer hover:bg-hoverColor outline:none"
              onClick={() => Navigate("/Jops")}
            >
              Add jop
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
