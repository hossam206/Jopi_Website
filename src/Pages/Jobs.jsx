import React, { useEffect, useState } from "react";
// import icons
import { FaListUl } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiFilter } from "react-icons/ci";
// import components
import FixedNavbar from "../Components/FixedNavbar/FixedNavbar";
import JobfilterComp from "../Components/Job/JobfilterComp";
import JopCard from "../Components/JopCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import MostCompleteJop from "../Components/MostCompleteJop";
import Footer from "../Components/Footer";
import withLoader from "../Components/HigherOrderComp/HigherorederLoader";
import { useDispatch, useSelector } from "react-redux";
import { ShowAllPosts } from "../firebase/mainfunction";

function Jobs() {
  const postsjobs = useSelector((state) => state.jobsPosts.publishJopPosts);
  const dispatch = useDispatch();
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  // showing jops
  const [Jops, setJops] = useState([]);
  const handleFilterDataUpdate = (newFilterData) => {
    setJops(newFilterData);
  };
  // handle Apply button
  const handleApplybutton = () => {
    setIsButtonVisible(false);
  };
  // show sidefilter
  const [sidefilter, setsidefilter] = useState("");
  const handlesideDive = (e) => {
    e.preventDefault();
    {
      sidefilter.length === 0
        ? setsidefilter("showsideFilter")
        : setsidefilter("");
    }
  };
  // show more jops
  const [more, setmore] = useState(4); //  show more category function
  const ShowMore = () => {
    setmore((prevCount) => prevCount + 4);
  };
  const ShowLess = () => {
    if (more > 4) {
      setmore(more - 4);
    } else {
      return;
    }
  };

  useEffect(() => {
    dispatch(ShowAllPosts());
    handleFilterDataUpdate();
  }, []);
 
  return (
    <div>
      <FixedNavbar
        MainTitle={"Job Listing"}
        SubTitle={"We delivered blazing fast & striking work solution"}
      />
      <div className="Container py-6 px-4  !mt-10 md:flex gap-4">
        <div className="py-5">
          <a
            href="#"
            className="flex flex-row items-center justify-center border border-2-solid border-[#244034] rounded-[6px] text-[15px] text-[#244034] p-2 cursor-pointer md:hidden hover:bg-[#244034] hover:text-white duration-200"
            onClick={handlesideDive}
          >
            <CiFilter />
            <span>Filter</span>
          </a>
        </div>
        {/* <JobfilterComp /> */}
        <div className="w-full  md:w-3/12 ">
          <div className="text-2xl text-grayColor">Filter By</div>
        </div>

        <div className="w-full md:w-9/12 flex flex-row justify-between items-center ">
          <div className="text-gray-400  ">
            All
            <span className="font-semibold text-grayColor">
              {Jops && Jops.length}
            </span>{" "}
            jobs found
          </div>

          <div className="flex flex-row items-center gap-2">
            <div>Sort : </div>
            <div>
              <select className="min-w-[154px] h-[32px] leading-[30px] text-[13px] font-medium px-[10px] py-[0] bg-[#F5F5F5] border border-solid border-[#e4e4e431]  rounded-[20px] cursor-pointer outline-none">
                <option className="cursor-pointer font-normal mt-[5px] [list-style:none] outline-[none] px-[10px] py-[0] text-left [transition:all_.2s] bg-white">
                  Price Sort
                </option>
                <option className="cursor-pointer font-normal mt-[5px] [list-style:none] outline-[none] px-[10px] py-[0] text-left [transition:all_.2s] bg-white">
                  Low To High
                </option>
                <option className="cursor-pointer font-normal mt-[5px] [list-style:none] outline-[none] px-[10px] py-[0] text-left [transition:all_.2s] bg-white">
                  High To Low
                </option>
              </select>
            </div>
            <div className="cursor-pointer w-[35px] h-[35px] leading-[15px] text-[#000] text-[18px] border  border-solid border-[rgba(0,0,0,.15)] flex items-center justify-center rounded-full hover:bg-[#31795A] hover:text-white duration-200">
              <FaListUl className="text-sm" />
            </div>
          </div>
        </div>
      </div>
      <div className="Container md:flex gap-6 border-b border-solid border-[#ebebeb]  pb-10 !mb-14">
        <JobfilterComp
          showfilter={sidefilter}
          onFilterDataUpdate={handleFilterDataUpdate}
          handlesideDive={handlesideDive}
        />
        <div className="md:w-8/12 flex flex-col items-center md:items-start gap-4 mx-4">
          {Jops && Jops.length > 0 ? (
            <div className="grid grid-cols-1  md:grid-cols-2  w-full gap-9">
              {postsjobs.length > 0 &&
                postsjobs.map((Jop) => (
                  <JopCard
                    key={Jop.actor.Id}
                    jopcard={Jop.actor}
                    JopId={Jop.actor.Id}
                    companylogo={Jop.shareImg}
                    CompanyName={Jop.actor.CompanyName}
                    Joptitle={Jop.actor.Position}
                    jopDate={Jop.actor.DATE}
                    jopLocation={Jop.actor.Location}
                    joptype={`${Jop.actor.Description.split(" ")
                      .slice(0, 10)
                      .join(" ")} ...`}
    
                    jopNew={"New"}
                  />
                ))}
              {Jops &&
                Jops.length > 0 &&
                Jops.slice(0, more).map((Jop) => (
                  <JopCard
                    key={Jop.id}
                    jopcard={Jop}
                    JopId={Jop.id} 
                    companylogo={Jop.company_logo}
                    CompanyName={Jop.company}
                    Joptitle={Jop.position}
                    joptype={Jop.slug}
                    jopDate={Jop.date}
                    jopLocation={Jop.location ? Jop.location : "Remotly"}
                    isButtonVisible={handleApplybutton}
                  />
                ))}
            </div>
          ) : (
            // [1, 2, 3, 4, 5, 6].map((arr, index) => {
            //     return (
            //       <div className="" key={index}>
            //         <JopCard
            //           companylogo={<Skeleton />}
            //           CompanyName={<Skeleton />}
            //           Joptitle={<Skeleton />}
            //           joptype={<Skeleton />}
            //           jopDate={<Skeleton />}
            //           jopLocation={<Skeleton />}
            //         />
            //       </div>
            //     );
            //   })
            <div className="Container flex flex-col items-center justify-center mt-[100px]  h-[200px]  text-center w-full bg-[#F5F5F5] p-7 rounded-[10px]">
              <h3 className="lg:text-3xl text-xl">
                No Jop Reuired Your Search Now ,<br />
                Please try different search
              </h3>
            </div>
          )}

          {/* start pagination */}
          {Jops && Jops.length > 0 && (
            <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start w-full mt-6">
              <div>
                <ul className="list-none flexRow gap-4 text-[#31795A] text-[17px]">
                  <li
                    className="flexRow  gap-1 font-semibold cursor-pointer hover:text-mainColor duration-200"
                    onClick={ShowLess}
                  >
                    <FaArrowLeftLong className="text-[17px]" />
                    <span>Prev</span>
                  </li>

                  <li
                    className="flexRow  gap-1 font-semibold cursor-pointer hover:text-mainColor duration-200"
                    onClick={ShowMore}
                  >
                    <span>Next</span>
                    <FaArrowRightLong className="text-[17px]" />
                  </li>
                </ul>
              </div>
              <div className="smallp !text-[#6E6563] font-thin">
                Showing <span className="text-black font-normal">1</span> to
                <span className="text-black font-normal"> {more} </span>
                of
                <span className="text-black font-normal">
                  {Jops && Jops.length}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      <MostCompleteJop />
      <Footer />
    </div>
  );
}
export default withLoader(Jobs);
