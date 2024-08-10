import React, { useEffect, useState } from "react";
// import icons
import { IoCloseOutline } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";

import { postJob } from "../../firebase/mainfunction";
import { SetProgress, ToggleShowPostJobForm } from "../../Rtk/actions/Actions";
export default function AddJop() {
  const dispatch = useDispatch();

  const [jobLink, setjobLink] = useState("");
  const [id, setid] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [imagesrc, setimagesrc] = useState(null);
  const [JobDescription, setJobDescription] = useState("");
  const [JobLocation, setJobLocation] = useState("");
  const [joptype, setjoptype] = useState("");
  const [JobPosition, setJobPosition] = useState("");
  const [JobMin_Salary, setJobMin_Salary] = useState("");
  const [JobMax_Salary, setJobMax_Salary] = useState("");

  const progressWidth = useSelector((state) => state.ProgressBar.progress);
  const [progress, showprogress] = useState(false);
  // get input file content
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file === "" || undefined) {
      alert("Please enter a valid image.");
    } else {
      setimagesrc(file);
    }
  };
  // reset all inputs
  const reset = () => {
    setjobLink("");
    setid("");
    setCompanyName("");
    setimagesrc(null);
    setJobDescription("");
    setJobLocation("");
    setJobPosition("");
    setJobMin_Salary("");
    setJobMax_Salary("");
  };
  // handle Log In
  const handleJopForm = (status) => {
    dispatch(ToggleShowPostJobForm(status));
  };
  // send Post Content to database
  const today = new Date();
  const currentDate = today.toISOString().slice(0, 10);

  const handlePost = (e) => {
    e.preventDefault();
    const payload = {
      LINK: jobLink,
      ID: id,
      COMPANY_NAME: CompanyName,
      IMAGE: imagesrc,
      DESCRIPTION: JobDescription,
      LOCATION: JobLocation,
      POSITION: JobPosition,
      MINSALARY: JobMin_Salary,
      MAXSALARY: JobMax_Salary,
      Date: currentDate,
      JOPType: joptype,
    };
    dispatch(postJob(payload));
    if (progressWidth < 100) {
      showprogress(true);
    }
    reset(e);
  };
  useEffect(() => {
    if (progressWidth == 100) {
      setTimeout(() => {
        showprogress(false);
        handleJopForm(false);
        dispatch(SetProgress(0));
      }, 1000);
    }
  }, [progressWidth, handleJopForm]);
  return (
    <div className=" fixed top-0 left-0 right-0 w-full h-full bg-[#12201ad7] z-30 ">
      {progress ? (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 text-center flex flex-col items-center justify-center">
          <div className="w-[140px] h-[140px]">
            <img src="/Images/Navbar/loader.svg" />
          </div>
          <span className="text-gray-200 my-1"> {progressWidth} %</span>
          <p className="text-white capitalize !m-0">
            Your jop will publish soon...
          </p>
        </div>
      ) : (
        <div className="Container scrollbar-custom absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2  h-screen bg-[#fff] mx-[auto]   lg:w-[620px] w-[400px] !rounded-[10px]   overflow-y-scroll">
          <div className="my-[20px] lg:px-10 px-5   text-center">
            <div className="flex items-end justify-end   rounded-[10px] text-grayColor cursor-pointer text-3xl hover:text-red-500">
              <IoCloseOutline onClick={() => handleJopForm(false)} />
            </div>
            <div>
              <h3 className="lg:text-[50px] text-[30px]   font-normal text-[#244034] !m-0 ">
                Hi, Welcome Back!
              </h3>
            </div>
            <form className="grid grid-cols-12 gap-4" onSubmit={handlePost}>
              <div className="flex flex-col items-start justify-start  col-span-6">
                <label className="text-[14px] font-normal text-[rgba(0,_0,_0,_.5)] block mb-[6px]">
                  jop Link *
                </label>
                <input
                  placeholder="https//frontend"
                  type="text"
                  name="name"
                  value={jobLink}
                  onChange={(e) => setjobLink(e.target.value)}
                  required
                  className="w-full h-[45px] outline-none text-[16px] border border-solid border-[rgba(0,0,0,.06)] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-[rgba(49,_121,_90,_.09)]"
                ></input>
              </div>
              <div className="flex flex-col items-start justify-start  col-span-6">
                <label className="text-[14px] font-normal text-[rgba(0,_0,_0,_.5)] block mb-[6px]">
                  jop Id *
                </label>
                <input
                  placeholder="12378"
                  type="number"
                  name="name"
                  min="0"
                  value={id}
                  onChange={(e) => setid(e.target.value)}
                  required
                  className="w-full h-[45px] outline-none text-[16px] border border-solid border-[rgba(0,0,0,.06)] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-[rgba(49,_121,_90,_.09)]"
                ></input>
              </div>
              <div className="flex flex-col items-start justify-start  col-span-6">
                <label className="text-[14px] font-normal text-[rgba(0,_0,_0,_.5)] block mb-[6px]">
                  Company Name *
                </label>
                <input
                  placeholder="Google"
                  type="text"
                  name="name"
                  value={CompanyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                  className="w-full h-[45px] outline-none text-[16px] border border-solid border-[rgba(0,0,0,.06)] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-[rgba(49,_121,_90,_.09)]"
                ></input>
              </div>
              <div className="flex flex-col items-start justify-start  col-span-6">
                <label className="text-[14px] font-normal text-[rgba(0,_0,_0,_.5)] block mb-[6px]">
                  post Date *
                </label>
                <input
                  placeholder="Google"
                  type="Date"
                  name="name"
                  value={currentDate}
                  disabled
                  required
                  className="text-center w-full h-[45px] outline-none text-[16px] border border-solid border-[rgba(0,0,0,.06)] rounded-[8px] pl-[20px] pr-[22px] py-[0] text-[#000] bg-[rgba(49,_121,_90,_.09)]"
                ></input>
              </div>
              <div className="flex flex-col items-start justify-start  col-span-12 overflow-hidden">
                <label className="text-[14px] font-normal text-[rgba(0,_0,_0,_.5)] block mb-[6px] ">
                  Company Logo *
                </label>
                <div className="w-full h-[45px] outline-none text-[16px] border   border-solid border-[rgba(0,0,0,.06)] rounded-[8px]  py-[0] text-[#000] bg-[rgba(49,_121,_90,_.09)]">
                  <label
                    className="w-full leading-[45px] text-gray-400 cursor-pointer"
                    htmlFor="companyLogo"
                    required
                  >
                    {imagesrc ? imagesrc.name : "select an image to share"}
                  </label>
                </div>

                <input
                  type="file"
                  name="name"
                  required
                  id="companyLogo"
                  onChange={handleFileChange}
                  className="w-full h-[45px] outline-none text-[16px] border hidden border-solid border-[rgba(0,0,0,.06)] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-[rgba(49,_121,_90,_.09)]"
                ></input>
              </div>
              <div className="flex flex-col items-start justify-start  col-span-12">
                <label className="text-[14px] font-normal text-[rgba(0,_0,_0,_.5)] block mb-[6px]">
                  Jop Position *
                </label>
                <input
                  placeholder="Frontend Developer"
                  type="text"
                  name="name"
                  value={JobPosition}
                  onChange={(e) => setJobPosition(e.target.value)}
                  required
                  className="w-full h-[45px] outline-none text-[16px] border border-solid border-[rgba(0,0,0,.06)] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-[rgba(49,_121,_90,_.09)]"
                ></input>
              </div>
              <div className="flex flex-col items-start justify-start  col-span-12">
                <label className="text-[14px] font-normal text-[rgba(0,_0,_0,_.5)] block mb-[6px]">
                  Jop Description *
                </label>
                <textarea
                  placeholder="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                  type="text"
                  name="name"
                  required
                  value={JobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  className="resize-none w-full h-[65px] outline-none text-[16px] border border-solid border-[rgba(0,0,0,.06)] rounded-[8px] pl-[20px] pr-[52px] py-[10px] text-[#000] bg-[rgba(49,_121,_90,_.09)]"
                ></textarea>
              </div>
              <div className="flex flex-col items-start justify-start  col-span-6">
                <label className="text-[14px] font-normal text-[rgba(0,_0,_0,_.5)] block mb-[6px]">
                  Jop Location *
                </label>
                <input
                  placeholder="Cairo,Egypt"
                  type="text"
                  value={JobLocation}
                  onChange={(e) => setJobLocation(e.target.value)}
                  name="name"
                  required
                  className="w-full h-[45px] outline-none text-[16px] border border-solid border-[rgba(0,0,0,.06)] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-[rgba(49,_121,_90,_.09)]"
                ></input>
              </div>
              <div className="flex flex-col items-start justify-start  col-span-6">
                <label className="text-[14px] font-normal text-[rgba(0,_0,_0,_.5)] block mb-[6px]">
                  Jop Type *
                </label>
                <input
                  placeholder="FullTime, Remote"
                  type="text"
                  value={joptype}
                  onChange={(e) => setjoptype(e.target.value)}
                  name="name"
                  required
                  className="w-full h-[45px] outline-none text-[16px] border border-solid border-[rgba(0,0,0,.06)] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-[rgba(49,_121,_90,_.09)]"
                ></input>
              </div>

              <div className="flex flex-col items-start justify-start  col-span-6">
                <label className="text-[14px] font-normal text-[rgba(0,_0,_0,_.5)] block mb-[6px]">
                  Min_Salary *
                </label>
                <input
                  type="number"
                  name="number"
                  value={JobMin_Salary}
                  onChange={(e) => setJobMin_Salary(e.target.value)}
                  min="0"
                  required
                  className="w-full h-[45px] outline-none text-[16px] border border-solid border-[rgba(0,0,0,.06)] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-[rgba(49,_121,_90,_.09)]"
                ></input>
              </div>
              <div className="flex flex-col items-start justify-start  col-span-6">
                <label className="text-[14px] font-normal text-[rgba(0,_0,_0,_.5)] block mb-[6px]">
                  Max_Salary *
                </label>
                <input
                  type="number"
                  name="number"
                  value={JobMax_Salary}
                  onChange={(e) => setJobMax_Salary(e.target.value)}
                  min="0"
                  required
                  className="w-full h-[45px] outline-none text-[16px] border border-solid border-[rgba(0,0,0,.06)] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-[rgba(49,_121,_90,_.09)]"
                ></input>
              </div>

              <div className="mt-4 col-span-12">
                <button
                  type="submit"
                  className={`w-full leading-[50px] text-center block mx-[auto] my-[0] font-medium tracking-[-.5px] text-[#fff] bg-[#31795A] rounded-[10px] capitalize outline-none hover:bg-mainColor duration-200  ${
                    jobLink.length === 0
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
