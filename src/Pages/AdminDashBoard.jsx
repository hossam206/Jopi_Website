import React, { useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineMail, MdClose } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { FaPencilAlt } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoBagOutline, IoSettingsOutline, IoLogOut } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";

import withLoader from "../Components/HigherOrderComp/HigherorederLoader";
import { SignOut } from "../firebase/mainfunction";
import { useNavigate } from "react-router";
import Dashboard from "../Components/AdminDashboard/Dashboard";
import Emails from "../Components/AdminDashboard/Emails";
import MyJobs from "../Components/AdminDashboard/MyJobs";
import Membershib from "../Components/AdminDashboard/Membershib";
import AccountSettings from "../Components/Dashboard/AccountSettings";
import PostJob from "../Components/AdminDashboard/PostJobAdminDashboard";
import PostJobAdminDashboard from "../Components/AdminDashboard/PostJobAdminDashboard";
import { Link } from "react-router-dom";
function AdminDashBoard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const AppState = useSelector((state) => state.userState.user);

  const rightsidearr = [
    { id: 1, icon: LuLayoutDashboard, name: "Dashboard" },
    { id: 2, icon: MdOutlineMail, name: "emails" },
    { id: 3, icon: CiViewList, name: "Posted Jobs" },
    { id: 4, icon: FaPencilAlt, name: "Submit Job" },
    { id: 5, icon: IoBagOutline, name: "Membership" },
    { id: 6, icon: IoSettingsOutline, name: "settings" },
  ];
  // handle show or hide left div
  const [LeftDiv, setLeftDiv] = useState(false);
  const handleLeftDiv = () => {
    setLeftDiv(!LeftDiv);
  };
  // handle what show in right div
  const [rightdiv, setrightdiv] = useState(1);
  const handlediv = (index) => {
    setrightdiv(rightdiv === index ? null : index);
  };
  // handle log out function
  const LogOut = () => {
    dispatch(SignOut());
    navigate("/");
  };

  // show div Log out
  const [Logoutdiv, showLogoutdiv] = useState(false);
  const handleshowLogoutdiv = () => {
    showLogoutdiv(!Logoutdiv);
  };

  return (
    <div className=" grid grid-cols-12 relative">
      {/* start log out div overlay */}
      {Logoutdiv && (
        <div
          className={`fixed top-0 left-0 z-50 w-full h-full text-center flex flex-col items-center justify-center bg-[#000000a9] duration-200
            ${Logoutdiv ? "fadeIn " : "fadeOut"}`}
        >
          <div className="w-[440px] h-[240px] bg-white rounded-[10px] px-20 py-10 text-center">
            <div>
              <h3 className="m-0 text-[30px] text-hoverColor">Log Out</h3>
              <IoLogOut className="mx-auto text-3xl text-red-600" />
            </div>
            <div className="flex flex-row items-center justify-between pt-6 gap-4">
              <a
                href="#"
                className="w-full leading-[40px] text-center  mx-[auto] my-[0] font-medium tracking-[-.5px] text-[#fff] rounded-[30px] px-6 py-1  bg-[#244034] hover:bg-mainColor duration-200"
                onClick={LogOut}
              >
                Yes
              </a>
              <a
                href="#"
                className="w-full leading-[40px] text-center  mx-[auto] my-[0] font-medium tracking-[-.5px] text-[#fff] rounded-[30px] px-6 py-1  bg-[#244034] hover:bg-red-500 duration-200"
                onClick={handleshowLogoutdiv}
              >
                NO
              </a>
            </div>
          </div>
        </div>
      )}

      <div
        className={`lg:col-span-2 pt-5 fixed lg:sticky left-0 top-0 h-screen bg-white z-30 transition-transition-transform duration-300
       px-[14px] flex flex-col items-center justify-start${
         LeftDiv
           ? "[box-shadow:15px_0_25px_rgba(35,_35,_35,_.09)] translate - x - 0 px-2"
           : " -translate-x-full"
       } lg:translate-x-0 lg:block `}
      >
        <div className="mt-2 flex flex-row items-center justify-between gap-16 ">
          <div>
            <Link to="/">
              <img src="/Images/footer/logo_01.webp" />
            </Link>
          </div>
          <div
            className="text-3xl cursor-pointer text-hoverColor hover:text-red-600 p-1 rounded-[10px] lg:hidden visible   "
            onClick={handleLeftDiv}
          >
            <MdClose />
          </div>
        </div>

        <div className="pt-7 ">
          <div className="relative mb-[10px] rounded-full border-2 border-solid border-neutral-200 p-1 after:absolute after:w-2 after:h-2 after:top-5 after:-right-1 after:rounded-full after:bg-mainColor w-[70px] mx-auto">
            <div className="relative w-[53px] h-[53px] mx-auto  rounded-full overflow-hidden">
              <img
                src={
                  AppState
                    ? AppState.photoURL
                    : "/Images/Dashboard/avatar_01.webp"
                }
              />
            </div>
          </div>
          <h3 className="text-hoverColor">Hossam Mohamed</h3>
        </div>
        <div className="mt-1 w-full ">
          <ul className="flex flex-col items-start  justify-start gap-2 capitalize">
            {rightsidearr.map((li) => {
              return (
                <li
                  className={`flex flex-row items-center gap-2 text-[16px] font-semibold  text-[#244034] pl-[10px] pr-[24px]  py-3 rounded-[10px]  transition-transform duration-300   ${
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
            <li
              className={`flex flex-row items-center gap-2 text-[16px] font-semibold  text-[#244034] pl-[10px] pr-[24px]  py-3 rounded-[10px]  transition-transform duration-300 `}
              onClick={handleshowLogoutdiv}
            >
              <IoLogOut className="text-[18px] " />
              <a href="#">Log Out</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:col-span-10 col-span-12 bg-[#f0f5f3] px-[10px]">
        <div className="sticky top-0 left-0 flex flex-row items-center justify-between w-full h-[100px] bg-[#f0f5f3] z-20">
          <div
            className="text-3xl cursor-pointer hover:text-mainColor "
            onClick={handleLeftDiv}
          >
            <FiMenu className="lg:hidden" />
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className=" ml-3 cursor-pointer relative group">
              <div
                className="text-4xl hover:text-mainColor duration-200"
                onClick={LogOut}
              >
                <IoLogOut />
              </div>
              <div
                className=" absolute top-full -left-[24px] text-[13px] py-1 px-2 bg-white rounded-[5px]
               w-[70px] font-normal invisible group-hover:visible transition-visible duration-200"
              >
                Log Out
              </div>
            </div>
          </div>
        </div>
        <div className="z-10">
          {rightdiv === 1 && <Dashboard />}
          {rightdiv === 2 && <Emails />}
          {rightdiv === 3 && <MyJobs />}
          {rightdiv === 4 && <PostJobAdminDashboard />}
          {rightdiv === 5 && <Membershib />}
          {rightdiv === 6 && <AccountSettings />}
        </div>
      </div>
    </div>
  );
}
export default withLoader(AdminDashBoard);
