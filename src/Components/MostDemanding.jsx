import React from "react";
// import icons
import { FaAngleRight } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { IoBagOutline } from "react-icons/io5";
import { MdAccountBalance } from "react-icons/md";
import { MdEditRoad } from "react-icons/md";
import { useNavigate } from "react-router";

function MostDemanding() {
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    e.preventDefault();
    navigate(`/Jops`);
  };
  return (
    <div className="Container py-10 mt-4 px-10 ">
      <div className="flex flex-col justify-between !items-start gap-2 py-1 md:flex-row md:!items-center ">
        <h2 className="font-semibold ">Most Demanding Categories.</h2>
        <a
          href="#"
          className="flexRow text-mainColor  [transition:.3s_all_ease-in-out] hover:translate-x-[3px] border-b-2 border-mainColor"
          onClick={(e) => handleNavigate(e)}
        >
          <span>Explore All fields</span>
          <FaAngleRight />
        </a>
      </div>

      <div className="grid grid-cols-2 flex-wrap lg:grid-cols-6 gap-3 py-9  justify-between">
        <div>
          <a
            href="#"
            className="flexCol justify-between border border-solid border-mainColor block
         rounded-[50px] py-[40px] px-[37px] h-[240px] cursor-pointer hover:-translate-y-[5px] duration-500 "
            onClick={(e) => handleNavigate(e)}
          >
            <div>
              <MdDesignServices className="h-[25px] flex items-center justify-center text-xl" />
            </div>
            <span className="font-semibold text-gray-800 capitalize">
              ui/ux design
            </span>
            <p className="  !text-[#00000080]  ">12k + Jops</p>
          </a>
        </div>

        <div>
          <a
            href="#"
            className="flexCol justify-between border border-solid border-emerald-100 block
         rounded-[50px] py-[40px] px-[37px] h-[240px] cursor-pointer hover:-translate-y-[5px] duration-500  hover:border-mainColor "
            onClick={(e) => handleNavigate(e)}
          >
            <div>
              <FaCode className="h-[25px] flex items-center justify-center text-2xl " />
            </div>
            <span className="font-semibold text-gray-800 capitalize">
              development
            </span>
            <p className="  !text-[#00000080]  ">7k + Jops</p>
          </a>
        </div>

        <div>
          <a
            href="#"
            className="flexCol justify-between border border-solid border-emerald-100 block
         rounded-[50px] py-[40px] px-[37px] h-[240px] cursor-pointer hover:-translate-y-[5px] duration-500  hover:border-mainColor "
            onClick={(e) => handleNavigate(e)}
          >
            <div>
              <BsTelephone className="h-[25px] flex items-center justify-center text-2xl" />
            </div>
            <span className="font-semibold text-gray-800  capitalize">
              telemarketing{" "}
            </span>
            <p className="  !text-[#00000080]  ">31k + Jops</p>
          </a>
        </div>

        <div>
          <a
            href="#"
            className="flexCol justify-between border border-solid border-emerald-100 block
         rounded-[50px] py-[40px] px-[37px] h-[240px] cursor-pointer hover:-translate-y-[5px] duration-500  hover:border-mainColor "
            onClick={(e) => handleNavigate(e)}
          >
            <div>
              <MdEditRoad className="h-[25px] flex items-center justify-center text-2xl" />
            </div>
            <span className="font-semibold text-gray-800 capitalize">
              editing
            </span>
            <p className="!text-[#00000080]">12k + Jops</p>
          </a>
        </div>
        <div>
          <a
            href="#"
            className="flexCol justify-between border border-solid border-emerald-100 block
         rounded-[50px] py-[40px] px-[37px] h-[240px] cursor-pointer hover:-translate-y-[5px] duration-500  hover:border-mainColor "
            onClick={(e) => handleNavigate(e)}
          >
            <div>
              <IoBagOutline className="h-[25px] flex items-center justify-center text-2xl" />
            </div>
            <span className="font-semibold text-gray-800 capitalize">
              marketing
            </span>
            <p className="  !text-[#00000080]  ">12k + Jops</p>
          </a>
        </div>
        <div>
          <a
            href="#"
            className="flexCol justify-between border border-solid border-emerald-100 block
         rounded-[50px] py-[40px] px-[37px] h-[240px] cursor-pointer hover:-translate-y-[5px] duration-500  hover:border-mainColor "
            onClick={(e) => handleNavigate(e)}
          >
            <div>
              <MdAccountBalance className="h-[25px] flex items-center justify-center text-2xl" />
            </div>
            <span className="font-semibold text-gray-800 capitalize">
              accounting
            </span>
            <p className="  !text-[#00000080]  ">3k + Jops</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MostDemanding;
