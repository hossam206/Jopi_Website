import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function FixedNavbar({ MainTitle, SubTitle, PageName }) {
  return (
    <div className="bg-[#E2F9EE] relative lg:pb-40 pb-20">
      <Navbar />
      <div className="h-fit py-10  text-center">
        <h2 className="text-grayColor lg:text-[64px] capitalize">
          {MainTitle}
        </h2>
        <p className="lg:text-lg text-xl text-gray-500 my-2 capitalize ">
          {SubTitle}
        </p>
      </div>
      {PageName && (
        <div className="flex flex-row items-center flex-wrap text-center justify-center text-lg p-0 m-0 text-grayColor ">
          <Link
            to="/"
            className="hover:underline  hover:translate-x-1 duration-300"
          >
            Home{" "}
          </Link>
          <MdKeyboardArrowRight />
          <Link to="/">{PageName}</Link>
        </div>
      )}
      <div className="absolute bottom-0 left-0">
        <img src="/Images/Navbar/shape_03.746a3d0c.svg" loading="lazy" />
      </div>
    </div>
  );
}
