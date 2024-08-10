import React, { useEffect, useState } from "react";
// import icons
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { FaAngleDown, FaCheck } from "react-icons/fa6";
import { TiArrowSortedUp } from "react-icons/ti";
import { FaThList } from "react-icons/fa";
import { FaPenAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import { BsTelephonePlus } from "react-icons/bs";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdEditRoad } from "react-icons/md";
import { MdAccountBalance } from "react-icons/md";
import Login from "./LogIn/Login";
import AddJop from "./AddJop/PostJop";

import { useDispatch, useSelector } from "react-redux";
import {
  ToggleShowLogInForm,
  ToggleShowPostJobForm,
} from "../Rtk/actions/Actions";
import { SignOut } from "../firebase/mainfunction";
import Loader from "./Loader/Loader";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const AppState = useSelector((state) => state.userState.user);
  const showjopform = useSelector(
    (state) => state.visibilityReducer.isJobFormVisible
  );
  const showLoginform = useSelector(
    (state) => state.visibilityReducer.isLoginFormVisible
  );
  // make navbar fixed
  const [isSticky, setisSticky] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 60) {
      setisSticky(true);
    } else {
      setisSticky(false);
    }
  };
  // show side div
  const [SideDive, showSideDiv] = useState(false);
  const handlesideDive = () => {
    showSideDiv(!SideDive);
  };
  // show dropdown menu
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = (index) => {
    setDropdown(dropdown === index ? null : index);
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
  const handleShowJopForm = () => {
    handlesideDive();
    if (!AppState) {
      dispatch(ToggleShowPostJobForm(false));
      dispatch(ToggleShowLogInForm(true));

      SuccessAdded("sorry, You Should Log In First");
    } else {
      dispatch(ToggleShowLogInForm(false));
      SuccessAdded(" Loging in successful");
      dispatch(ToggleShowPostJobForm(true));
    }
  };
  const handleLogInForm = (status) => {
    dispatch(ToggleShowLogInForm(status));
  };

  // show Login or Log out
  const [LoginBtn, setLogInBtn] = useState(false);
  // handle sign out
  const [Loadere, seTLoader] = useState(false);
  const handleGoogleSignOut = () => {
    dispatch(SignOut());
    seTLoader(true);
    setTimeout(() => {
      handleLogInForm(false);
      seTLoader(false);
      SuccessAdded("log out success");
    }, 1200);
  };
  // handle Admin Dashboard
  const AdminDashboard = () => {
    if (!AppState) {
      handleShowJopForm();
    } else {
      navigate("/AdminDashboard");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (AppState) {
      setLogInBtn(false);
    } else {
      setLogInBtn(true);
    }
  }, [AppState]);

  return (
    <div
      className={`  px-3  z-30  transition-all duration-300  
        ${
          isSticky
            ? "fixed w-full bg-white [box-shadow:15px_0_12px_rgba(35,_35,_35,_.09)]"
            : "bg-red"
        }
         ${isSticky ? "animate-fadeIn py-3" : "animate-fadeOut py-7"}`}
    >
      <div className=" hidden flex-row items-center justify-between  md:hidden lg:flex ">
        <div className="flex flex-row  items-center gap-16">
          <Link to="/">
            <img
              src="/Images/Navbar/logo_04.webp"
              alt="Navbatlogo"
              loading="lazy"
            />
          </Link>

          <div className="bg-[#3A5349] leading-[37px] px-[17px] py-[0] rounded-[25px] ml-[0] mr-[35px] text-[#d2f34c] relative flex flex-row items-center justify-center gap-2 cursor-pointer group ">
            <FaThList />
            Category
            <ul
              className="grid grid-cols-12 bg-white absolute text-[1em] rounded-[20px] top-full right-0 left-0 
                min-w-[480px] px-2 py-5   
              border-[none] translate-y-[5px]  [box-shadow:0_10px_10px_rgba(0,_0,_0,_.12)] 
              invisible group-hover:visible  z-40 "
            >
              <TiArrowSortedUp className="absolute top-[-14px] left-[14px]  text-2xl text-white" />

              <li className="col-span-6">
                <ul className="grid grid-cols-12   flex-col justify-between items-center ">
                  <li className="col-span-12 flex flex-row  items-center  gap-3  hover:bg-[#EDFAF3]  mt-[8px] mx-[10px] mb-[0] pr-[24px] pl-[16px] py-2 rounded-[10px]  ">
                    <div className="w-[40px] h-[40px] rounded-full flex flex-row items-center justify-center border border-solid border-[#dcdcdc]   ">
                      <FaPenAlt className="text-neutral-800 " />
                    </div>

                    <div className="flex flex-col items-start    ">
                      <Link to="/Jops" className="text-neutral-800 ">
                        UI/UX Design
                      </Link>
                      <p className="text-[rgba(9,_50,_28,_.5)] text-[16px] !leading-[1.2em]">
                        12k+ Jobs
                      </p>
                    </div>
                  </li>
                  <li className=" col-span-12 flex flex-row  items-center  gap-3  hover:bg-[#EDFAF3]  mt-[8px] mx-[10px] mb-[0] pr-[24px] pl-[16px] py-2 rounded-[10px]    ">
                    <div className="w-[40px] h-[40px] rounded-full flex flex-row items-center justify-center border border-solid border-[#dcdcdc]  ">
                      <FaCode className="text-neutral-800 " />
                    </div>

                    <div className="flex flex-col items-start ">
                      <Link to="/Jops" className="text-neutral-800 ">
                        Development
                      </Link>
                      <p className="text-[rgba(9,_50,_28,_.5)] text-[16px] !leading-[1.2em]">
                        7k+ Jobs
                      </p>
                    </div>
                  </li>
                  <li className="col-span-12 flex flex-row  items-center  gap-3  hover:bg-[#EDFAF3]  mt-[8px] mx-[10px] mb-[0] pr-[24px] pl-[16px] py-2 rounded-[10px]    ">
                    <div className="w-[40px] h-[40px] rounded-full flex flex-row items-center justify-center border border-solid border-[#dcdcdc]  ">
                      <BsTelephonePlus className="text-neutral-800 " />
                    </div>

                    <div className="flex flex-col items-start ">
                      <Link to="/Jops" className="text-neutral-800 ">
                        Telemarketing
                      </Link>

                      <p className="text-[rgba(9,_50,_28,_.5)] text-[16px] !leading-[1.2em]">
                        31k+ Jobs
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="col-span-6">
                <ul className="grid grid-cols-12   flex-col justify-between items-center">
                  <li className="col-span-12 flex flex-row  items-center  gap-3  hover:bg-[#EDFAF3]   mt-[8px] mx-[10px] mb-[0] pr-[24px] pl-[16px] py-2 rounded-[10px]    ">
                    <div className="w-[40px] h-[40px] rounded-full flex flex-row items-center justify-center border border-solid border-[#dcdcdc]  ">
                      <IoBagHandleOutline className="text-neutral-800 " />
                    </div>

                    <div className="flex flex-col items-start ">
                      <Link to="/Jops" className="text-neutral-800 ">
                        Marketing
                      </Link>
                      <p className="text-[rgba(9,_50,_28,_.5)] text-[16px] !leading-[1.2em]">
                        23k+ Jobs
                      </p>
                    </div>
                  </li>
                  <li className="col-span-12 flex flex-row  items-center  gap-3  hover:bg-[#EDFAF3]  mt-[8px] mx-[10px] mb-[0] pr-[24px] pl-[16px] py-2 rounded-[10px]   ">
                    <div className="w-[40px] h-[40px] rounded-full flex flex-row items-center justify-center border border-solid border-[#dcdcdc] ">
                      <MdEditRoad className="text-neutral-800 " />
                    </div>

                    <div className="flex flex-col items-start  ">
                      <Link to="/Jops" className="text-neutral-800 ">
                        Editing
                      </Link>
                      <p className="text-[rgba(9,_50,_28,_.5)] text-[16px] !leading-[1.2em]">
                        12k+ Jobs
                      </p>
                    </div>
                  </li>
                  <li className="col-span-12 flex flex-row  items-center  gap-3  hover:bg-[#EDFAF3]  mt-[8px] mx-[10px] mb-[0] pr-[24px] pl-[16px] py-2 rounded-[10px]    ">
                    <div className="w-[40px] h-[40px] rounded-full flex flex-row items-center justify-center border border-solid border-[#dcdcdc]  ">
                      <MdAccountBalance className="text-neutral-800 " />
                    </div>

                    <div className="flex flex-col items-start ">
                      <Link to="/Jops" className="text-neutral-800 ">
                        Accounting
                      </Link>
                      <p className="text-[rgba(9,_50,_28,_.5)] text-[16px] !leading-[1.2em]">
                        15k+ Jobs
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ul className="flex flex-row items-center justify-between ">
            <li className="py-3 cursor-pointer hover:text-mainColor">
              <Link to="/" className=" font-medium text-[17px] my-0 mr-5 ">
                Home
              </Link>
            </li>
            <li className="relative group cursor-pointer py-3  ">
              <a className="font-medium text-[17px] my-0 mx-5 hover:text-mainColor">
                jop
              </a>

              <ul
                className="bg-white absolute text-[1em] rounded-[10px] block right-auto left-[0] px-[5px] py-[10px] 
              border-[none] top-full translate-y-[5px] min-w-[180px] [box-shadow:0_10px_10px_rgba(0,_0,_0,_.12)] m-0 origin-[0_0] [transition:all_.2s_ease-in-out] invisible  group-hover:visible "
              >
                <TiArrowSortedUp className="absolute top-[-14px] left-[14px]  text-2xl text-white" />
                <li className="py-2 cursor-pointer rounded-lg px-[20px] hover:bg-blue-100 transition all ease-in-out">
                  <Link
                    to="/Jops"
                    className="  cursor-pointer    hover:bg-blue-100 transition all ease-in-out block w-full"
                  >
                    Disecover jops
                  </Link>
                </li>
                <li className="py-2 cursor-pointer rounded-lg   px-[20px] hover:bg-blue-100 transition all ease-in-out">
                  <Link
                    to="/JobDetails"
                    className="  cursor-pointer    hover:bg-blue-100 transition all ease-in-out block w-full"
                  >
                    Jop Details
                  </Link>
                </li>
                <li className="py-2 cursor-pointer rounded-lg   px-[20px] hover:bg-blue-100 transition all ease-in-out">
                  <Link
                    to="/SavedJops"
                    className="  cursor-pointer    hover:bg-blue-100 transition all ease-in-out block w-full"
                  >
                    Saved jops
                  </Link>
                </li>
              </ul>
            </li>
            <li className="relative group cursor-pointer py-3  ">
              <a className="font-medium text-[17px] my-0 mx-5 hover:text-mainColor">
                Explore
              </a>
              <ul
                className="bg-white absolute text-[1em]   rounded-[10px] block right-auto left-[0] px-[5px] py-[10px] 
              border-[none] top-full   translate-y-[5px] min-w-[180px] [box-shadow:0_10px_10px_rgba(0,_0,_0,_.12)] m-0 origin-[0_0] [transition:all_.2s_ease-in-out]  invisible
              group-hover:visible "
              >
                <TiArrowSortedUp className="absolute top-[-14px] left-[14px]  text-2xl  text-white" />
                <li className="py-2 cursor-pointer rounded-lg  px-[20px] hover:bg-blue-100 transition all ease-in-out">
                  <Link
                    to="/About"
                    className="  cursor-pointer    hover:bg-blue-100 transition all ease-in-out block w-full"
                  >
                    About us
                  </Link>
                </li>
                <li className="py-2 cursor-pointer rounded-lg   px-[20px] hover:bg-blue-100 transition all ease-in-out">
                  <Link
                    to="/Pricing"
                    className="  cursor-pointer    hover:bg-blue-100 transition all ease-in-out block w-full"
                  >
                    pricing
                  </Link>
                </li>
                <li className="py-2 cursor-pointer rounded-lg   px-[20px] hover:bg-blue-100 transition all ease-in-out">
                  <Link
                    to="/faq"
                    className="  cursor-pointer    hover:bg-blue-100 transition all ease-in-out block w-full"
                  >
                    FAQ
                  </Link>
                </li>
                <li className="py-2 cursor-pointer rounded-lg   px-[20px] hover:bg-blue-100 transition all ease-in-out">
                  <Link
                    to="/Register"
                    className="  cursor-pointer    hover:bg-blue-100 transition all ease-in-out block w-full"
                  >
                    register
                  </Link>
                </li>
              </ul>
            </li>
            <li className="relative py-3">
              <Link
                to="/Blog"
                className="font-medium text-[17px] my-0 mx-5 cursor-pointer hover:text-mainColor"
              >
                Blog
              </Link>
            </li>
            <li className="relative py-3">
              <Link
                to="/Contact"
                className="font-medium text-[17px] my-0 mx-5 cursor-pointer hover:text-mainColor"
              >
                Contact
              </Link>
            </li>
            <li
              className="relative group cursor-pointer py-3 
            after:content-['New'] after:absolute after:top-[-3px] after:right-[-10px] after:bg-[#ff0000] after:text-[12px] after:text-white after:px-2 after:rounded-sm
            
            "
            >
              <a className="font-medium text-[17px] my-0 mx-4 hover:text-mainColor">
                Dashboard
              </a>

              <ul
                className="bg-white absolute text-[1em]   rounded-[10px]  left-[0] px-[5px] py-[10px] 
              border-[none] top-full   translate-y-[5px] min-w-[180px] [box-shadow:0_10px_10px_rgba(0,_0,_0,_.12)] m-0 origin-[0_0] [transition:all_.2s_ease-in-out] z-30 invisible group-hover:visible"
              >
                <TiArrowSortedUp className="absolute top-[-14px] left-[14px]  text-2xl text-white" />
                <li className="py-2 cursor-pointer rounded-lg   px-[20px] hover:bg-blue-100 transition all ease-in-out">
                  <Link
                    to="/User_Dashboard"
                    className="  cursor-pointer    hover:bg-blue-100 transition all ease-in-out block w-full"
                  >
                    User Dashboard
                  </Link>
                </li>
                <li className="py-2 cursor-pointer rounded-lg  px-[10px] hover:bg-blue-100 transition all ease-in-out">
                  <Link
                    className="  cursor-pointer    hover:bg-blue-100 transition all ease-in-out block w-full"
                    onClick={AdminDashboard}
                  >
                    Admin Dashboard
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
  
        <div className="flexRow">
          {!LoginBtn ? (
            <button
              className="btntransparent mr-3"
              onClick={handleGoogleSignOut}
            >
              Log out
            </button>
          ) : (
            <button
              className="btntransparent mr-3"
              onClick={() => handleLogInForm(true)}
            >
              Login
            </button>
          )}
          <button className="btn " onClick={handleShowJopForm}>
            Post a Jop
          </button>
        </div>
      </div>
      {/* mobile navbar */}
      <div className="flex flex-row items-center justify-between lg:hidden md:flex ">
        <div>
          <Link to="/">
            <img
              src="/Images/Navbar/logo_04.webp"
              alt="Navbatlogo"
              loading="lazy"
            />
          </Link>
        </div>

        <div className="flex flex-row justify-center items-center ">
          {!LoginBtn ? (
            <button
              className="mr-3 hover:text-red-600 font-medium outline-none border-none"
              onClick={handleGoogleSignOut}
            >
              Log out
            </button>
          ) : (
            <button
              className=" mr-3 hover:text-mainColor font-medium outline-none border-none"
              onClick={() => handleLogInForm(true)}
            >
              Login
            </button>
          )}
          <IoIosMenu
            className="text-4xl cursor-pointer hover:text-mainColor"
            onClick={handlesideDive}
          />
        </div>

        <div
          className={`fixed top-[0] bg-[#fff] left-[0] h-screen   overflow-y-auto clear-both w-[320px] max-w-[calc(100vw - 60px)]  !block pt-[32px] px-[12px]  z-40 pb-[20px] [transition:all_.3s_ease-in-out]${
            SideDive
              ? " [box-shadow:15px_0_25px_rgba(35,_35,_35,_.09)] translate - x - [0];"
              : "  -translate-x-full"
          }`}
        >
          <div className="flex flex-row justify-between items-center">
            <div className="w-[89px]">
              <img
                src="/Images/Navbar/logo_04.webp"
                alt="Navbatlogo"
                loading="lazy"
              />
            </div>
            <div className="w-9  h-9 flex items-center justify-center cursor-pointer transition all ease-in-out hover:text-red-600  ">
              <IoCloseOutline className="text-3xl" onClick={handlesideDive} />
            </div>
          </div>

          <ul className="flex flex-col items-start justify-start py-12  ">
            <div className="flex flex-row items-center px-4 gap-4">
              <div className="w-12 h-12  rounded-full relative mb-[10px] border-2 border-solid border-neutral-200 p-1 after:absolute after:w-2 after:h-2 after:top-2 after:-right-1 after:rounded-full after:bg-mainColor  mx-auto">
                <img
                  className="rounded-full"
                  src={AppState ? AppState.photoURL : "/Images/Navbar/user.svg"}
                />
              </div>
              <div className="text-center">
                <p className="text-[14px] m-0 p-0">
                  Hi, &nbsp;
                  <span className="text-hoverColor ">
                    {AppState ? AppState.displayName : "user"}
                  </span>
                </p>
              </div>
            </div>
            <li className="w-full">
              <Link
                to="/"
                className=" text-[1em] leading-[normal] text-[#000] px-[0] py-[20px] mx-[18px] my-[0] relative flex flex-row justify-between items-center font-semibold hover:text-mainColor cursor-pointer"
              >
                <span>Home</span>
              </Link>
            </li>
            <li className="w-full relative overflow-hidden z-20">
              <a className=" text-[1em] leading-[normal] text-[#000] px-[0] py-[20px] mx-[18px] my-[0] relative   flex flex-row justify-between items-center font-semibold hover:text-mainColor cursor-pointer">
                <span>jop</span>
                <FaAngleDown
                  className="cursor-pointer hover:text-mainColor "
                  onClick={() => toggleDropdown(1)}
                />
              </a>
              {dropdown === 1 && (
                <ul className="static w-full bg-blue-50 py-[8px] text-grayColor rounded-sm  z-10 ">
                  <li>
                    <Link
                      to="/Jops"
                      className="py-2 cursor-pointer  px-[20px] hover:bg-blue-100 transition all ease-in-out block w-full"
                    >
                      Disecover jops
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/JobDetails"
                      className="py-2 cursor-pointer  px-[20px] hover:bg-blue-100 transition all ease-in-out block w-full"
                    >
                      Jop Details
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/SavedJops"
                      className="py-2 cursor-pointer  px-[20px] hover:bg-blue-100 transition all ease-in-out block w-full"
                    >
                      Saved jops
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="w-full">
              <a className=" text-[1em] leading-[normal] text-[#000] px-[0] py-[20px] mx-[18px] my-[0] relative   flex flex-row justify-between items-center font-semibold hover:text-mainColor cursor-pointer">
                <span>Explore</span>
                <FaAngleDown
                  className="cursor-pointer hover:text-mainColor"
                  onClick={() => toggleDropdown(2)}
                />
              </a>
              {dropdown === 2 && (
                <ul className="static w-full bg-blue-50 py-[8px]  text-grayColor rounded-sm  z-10 h-[0px]group:hover:h-full">
                  <li>
                    <Link
                      to="/About"
                      className="py-2 cursor-pointer  px-[20px] hover:bg-blue-100 transition all ease-in-out block w-full"
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Pricing"
                      className="py-2 cursor-pointer  px-[20px] hover:bg-blue-100 transition all ease-in-out block w-full"
                    >
                      pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/faq"
                      className="py-2 cursor-pointer  px-[20px] hover:bg-blue-100 transition all ease-in-out block w-full"
                    >
                      Faq
                    </Link>
                  </li>
                  <li x>
                    <Link
                      to="/Register"
                      className="py-2 cursor-pointer  px-[20px] hover:bg-blue-100 transition all ease-in-out block w-full"
                    >
                      register
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="w-full">
              <div className=" text-[1em] leading-[normal] text-[#000] px-[0] py-[20px] mx-[18px] my-[0] relative [transition:all_.2s_ease-in-out_0s] flex flex-row justify-between items-center font-semibold hover:text-mainColor cursor-pointer">
                <span>
                  <Link to="/Blog">Blog</Link>
                </span>
              </div>
            </li>
            <li className="w-full">
              <div className=" text-[1em] leading-[normal] text-[#000] px-[0] py-[20px] mx-[18px] my-[0] relative   flex flex-row justify-between items-center font-semibold hover:text-mainColor cursor-pointer">
                <span>
                  <Link to="/Contact">Contact</Link>
                </span>
              </div>
            </li>

            <li className="w-full">
              <a className=" text-[1em] leading-[normal] text-[#000] px-[0] py-[20px] mx-[18px] my-[0] relative [transition:all_.2s_ease-in-out_0s]  flex flex-row justify-between items-center  font-semibold hover:text-mainColor cursor-pointer">
                <span>Dashboard</span>
                <FaAngleDown
                  className="cursor-pointer hover:text-mainColor"
                  onClick={() => toggleDropdown(3)}
                />
              </a>
              {dropdown === 3 && (
                <ul className="static w-full bg-blue-50 py-[8px]  text-grayColor rounded-sm    h-[0px]group:hover:h-full z-10">
                  <li>
                    <Link
                      to="/User_Dashboard"
                      className="py-2 cursor-pointer  px-[20px] hover:bg-blue-100 transition all ease-in-out block w-full"
                    >
                      User Dashboard
                    </Link>
                  </li>
                  <li
                    className="py-2 cursor-pointer px-[20px] hover:bg-blue-100 transition all ease-in-out"
                    onClick={AdminDashboard}
                  >
                    <Link >Admin Dashboard</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>

          <button className="btn w-full" onClick={handleShowJopForm}>
            Post a job
          </button>
        </div>
      </div>
      {/* start notificatoion */}
      <div
        className={`fixed top-24 right-0 lg:px-5 px-2 bg-hoverColor h-10 flex flex-row items-center gap-2 rounded-tl-[10px] rounded-bl-[10px] z-50 w-fit transition-transform duration-300 ${
          suuceddAdded ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-7 h-7 bg-slate-200 rounded-full leading-7 flex flex-col items-center justify-center">
          <FaCheck />
        </div>
        <p className="capitalize text-white">{Text}</p>
      </div>
      {showLoginform && <Login />}
      {showjopform && <AddJop />}
      {Loadere && (
        <div className="fixed top-0 left-0 z-50 w-full h-full text-center flex flex-col items-center justify-center bg-[#000000b0]">
          <button
            type="button"
            className="pointer-events-none inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 disabled:opacity-70 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            disabled
          >
            <div
              className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            ></div>
          </button>

          <span className="text-white"> Loading...</span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
