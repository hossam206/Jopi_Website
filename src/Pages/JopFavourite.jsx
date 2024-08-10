import React from "react";
import FixedNavbar from "../Components/FixedNavbar/FixedNavbar";
// import icons
import { FaListUl } from "react-icons/fa";
import JopCardVertival from "../Components/JopCards/JopCardVertival";
import Footer from "../Components/Footer";
import MostCompleteJop from "../Components/MostCompleteJop";
import withLoader from "../Components/HigherOrderComp/HigherorederLoader";
import { useSelector } from "react-redux";
function JopFavourite() {
  const savedjobs = useSelector((state) => state.jobscards.jobs);

  return (
    <div>
      <FixedNavbar
        MainTitle={"Favourite"}
        SubTitle={"Find your desire company and get your dream job"}
      />
      <div className=" py-20 px-5 lg:pt-28  lg:pb-40 border border-solid border-neutral-200">
        <div className="Container">
          <div className="bg-[#EFF6F3] rounded-[20px] px-6 py-5 mb-8">
            <h2>Wishlist Jobs</h2>
          </div>
          <div className=" flex flex-row items-center justify-between">
            {!savedjobs && ""}
            {savedjobs && (
              <p className="smallp !text-[17px] ">
                All <span className="text-grayColor"> {savedjobs.length} </span>
                jobs found
              </p>
            )}
          </div>

          <div className="py-2">
            {!savedjobs && <h2>There is No Favourite jops </h2>}
            {savedjobs &&
              savedjobs.map((jop) => (
                <JopCardVertival
                  key={jop.id}
                  jopId={jop.id}
                  companylogo={jop.company_logo}
                  comapanyName={jop.company}
                  job_position={jop.position}
                  job_location={
                    jop.location.length == 0 ? "Remotly" : jop.location
                  }
                  job_minsalary={jop.salary_min}
                  job_maxsalary={jop.salary_max}
                />
              ))}
          </div>
        </div>
      </div>
      <MostCompleteJop />
      <Footer />
    </div>
  );
}

export default withLoader(JopFavourite);
