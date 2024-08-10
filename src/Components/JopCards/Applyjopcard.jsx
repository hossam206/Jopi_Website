import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { CiLink } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { DeleteAppliedJop } from "../../Rtk/actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
function Applyjopcard({
  JopPosition,
  JopStatus,
  jopDate,
  JopComapny,
  jopid,
  jopUrl,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const appliedJobs = useSelector((state) => state.AppliedJobs);

  // format date
  const [formattedDate, setFormattedDate] = useState("");
  useEffect(() => {
    if (jopDate) {
      const date = new Date(jopDate);
      const options = { year: "numeric", month: "long", day: "numeric" };
      setFormattedDate(date.toLocaleDateString("en-US", options));
    }
  }, [jopDate]);
  // handle Navigayte to jopDeatils

  const handleNavigate = (e, id) => {
    navigate(`/JobDetails/${id}`);
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
    <div className="flex  flex-row  items-start  justify-between border-b border-solid border-neutral-200 pb-[16px] w-full gap-8 my-6">
      <div className="flex flex-col items-start gap-2">
        <h3 className="text-[#244034] font-medium text-[16px] !m-0">
          {JopPosition && JopPosition.split(" ").slice(0, 2).join(" ")}
        </h3>
        <p className="text-[14px] text-mainColor font-semibold ">
          {JopStatus && JopStatus.length > 0
            ? ` ${JopStatus.split(" ").slice(0, 1).join(" ")}`
            : "Remotely"}
          &nbsp;...
        </p>
      </div>
      <div className="text-[15px] align-middle [box-shadow:none]  border-[none] border-b-[1px_solid_rgba(0,_0,_0,_.1)]">
        {formattedDate}
      </div>
      <div className="text-[15px] align-middle [box-shadow:none]    border-[none] border-b-[1px_solid_rgba(0,_0,_0,_.1)]">
        {JopComapny && JopComapny.split(" ").slice(0, 2).join(" ")}
      </div>
      <div className="text-[#244034e6] relative before:content-[''] before:absolute  before:top-[8px] before:-left-[12px] before:w-2 before:h-2 before:rounded-full before:bg-mainColor ">
        Active
      </div>
      <div className="text-xl cursor-pointer text-[#2b2b2b59] hover:text-mainColor relative Z-40">
        <BsThreeDots onClick={() => handleDots(jopid)} />
        {Dots === jopid && (
          <div className="absolute m-0 top-[30px] left-[-100px]    border-[none] rounded-[15px]    bg-white [box-shadow:0_30px_60px_rgba(0,_0,_0,_.1)] z-40">
            <div className="flex flex-col items-start justify-start gap-3 px-4 py-5 min-w-[160px] Z-30">
              {copySuccess && (
                <p className="text-[11px] text-red-500">{copySuccess}</p>
              )}
              <a
                href="#"
                className=" flex flex-row items-center gap-3 justify-start !m-0 text-[14px] text-[rgba(0,_0,_0,_.5)] font-medium w-full hover:text-mainColor "
                onClick={(e) => handleNavigate(e, jopid)}
              >
                <GrView className="text-[17px] font-bold" />
                View Jop
              </a>

              <a
                href="#"
                className="flex flex-row items-center gap-3 justify-start !m-0 text-[14px] text-[rgba(0,_0,_0,_.5)] font-medium w-full hover:text-mainColor"
                onClick={(e) => copyToClipboard(jopUrl, e)}
              >
                <CiLink className="text-[17px] font-bold" />
                Get Jop Link
              </a>
              <a
                href="#"
                className="flex flex-row items-center gap-3 justify-start !m-0 text-[14px] text-[rgba(0,_0,_0,_.5)] font-medium w-full hover:text-red-500 "
                onClick={(e) => deleteAppliedJop(e, jopid)}
              >
                <MdDelete className="text-[17px] font-bold" />
                Delete
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Applyjopcard;
