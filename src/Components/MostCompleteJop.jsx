import React from "react";
import { useNavigate } from "react-router";

export default function MostCompleteJop() {
  const navigate = useNavigate();
  const handleNavigate = (e, path) => {
    e.preventDefault();
    navigate(`/${path}`);
  };
  return (
    <div className="Container flex flex-col md:flex-row justify-between items-center py-[50px] px-[10px]">
      <div>
        <h2 className="!text-[30px]">Most complete job portal.</h2>
        <p className="smallp text-center">
          Signup and start find your job or talents.
        </p>
      </div>
      <div className="flex flex-row gap-4">
        <a
          href="#"
          className="btntransparent !rounded-md !border !border-solid !border-black hover:bg-[#244034] hover:text-white"
          onClick={(e) => handleNavigate(e, "Jops")}
        >
          Looking for a job ?
        </a>
        <a
          href="#"
          className="btn !rounded-md  hover:bg-[#244034] "
          onClick={(e) => handleNavigate(e, "User_Dashboard")}
        >
          Post a job !
        </a>
      </div>
    </div>
  );
}
