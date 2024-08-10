import React, { useState } from "react";
// import icons
import { LuLayoutDashboard } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { ImProfile } from "react-icons/im";
import { IoSaveOutline, IoNotificationsCircleSharp } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { HiMiniBellAlert } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";

// import components
import Dashboard from "../Components/Dashboard/Dashboard";
import MyProfile from "../Components/Dashboard/MyProfile";
import Resume from "../Components/Dashboard/Resume";
import AppliedJops from "../Components/Dashboard/AppliedJops";
import AccountSettings from "../Components/Dashboard/AccountSettings";
import withLoader from "../Components/HigherOrderComp/HigherorederLoader";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function UserDashboard() {
  const appliedJobs = useSelector((state) => state.jobscards.AppliedJobs);
  const rightsidearr = [
    { id: 1, icon: LuLayoutDashboard, name: "Dashboard" },
    { id: 2, icon: CgProfile, name: "My Profile" },
    { id: 3, icon: ImProfile, name: "Resume" },
    { id: 4, icon: IoSaveOutline, name: "Applied jops" },

    { id: 5, icon: IoIosSettings, name: "settings" },
  ];
  // handle what show in right div
  const [rightdiv, setrightdiv] = useState(1);
  const handlediv = (index) => {
    setrightdiv(rightdiv === index ? null : index);
  };
  const [LeftDiv, setLeftDiv] = useState(false);
  const handleLeftDiv = () => {
    setLeftDiv(!LeftDiv);
  };
  const [Notification, setNotification] = useState(false);
  const HandleNotification = () => {
    setNotification(!Notification);
  };
  return (
    <div className="grid grid-cols-12 relative">
      <div
        className={`lg:col-span-2 pt-5 fixed lg:sticky left-0 top-0 h-screen bg-white z-30 transition-transition-transform duration-300
       px-[14px] flex flex-col items-center justify-start${
         LeftDiv
           ? "[box-shadow:15px_0_25px_rgba(35,_35,_35,_.09)] translate - x - 0 px-2"
           : " -translate-x-full"
       } lg:translate-x-0 lg:block `}
      >
        <div className="flex flex-col items-center gap-1 ">
          <div className="mt-2 flex flex-row items-center justify-between gap-14 ">
            <div>
              <Link to="/">
                <img src="/Images/footer/logo_01.webp" />
              </Link>
            </div>
            <div
              className="text-3xl cursor-pointer text-hoverColor  hover:text-red-600 p-1 rounded-[10px] lg:hidden visible   "
              onClick={handleLeftDiv}
            >
              <MdClose />
            </div>
          </div>
          <div className="pt-7">
            <div className="relative w-[73px] h-[73px] m-auto mb-[15px]  ">
              <img src="/Images/Dashboard/avatar_01.webp" />
            </div>
            <h3 className="text-hoverColor">HOssam Mohamed</h3>
          </div>
          <div className="mt-1 w-full ">
            <ul className="flex flex-col items-start  justify-start gap-5 capitalize">
              {rightsidearr.map((li) => {
                return (
                  <li
                    className={`flex flex-row items-center gap-2 text-[16px] font-semibold  text-[#244034] pl-[10px] pr-[33px]  py-3 rounded-[15px]  transition-transform duration-300   ${
                      rightdiv === li.id
                        ? "bg-[#3f634d;] text-white   "
                        : "bg-transparent text-[#244034]"
                    }`}
                    key={li.id}
                    onClick={handleLeftDiv}
                  >
                    <li.icon className="text-[18px] " />
                    <a href="#" onClick={() => handlediv(li.id)}>
                      {li.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:col-span-10 col-span-12 bg-[#f0f5f3] px-[10px]">
        <div className="fixed top-0 left-0 flex flex-row items-center justify-between w-full h-[100px] bg-[#f0f5f3] z-20 px-4">
          <div
            className=" text-2xl  hover:text-mainColor cursor-pointer lg:invisible visible"
            onClick={handleLeftDiv}
          >
            <FiMenu />
          </div>
          <div className=" flex flex-row items-center gap-6">
            <div className="text-[#244034] text-2xl relative right-5 after:content-[''] after:absolute after:-top-[9px] after:-right-[4px] after:w-2 after:h-2 after:bg-[#FF2730] after:rounded-full cursor-pointer ">
              <HiMiniBellAlert
                className="hover:text-mainColor"
                onClick={HandleNotification}
              />
              {Notification && (
                <div className="absolute m-0 top-[50px] right-0  w-[227px] lg:w-[275px] border-[none] rounded-[15px] [box-shadow:0_50px_100px_rgba(0,_0,_0,_.12)] pt-[25px] pr-[18px] pb-[30px] pl-[22px] bg-white">
                  <h3 className="text-[18px]">Notification</h3>
                  <div className="flex flex-col items-start justify-start gap-4 ">
                    <div className="flex flex-row items-start justify-start w-full gap-2 relative after:content-[''] after:absolute after:top-[12px] after:right-[0px] after:w-2 after:h-2 after:bg-[#FF2730] after:rounded-full">
                      <div className="w-8 h-8 bg-[#D6E6DD] rounded-full text-xl flex items-center justify-center">
                        <IoNotificationsCircleSharp />
                      </div>
                      <div>
                        <h3 className="text-[15px]  tracking-[-.2px] text-[#000000d9] font-semibold overflow-hidden  !m-0 ">
                          You have 3 new ...
                        </h3>
                        <p className="!m-0 text-[14px] text-[rgba(0,_0,_0,_.5)] font-medium">
                          6 hours ago
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start w-full gap-2 relative after:content-[''] after:absolute after:top-[12px] after:right-[0px] after:w-2 after:h-2 after:bg-[#D8D8D8] after:rounded-full">
                      <div className="w-8 h-8 bg-[#D6E6DD] rounded-full text-xl flex items-center justify-center">
                        <IoNotificationsCircleSharp />
                      </div>
                      <div>
                        <h3 className="text-[15px]  tracking-[-.2px] text-[#000000d9] font-semibold overflow-hidden  !m-0 ">
                          You have 3 new ...
                        </h3>
                        <p className="!m-0 text-[14px] text-[rgba(0,_0,_0,_.5)] font-medium">
                          6 hours ago
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start w-full gap-2 relative after:content-[''] after:absolute after:top-[12px] after:right-[0px] after:w-2 after:h-2 after:bg-[#20e97b] after:rounded-full">
                      <div className="w-8 h-8 bg-[#D6E6DD] rounded-full text-xl flex items-center justify-center">
                        <IoNotificationsCircleSharp />
                      </div>
                      <div>
                        <h3 className="text-[15px]  tracking-[-.2px] text-[#000000d9] font-semibold overflow-hidden  !m-0 ">
                          You have 3 new ...
                        </h3>
                        <p className="!m-0 text-[14px] text-[rgba(0,_0,_0,_.5)] font-medium">
                          6 hours ago
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="z-10 py-10 ">
          {rightdiv === 1 && <Dashboard />}
          {rightdiv === 2 && <MyProfile />}
          {rightdiv === 3 && <Resume />}
          {rightdiv === 4 && <AppliedJops />}

          {rightdiv === 5 && <AccountSettings />}
        </div>
      </div>
    </div>
  );
}

export default withLoader(UserDashboard);
