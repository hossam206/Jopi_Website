import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { useSelector } from "react-redux";
function MyJobs() {
  const postsjobs = useSelector((state) => state.jobsPosts.publishJopPosts);
 
  return (
    <div className="mt-4 h-fit mb-7 ">
      <h3 className="text-[#244034] text-[30px] mb-8 lg:px-5">My Jobs</h3>
      <div className="bg-white  py-[40px] lg:px-[45px] px-[10px] rounded-[20px] lg:overflow-hidden overflow-x-scroll">
        <div className="w-full">
          {postsjobs.length > 0 ? (
            <table className="w-full">
              <thead>
                <tr>
                  <th className="order-none w-fit text-left  pl-[15px] px-[20px] py-[12px] text-[15px] font-semibold text-[#244034] bg-[#f0f5f3]">
                    Title
                  </th>
                  <th className="order-none  py-[12px] w-fit text-[15px] px-[20px] font-semibold text-[#244034] bg-[#f0f5f3]">
                    Job Created
                  </th>
                  <th className="order-none py-[12px]  w-fit text-[15px] px-[20px] font-semibold text-[#244034] bg-[#f0f5f3]">
                    Applicants
                  </th>
                  <th className="order-none py-[12px]  w-fit text-[15px] px-[20px] font-semibold text-[#244034] bg-[#f0f5f3]">
                    Company
                  </th>
                  <th className="order-none py-[12px]  w-fit text-[15px] px-[20px] font-semibold text-[#244034] bg-[#f0f5f3]">
                    status
                  </th>
                </tr>
              </thead>
              <tbody>
                {postsjobs.map((postjob) => (
                  <tr
                    className="border-b border-solid border-neutral-200 "
                    key={postjob.actor.ID}
                  >
                    <td className=" order-none w-fit text-left   px-[20px] pl-[15px] py-[14px] text-[15px] font-semibold text-[#244034]  ">
                      <div className="font-semibold  ">
                        {postjob.actor.Position}
                      </div>
                      <div className="text-[14px] font-normal text-[rgba(36,_64,_52,_.7)] mt-[2px]">
                        {postjob.actor.Location}
                      </div>
                    </td>
                    <td className=" order-none w-fit text-center px-[20px] pl-[15px] py-[20px] text-[16px] font-normal text-[#244034]">
                      {postjob.actor.DATE}
                    </td>
                    <td className=" order-none w-fit text-center px-[20px] pl-[15px] py-[20px] text-[16px] font-normal text-[#244034]">
                      130 Applications
                    </td>

                    <td className=" order-none w-fit text-center  py-[14px] text-[16px] font-normal text-[#244034] ">
                      {postjob.actor.CompanyName}
                    </td>
                    <td className=" order-none w-fit text-center px-[20px] pl-[15px] py-[14px] text-[16px] font-normal text-[#244034]">
                      Active
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyJobs;
