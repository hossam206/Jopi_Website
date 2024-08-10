import React, { useState } from "react";
import Applyjopcard from "../JopCards/Applyjopcard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { HiDotsVertical } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
import { CiLink } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { DeleteAppliedJop } from "../../Rtk/actions/Actions";
function AppliedJops() {
  const appliedJobs = useSelector((state) => state.jobscards.AppliedJobs);
  const dispatch = useDispatch();
  // show list
  const [Dots, showDots] = useState(false);
  const handleDots = (index) => {
    showDots(Dots === index ? null : index);
  };
  const Navigate = useNavigate();
  const handleNavigate = (e, id) => {
    Navigate(`/JobDetails/${id}`);
    e.preventDefault();
  };
  // handle delete Applied Jop Func
  const deleteAppliedJop = (e, JopId) => {
    dispatch(DeleteAppliedJop(JopId));
    e.preventDefault();
  };
  // copy jop url
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = (link, e) => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setCopySuccess("Link copied to clipboard!");
        setTimeout(() => setCopySuccess(""), 2000); // Clear message after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        setCopySuccess("Failed to copy");
        setTimeout(() => setCopySuccess(""), 2000); // Clear message after 2 seconds
      });
    e.preventDefault();
  };
  return (
    <>
      <div className="relative   py-20">
        {appliedJobs.length > 0 ? (
          <div className="bg-white  py-[40px] lg:px-[45px] px-[10px] rounded-[20px] lg:overflow-x-hidden overflow-x-scroll">
            <div className="w-full">
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
                      Company
                    </th>
                    <th className="order-none py-[12px]  w-fit text-[15px] px-[20px] font-semibold text-[#244034] bg-[#f0f5f3]">
                      Status
                    </th>
                    <th className="order-none py-[12px]  w-fit text-[15px] px-[20px] font-semibold text-[#244034] bg-[#f0f5f3]">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {appliedJobs.map((ApplyJop) => (
                    <tr
                      className="border-b border-solid border-neutral-200 "
                      key={ApplyJop.id}
                    >
                      <td className=" order-none w-fit text-left   px-[20px] pl-[15px] py-[14px] text-[15px] font-semibold text-[#244034]  ">
                        <div className="font-semibold">
                          {ApplyJop.position.split(" ").slice(0, 8).join(" ")}
                        </div>
                        <div className="text-[14px] font-normal text-[rgba(36,_64,_52,_.7)] mt-[2px]">
                          {ApplyJop.location}
                        </div>
                      </td>
                      <td className=" order-none w-fit text-center px-[20px] pl-[15px] py-[20px] text-[16px] font-normal text-[#244034]">
                        {ApplyJop.date.split("").slice(0, 10).join("")}
                      </td>
                      <td className=" order-none w-fit text-center px-[20px] pl-[15px] py-[20px] text-[16px] font-normal text-[#244034]">
                        {ApplyJop.company}
                      </td>
                      <td className=" order-none w-fit text-center px-[20px] pl-[15px] py-[14px] text-[16px] font-normal text-[#244034]">
                        Active
                      </td>
                      <td className=" order-none w-fit text-right  pl-[55px] py-[14px] text-[16px] font-normal text-[#244034] ">
                        <div className="text-xl cursor-pointer text-[#2b2b2b59] hover:text-mainColor relative Z-40">
                          <BsThreeDots
                            onClick={() => handleDots(ApplyJop.id)}
                          />
                          {Dots === ApplyJop.id && (
                            <div className="absolute m-0 top-[30px] left-[-100px]    border-[none] rounded-[15px]    bg-white [box-shadow:0_30px_60px_rgba(0,_0,_0,_.1)] z-50">
                              <div className="flex flex-col items-start justify-start gap-3 px-4 py-5 min-w-[160px] Z-30">
                                {copySuccess && (
                                  <p className="text-[11px] text-red-500">
                                    {copySuccess}
                                  </p>
                                )}
                                <a
                                  href="#"
                                  className=" flex flex-row items-center gap-3 justify-start !m-0 text-[14px] text-[rgba(0,_0,_0,_.5)] font-medium w-full hover:text-mainColor "
                                  onClick={(e) =>
                                    handleNavigate(e, ApplyJop.id)
                                  }
                                >
                                  <GrView className="text-[17px] font-bold" />
                                  View Jop
                                </a>

                                <a
                                  href="#"
                                  className="flex flex-row items-center gap-3 justify-start !m-0 text-[14px] text-[rgba(0,_0,_0,_.5)] font-medium w-full hover:text-mainColor"
                                  onClick={(e) =>
                                    copyToClipboard(ApplyJop.apply_url, e)
                                  }
                                >
                                  <CiLink className="text-[17px] font-bold" />
                                  Get Jop Link
                                </a>
                                <a
                                  href="#"
                                  className="flex flex-row items-center gap-3 justify-start !m-0 text-[14px] text-[rgba(0,_0,_0,_.5)] font-medium w-full hover:text-red-500 "
                                  onClick={(e) =>
                                    deleteAppliedJop(e, ApplyJop.id)
                                  }
                                >
                                  <MdDelete className="text-[17px] font-bold" />
                                  Delete
                                </a>
                              </div>
                            </div>
                          )}
                        </div>{" "}
                      </td>
                    </tr>
                    // <Applyjopcard

                    //   key={ApplyJop.id}
                    //   jopUrl={ApplyJop.j}
                    //   jopid={ApplyJop.id}
                    //   JopPosition={ApplyJop.position
                    //     .split(" ")
                    //     .slice(0, 3)
                    //     .join(" ")}
                    //   JopStatus={ApplyJop.location}
                    //   jopDate={ApplyJop.date}
                    //   JopComapny={ApplyJop.company}
                    // />
                  ))}
                </tbody>
              </table>
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
    </>
  );
}

export default AppliedJops;
