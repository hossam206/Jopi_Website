import React, { useEffect, useState } from "react";
// import icons
import { FaCheck } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { postJob } from "../../firebase/mainfunction";
import { SetProgress, ToggleShowPostJobForm } from "../../Rtk/actions/Actions";
function PostJobAdminDashboard() {
  const dispatch = useDispatch();

  const [jobLink, setjobLink] = useState("");
  const [id, setid] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [imagesrc, setimagesrc] = useState(null);
  const [JobDescription, setJobDescription] = useState("");
  const [JobLocation, setJobLocation] = useState("");
  const [JobPosition, setJobPosition] = useState("");
  const [joptype, setjoptype] = useState("");
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
  // send Post Content to database
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
  // const show Suucessfully added jop
  const [suuceddAdded, setsuccessAdded] = useState(false);
  const [Text, setText] = useState("");

  const SuccessAdded = (content) => {
    setText(content);
    setsuccessAdded(true);
    setTimeout(() => {
      setsuccessAdded(false);
    }, 2000);
  };

  useEffect(() => {
    if (progressWidth == 100) {
      setTimeout(() => {
        showprogress(false);
        handleJopForm(false);
        dispatch(SetProgress(0));
        SuccessAdded("adding new job success");
      }, 1000);
    }
  }, [progressWidth, handleJopForm]);
  return (
    <div className="mt-4 h-fit mb-7 ">
      {progress && (
        <div className="fixed top-0 left-0 z-50 w-full h-full text-center flex flex-col items-center justify-center bg-[#000000a9]">
          <div className="w-[140px] h-[140px]">
            <img src="/Images/Navbar/loader.svg" />
          </div>
          <span className="text-gray-200 my-1"> {progressWidth} %</span>
          <p className="text-white tracking-[2px] !m-0">
            Your jop will publish soon...
          </p>
        </div>
      )}
      {/* start notificatoion */}
      <div
        className={`fixed top-24 right-0 px-5 bg-hoverColor h-10 flex flex-row items-center gap-2 rounded-tl-[10px] rounded-bl-[10px] z-50 w-fit transition-transform duration-300 ${
          suuceddAdded ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-7 h-7 bg-slate-200 rounded-full leading-7 flex flex-col items-center justify-center">
          <FaCheck />
        </div>
        <p className="capitalize text-white">{Text}</p>
      </div>
      <h3 className="text-[#244034] text-[30px] mb-8 lg:px-5"> Post Jobs </h3>
      <div className="bg-white rounded-[15px] lg:px-[45px] px-[14px] py-[40px]  ">
        <h4 className="text-[24px] text-[#31795a] mb-[30px] font-normal">
          Post a New Job
        </h4>

        <div>
          <form className="grid grid-cols-12 gap-4" onSubmit={handlePost}>
            <div className="lg:col-span-6 col-span-12">
              <label className="text-[17x] font-medium text-grayColor block mb-[6px]">
                jop Link *
              </label>
              <input
                placeholder="Enter Job Link "
                type="text"
                name="name"
                value={jobLink}
                onChange={(e) => setjobLink(e.target.value)}
                required
                className="w-full h-[55px] outline-none text-[16px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-transparent"
              ></input>
            </div>
            <div className="lg:col-span-6 col-span-12">
              <label className="text-[17x] font-medium text-grayColor block mb-[6px]">
                jop Id *
              </label>
              <input
                placeholder="Job Id Is Important"
                type="number"
                min={0}
                name="name"
                value={id}
                onChange={(e) => setid(e.target.value)}
                required
                className="w-full h-[55px] outline-none text-[16px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-transparent"
              ></input>
            </div>
            <div className="flex flex-col items-start justify-start  lg:col-span-6 col-span-12">
              <label className="text-[17x] font-medium text-grayColor block mb-[6px]">
                Company Name *
              </label>
              <input
                placeholder="Google"
                type="text"
                name="name"
                value={CompanyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
                className="w-full h-[55px] outline-none text-[16px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-transparent"
              ></input>
            </div>
            <div className="flex flex-col items-start justify-start  col-span-6">
              <label className="text-[17x] font-medium text-grayColor block mb-[6px]">
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
            <div className="flex flex-col items-start justify-start   col-span-12">
              <label className="text-[17x] font-medium text-grayColor block mb-[6px] ">
                Company Logo *
              </label>
              <div className="w-full h-[55px] outline-none text-[16px] border   border-solid border-[rgba(0,0,0,.06)] rounded-[8px]  py-[0] text-[#000] bg-[rgba(49,_121,_90,_.09)]">
                <label
                  className="w-full leading-[55px] px-3  text-gray-400 cursor-pointer "
                  htmlFor="companyLogo"
                  required
                >
                  {imagesrc ? imagesrc.name : "select Company Logo"}
                </label>
              </div>

              <input
                type="file"
                name="name"
                required
                id="companyLogo"
                onChange={handleFileChange}
                className="text-center w-full h-[55px] outline-none text-[10px] border hidden border-solid border-[rgba(0,0,0,.06)] rounded-[8px] lg:pl-[30px] lg:pr-[52px]  text-[#000] bg-[rgba(49,_121,_90,_.09)]"
              ></input>
            </div>
            <div className="flex flex-col items-start justify-start  col-span-12">
              <label className="text-[17x] font-medium text-grayColor block mb-[6px]">
                Jop Position *
              </label>
              <input
                placeholder="Frontend Developer"
                type="text"
                name="name"
                value={JobPosition}
                onChange={(e) => setJobPosition(e.target.value)}
                required
                className="w-full h-[55px] outline-none text-[16px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-transparent"
              ></input>
            </div>
            <div className=" col-span-12">
              <label className="text-[17x] font-medium text-grayColor block mb-[6px]">
                Jop Description *
              </label>

              <input
                placeholder="Descripe Your Job With a few Words"
                type="text"
                name="name"
                onChange={(e) => setJobDescription(e.target.value)}
                value={JobDescription}
                required
                className="w-full h-[55px] outline-none text-[16px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-transparent"
              ></input>
            </div>
            <div className=" col-span-12">
              <label className="text-[17x] font-medium text-grayColor block mb-[6px]">
                Jop Location *
              </label>

              <input
                placeholder="where is the Job Location"
                type="text"
                name="name"
                onChange={(e) => setJobLocation(e.target.value)}
                value={JobLocation}
                required
                className="w-full h-[55px] outline-none text-[16px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-transparent"
              ></input>
            </div>
            <div className="flex flex-col items-start justify-start  col-span-12">
              <label className="text-[17x] font-medium text-grayColor block mb-[6px]">
                Jop Type *
              </label>
              <input
                placeholder="FullTime, Remote"
                type="text"
                value={joptype}
                onChange={(e) => setjoptype(e.target.value)}
                name="name"
                required
                className="w-full h-[55px] outline-none text-[16px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-transparent"
              ></input>
            </div>
            <div className="flex flex-col items-start justify-start  col-span-6">
              <label className="text-[17x] font-medium text-grayColor block mb-[6px]">
                Min_Salary *
              </label>
              <input
                type="number"
                name="number"
                value={JobMin_Salary}
                onChange={(e) => setJobMin_Salary(e.target.value)}
                min="0"
                required
                className="w-full h-[55px] outline-none text-[16px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-transparent"
              ></input>
            </div>
            <div className="flex flex-col items-start justify-start  col-span-6">
              <label className="text-[17x] font-medium text-grayColor block mb-[6px]">
                Max_Salary *
              </label>
              <input
                type="number"
                name="number"
                value={JobMax_Salary}
                onChange={(e) => setJobMax_Salary(e.target.value)}
                min="0"
                required
                className="w-full h-[55px] outline-none text-[16px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-transparent"
              ></input>
            </div>

            <div className="mt-4 col-span-12">
              <button
                type="submit"
                className={`w-full leading-[50px] text-center block mx-[auto] my-[0] font-medium tracking-[-.5px] text-[#fff] bg-[#31795A] rounded-[10px] capitalize outline-none hover:bg-mainColor duration-200   
 
                    `}
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostJobAdminDashboard;
