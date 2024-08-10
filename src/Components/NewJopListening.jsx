import React, { useEffect, useState } from "react";
import { categoryarr } from "../assets/asset";
import { FaLocationArrow } from "react-icons/fa6";
import JopCard from "./JopCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";

export default function NewJopListening() {
  const [jopName, setJopName] = useState("");
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const handleApplybutton = () => {
    setIsButtonVisible(false);
  };
  const keyword = jopName;
  useEffect(() => {
    // Fetch the data from the API
    fetch("https://remoteok.com/api")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
        filterJobs(data, keyword);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [keyword, jobs]);
  // filter Jops
  const filterJobs = (jobs, keyword) => {
    const filtered = jobs.filter(
      (job) =>
        job.position &&
        job.position.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredJobs(filtered);
  };
  // navigate to All Jops
  const navigate = useNavigate();
  const handleNavigate = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <div className="bg-[#eff6f35d] py-16 mt-24">
      <div className="Container">
        <div className="flex flex-col items-center justify-between md:flex-col lg:flex-row  md:items-center">
          <h2>New job listing</h2>
          <ul
            className="flex flex-row flex-wrap justify-center  lg:px-6  px-2 lg:py-6 py-5    gap-5 items-center  mt-4
     md:gap-5  rounded-full bg-white"
          >
            {categoryarr.slice(0, 5).map((cat, index) => {
              return (
                <li
                  key={index}
                  className={`lg:text-[17px] text-[15px] font-medium text-black pb-[3px] relative cursor-pointer [transition:all_.1s_ease-in-out_0s] ${
                    jopName == cat.value
                      ? "border-b border-solid border-mainColor text-mainColor"
                      : "text-black"
                  }`}
                  onClick={() => setJopName(cat.value)}
                >
                  {cat.key}
                </li>
              );
            })}
          </ul>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between md:flex-row py-16 gap-10 ">
          {filteredJobs.length > 0
            ? filteredJobs
                .slice(1, 6)
                .map((Jop) => (
                  <JopCard
                    key={Jop.id}
                    jopcard={Jop}
                    JopId={Jop.id}
                    companylogo={Jop.company_logo}
                    CompanyName={Jop.company}
                    Joptitle={Jop.position.split(" ").slice(0, 6).join(" ")}
                    joptype={Jop.slug.split("-").slice(1, 4).join("-")}
                    jopDate={Jop.date}
                    jopLocation={
                      Jop.location.split(",").slice(1, 2).join(",")
                        ? Jop.location
                        : "Remotly"
                    }
                    isButtonVisible={handleApplybutton}
                  />
                ))
            : [1, 2, 3, 4, 5].map((arr, index) => {
                return (
                  <div className="" key={index}>
                    <JopCard
                      companylogo={<Skeleton />}
                      CompanyName={<Skeleton />}
                      Joptitle={<Skeleton />}
                      joptype={<Skeleton />}
                      jopDate={<Skeleton />}
                      jopLocation={<Skeleton />}
                    />
                  </div>
                );
              })}
          {filteredJobs.length > 0 && (
            <div
              className=" bg-mainColor flex relative
          
          py-[35px] px-[35px] pb-[30px border-[1px] border-[solid] border-[#fff] rounded-[10px]  flex-col h-full [transition:all_.2s_ease-in-out_0s] relative
          "
            >
              <h3 className="text-[40px] text-white">13 k +</h3>
              <p className="text-[22px] text-white">Jop already Posted</p>
              <div className="overflow-hidden">
                <img
                  src="/Images/Home/Get yourMatchedJob/shape_12.896401fd.svg"
                  className="absolute bottom-[0%] left-[5%] w-20 h-20"
                />
                <img
                  src="/Images/Home/Get yourMatchedJob/shape_12.896401fd.svg"
                  className="absolute top-[10%] right-[10%] w-20 h-20"
                />
              </div>
              <div className="flex flex-row justify-end items-center mt-[140px]">
                <a
                  href="#"
                  className="w-[50px] h-[50px] p-[14px] rounded-[50%] border border-solid border-[#f0f0f0] text-white text-4xl flex items-center justify-center cursor-pointer hover:bg-yellow-500 duration-200"
                  onClick={(e) => handleNavigate(e, "/Jops")}
                >
                  <FaLocationArrow />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
