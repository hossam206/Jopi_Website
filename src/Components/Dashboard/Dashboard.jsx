import React, { useState } from "react";
// import icons
import { IoSaveOutline } from "react-icons/io5";
import { FaRegUser, FaRegEye, FaPencilAlt } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { DeleteAppliedJop } from "../../Rtk/actions/Actions";
import { CiLink } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { GrView } from "react-icons/gr";

function Dashboard({loopjops}) {
  const appliedJobs = useSelector((state) => state.jobscards.AppliedJobs);

  const dispatch = useDispatch();
  const numbersarr = [
    { id: 1, num: "1.7k+", text: "Total Visitor", icon: FaRegUser },
    { id: 2, num: "03", text: "Shortlisted", icon: IoSaveOutline },
    { id: 3, num: "2.1k", text: "Views", icon: FaRegEye },
    { id: 4, num: "07", text: "Applied Job", icon: FaPencilAlt },
  ];
  // show list
  const [Dots, showDots] = useState(false);
  const handleDots = (index) => {
    showDots(Dots === index ? null : index);
  };
  const navigate = useNavigate();

  // DeletE Applied Jops

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
  // handle Navigayte to jopDeatils

  const handleNavigate = (e, id) => {
    navigate(`/JobDetails/${id}`);
    e.preventDefault();
  };
   return (
    <div className="relative">
      <div>
        <h3 className="text-[#244034] text-[30px] mb-8">Dashboard</h3>
        <div className="grid grid-cols-12   lg:gap-5">
          {numbersarr.map((block) => (
            <div
              className="lg:col-span-3 col-span-6 mr-4 mb-5 relative pt-[18px] lg:px-[20px] px-[5px] pb-[22px] flex flex-row items-center justify-between   bg-white rounded-[20px] after:content-[''] after:absolute after:top-[12px] after:left-[12px] after:right-[12px] after:-bottom-[10px] after:rounded-[30px] after:bg-[hsla(0,_0%,_100%,_.6)] after:-z-[10]"
              key={block.id}
            >
              <div>
                <h3 className="text-[30px] !m-0">{block.num}</h3>
                <span className="text-[#00000080]">{block.text}</span>
              </div>
              <div className="bg-[#d2f34c]  p-[15px] rounded-full text-[14px] lg:text-2xl flex items-center justify-center">
                <block.icon />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-3">
        <div className="lg:col-span-7 col-span-12 rounded-[20px] mt-[50px]   bg-white">
          <div className="text-[20px] text-[#244034] border-b border-solid border-[#e3f0eb]  pl-[30px]  py-[25px] font-medium">
            Profile Views
          </div>
          <div className="overflow-hidden px-[20px] py-7">
            <img src="/Images/Dashboard/main-graph.webp" />
          </div>
        </div>
        <div className="lg:col-span-5 col-span-12 ">
          <div className="bg-white rounded-[20px] mt-[50px]">
            <div className="text-[20px] text-[#244034] border-b border-solid border-[#e3f0eb]  pl-[30px]  py-[25px] font-medium">
              Recent Applied Job
            </div>
            {appliedJobs.length > 0 ? (
              appliedJobs.map((jop, index) => (
                <div className=" px-[30px]" key={index}>
                  <div className="flex flex-row items-start justify-between py-8">
                    <div className="flex flex-row items-start gap-3">
                      <div className="w-12 h-12">
                        <img src={jop.company_logo} />
                      </div>
                      <div>
                        <a
                          href="#"
                          className="text-[16px] text-[#244034] block overflow-ellipsis overflow-hidden whitespace-nowra hover:text-hoverColor hover:underline duration-200"
                        >
                          {jop.position.split(" ").slice(0, 3).join(" ")}...
                        </a>
                        <p className="text-[#24403480] text-[14px]">
                          {jop.location ? jop.location : "Remotly"}
                        </p>
                      </div>
                    </div>
                    <div className="text-xl cursor-pointer text-[#2b2b2b59] hover:text-mainColor relative   ">
                      <BsThreeDots
                        onClick={() => handleDots(index)}
                        className="z-10"
                      />
                      {Dots === index && (
                        <div className="absolute m-0 top-[30px] left-[-100px]    border-[none] rounded-[15px]    bg-white [box-shadow:0_30px_60px_rgba(0,_0,_0,_.1)] z-50">
                          <div className="flex flex-col items-start justify-start gap-3 px-4 py-5 min-w-[160px]">
                            {copySuccess && (
                              <p className="text-[11px] text-red-500">
                                {copySuccess}
                              </p>
                            )}
                            <a
                              href="#"
                              className=" flex flex-row items-center gap-3 justify-start !m-0 text-[14px] text-[rgba(0,_0,_0,_.5)] font-medium w-full hover:text-mainColor "
                              onClick={(e) => handleNavigate(e, jop.id)}
                            >
                              <GrView className="text-[17px] font-bold" />
                              View Jop
                            </a>

                            <a
                              href="#"
                              className="flex flex-row items-center gap-3 justify-start !m-0 text-[14px] text-[rgba(0,_0,_0,_.5)] font-medium w-full hover:text-mainColor"
                              onClick={(e) => copyToClipboard(jop.apply_url, e)}
                            >
                              <CiLink className="text-[17px] font-bold" />
                              Get Jop Link
                            </a>
                            <a
                              href="#"
                              className="flex flex-row items-center gap-3 justify-start !m-0 text-[14px] text-[rgba(0,_0,_0,_.5)] font-medium w-full hover:text-red-500 "
                              onClick={(e) => deleteAppliedJop(e, jop.id)}
                            >
                              <MdDelete className="text-[17px] font-bold" />
                              Delete
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center flex flex-col items-center justify-center py-4 ">
                <h3 className="text-center py-5 !m-0">No Job addaed</h3>
                <button
                  className="py-3 px-10 block  text-center bg-mainColor text-white rounded-[10px] text-[15px]  cursor-pointer hover:bg-hoverColor outline:none"
                  onClick={() => navigate("/Jops")}
                >
                  Apply Now
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
