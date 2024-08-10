import React, { useEffect, useRef, useState } from "react";
// import components
import FixedNavbar from "../Components/FixedNavbar/FixedNavbar";
import JopCard from "../Components/JopCard";
import Footer from "../Components/Footer";
import MostCompleteJop from "../Components/MostCompleteJop";

import Loader from "../Components/Loader/Loader";
import { AppliedJop } from "../Rtk/actions/Actions";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
// import icons
import { FaFacebook, FaGithub, FaCheck } from "react-icons/fa6";
import { IoCopy } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

function JobDetails() {
  const dispatch = useDispatch();
  const AppliedJops = useSelector((state) => state.jobscards.AppliedJobs);
  // handle showing Apply Button
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const handleApplybutton = () => {
    setIsButtonVisible(false);
  };
  // handle Navigate to Jops Page
  const navigate = useNavigate();
  const handleNavigate = (e, path) => {
    e.preventDefault();
    navigate(path);
  };
  // handle swiper button
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  // useparams to show jop
  const params = useParams();
  const [job, setJob] = useState(null);
  const [relatedJobs, setRelatedJobs] = useState(null);
  const GetSpecifiesJop = () => {
    fetch("https://remoteok.com/api/")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 1) {
          const allJobs = data.slice(1);
          const specificJob = allJobs.filter(
            (TargetJop) => TargetJop.id && TargetJop.id === params.JopId
          );
          if (params.JopId == null) {
            const firstJop = allJobs.slice(1, 2);
            setJob(firstJop);
          } else {
            setJob(specificJob);
          }

          // if (specificJob.length > 0) {
          //   const positionname = specificJob[0].position
          //     .split(" ")
          //     .slice(0, 1)
          //     .join(" ");

          //   const related = allJobs.filter((jop) =>
          //     jop.position.includes("Full")
          //   );
          //   setRelatedJobs(related);
          // } else {
          //   return 0;
          // }
        }
      })
      .catch((error) => {
        return 0;
      });
  };

  // format Date.
  const [formattedDate, setFormattedDate] = useState("");
  const FormatDate = () => {
    if (job) {
      const date = new Date(job[0].date);
      const options = { year: "numeric", month: "long", day: "numeric" };
      setFormattedDate(date.toLocaleDateString("en-US", options));
    }
  };

  // const show Suucessfully added jop
  const [suuceddAdded, setsuccessAdded] = useState(false);
  const SuccessAdded = (applyjop) => {
    dispatch(AppliedJop(applyjop));
    setsuccessAdded(true);
    setTimeout(() => {
      setsuccessAdded(false);
    }, 1000);
  };
  useEffect(() => {
    GetSpecifiesJop();
    FormatDate();
  }, [params.JopId]);

  if (!job) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className="relative">
        <FixedNavbar
          MainTitle={"Job Details"}
          SubTitle={"Here will be your company job details & requirements"}
        />
        <div
          className={`fixed top-24 right-0 px-5 bg-hoverColor h-10 flex flex-row items-center gap-2 rounded-tl-[10px] rounded-bl-[10px] z-40 w-fit transition-transform duration-300 ${
            suuceddAdded ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="w-7 h-7 bg-slate-200 rounded-full leading-7 flex flex-col items-center justify-center">
            <FaCheck />
          </div>
          <p className="capitalize text-white">
            ({AppliedJops.length}) Jop Suucessfully Applied
          </p>
        </div>
        <div className="Container ">
          {job &&
            job.map((jopDetail) => (
              <div
                className="py-[80px] relative flex lg:flex-row flex-col-reverse px-3 gap-10"
                key={jopDetail.id}
              >
                <div className="lg:w-8/12 w-full">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center">
                      <p className="text-[19px] text-gray-500 font-normal">
                        {job ? formattedDate : "10/12/2024"}
                      </p>
                      &nbsp; &nbsp; &nbsp;
                      <a
                        href="#"
                        className="text-grayColor text-2xl font-semibold"
                      >
                        {job ? jopDetail.company : "slack"}
                      </a>
                    </div>
                    <div>
                      <h3 className=" mb-[15px] text-[27px] md:text-[36px] text-grayColor">
                        {job
                          ? jopDetail.position
                          : "Developer & expert in java c++"}
                      </h3>
                    </div>
                    <div>
                      <ul className="flex flex-row items-center gap-3">
                        <li className="text-[14px] font-medium text-[#244034] leading-[33px] rounded-[5px] px-4 py-[0] mt-[5px] bg-secondColor [transition:all_.2s_ease-in-out_0s] flex flex-row items-center justify-center gap-1 hover:bg-[#244034] hover:text-white duration-200 cursor-pointer">
                          <a href="#" className="leading-3 text-[13px]">
                            <FaFacebook />
                          </a>
                          <span>Facebook</span>
                        </li>
                        <li className="text-[14px] font-medium text-[#244034] leading-[33px] rounded-[5px] px-4 py-[0] mt-[5px] bg-secondColor [transition:all_.2s_ease-in-out_0s] flex flex-row items-center justify-center gap-1 hover:bg-[#244034] hover:text-white duration-200 cursor-pointer">
                          <a href="#">
                            <FaGithub />
                          </a>
                          <span>GitHub</span>
                        </li>
                        <li className="text-[14px] font-medium text-[#244034] leading-[33px] rounded-[5px] px-4 py-[0] mt-[5px] bg-secondColor [transition:all_.2s_ease-in-out_0s] flex flex-row items-center justify-center gap-1 hover:bg-[#244034] hover:text-white duration-200 cursor-pointer">
                          <a
                            href={job ? jopDetail.apply_url : ""}
                            target="_blank"
                          >
                            <IoCopy />
                          </a>
                          <span>Copy</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border-[1px] border- border-solid border-[#244034] rounded-[20px] pt-[35px] lg:px-[40px] px-[14px] pb-[20px] mt-10 flex flex-col gap-2">
                      <div>
                        <div className="flex flex-row items-center  gap-1">
                          <div className="w-[25px] h-[25px] leading-[25px] text-[14px] bg-[#31795a] rounded-full text-center text-white ">
                            1
                          </div>
                          <div>
                            <h3 className="text-[22px] !m-0">
                              Job Description
                            </h3>
                          </div>
                        </div>
                        <div className="px-3">
                          <p className="text-[17px] my-[20px]  text-[#acaaaa]">
                            As a
                            <a
                              href="#"
                              className="text-[17px] my-[20px]   text-[#1f1e1e] font-normal underline"
                            >
                              &nbsp; {job[0].position} &nbsp;
                            </a>
                            at WillowTree, you’ll give form to ideas by being
                            the voice and owner of product decisions. You’ll
                            drive the design direction, and then make it happen!{" "}
                            <br />
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-row items-center  gap-1">
                          <div className="w-[25px] h-[25px] leading-[25px] text-[14px] bg-[#31795a] rounded-full text-center text-white ">
                            2
                          </div>
                          <div>
                            <h3 className="text-[22px] !m-0">
                              Responsibilities
                            </h3>
                          </div>
                        </div>
                        <div>
                          <ul className="flex flex-col items-start  mt-2 text-[#1f1e1e] px-3">
                            <li className="flex flex-row items-center  gap-1 relative my-[5px]">
                              <span className="text-[#31795a] text-[17px]  ">
                                <FaCheck />
                              </span>
                              <p className="text-[17px]    text-[#acaaaa]">
                                Collaborate daily with a multidisciplinary team
                                of Software Engineers.
                              </p>
                            </li>
                            <li className="flex flex-row items-center justify-start gap-2 relative my-[5px]">
                              <span className="text-[#31795a] text-[17px]  ">
                                <FaCheck />
                              </span>
                              <p className="text-[17px]     text-[#acaaaa]">
                                Collaborate daily with a multidisciplinary team
                                of Software Engineers.
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <div className="flex flex-row items-center  gap-1">
                          <div className="w-[25px] h-[25px] leading-[25px] text-[14px] bg-[#31795a] rounded-full text-center text-white ">
                            3
                          </div>
                          <div>
                            <h3 className="text-[22px] !m-0">
                              Required Skills:
                            </h3>
                          </div>
                        </div>
                        <div>
                          <ul className="flex flex-col items-start  mt-2 text-[#1f1e1e] px-3">
                            <li className="flex flex-row items-center  gap-1 relative my-[5px]">
                              <span className="text-[#31795a] text-[17px]  ">
                                <GoDotFill />
                              </span>
                              <p className="text-[17px]    text-[#acaaaa]">
                                You’ve been designing digital products for 2+
                                years.
                              </p>
                            </li>
                            <li className="flex flex-row items-center justify-start gap-2 relative my-[5px]">
                              <span className="text-[#31795a] text-[17px]  ">
                                <GoDotFill />
                              </span>
                              <p className="text-[17px]     text-[#acaaaa]">
                                You’ve proudly shipped and launched several
                                products.
                              </p>
                            </li>
                            <li className="flex flex-row items-center justify-start gap-2 relative my-[5px]">
                              <span className="text-[#31795a] text-[17px]  ">
                                <GoDotFill />
                              </span>
                              <p className="text-[17px]     text-[#acaaaa]">
                                Up-to-date knowledge of design software like
                                Figma, Sketch etc
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <div className="flex flex-row items-center  gap-1">
                          <div className="w-[25px] h-[25px] leading-[25px] text-[14px] bg-[#31795a] rounded-full text-center text-white ">
                            4
                          </div>
                          <div>
                            <h3 className="text-[22px] !m-0"> Benefits:</h3>
                          </div>
                        </div>
                        <div>
                          <ul className="flex flex-col items-start  mt-2 text-[#1f1e1e] px-3">
                            <li className="flex flex-row items-center  gap-1 relative my-[5px]">
                              <span className="text-[#31795a] text-[17px]  ">
                                <GoDotFill />
                              </span>
                              <p className="text-[17px]    text-[#acaaaa]">
                                We are a remote-first company.
                              </p>
                            </li>
                            <li className="flex flex-row items-center justify-start gap-2 relative my-[5px]">
                              <span className="text-[#31795a] text-[17px]  ">
                                <GoDotFill />
                              </span>
                              <p className="text-[17px]     text-[#acaaaa]">
                                Unlimited paid vacation and paid company
                                holidays.
                              </p>
                            </li>
                            <li className="flex flex-row items-center justify-start gap-2 relative my-[5px]">
                              <span className="text-[#31795a] text-[17px]  ">
                                <GoDotFill />
                              </span>
                              <p className="text-[17px]     text-[#acaaaa]">
                                Monthly wellness/gym stipend.
                              </p>
                            </li>
                            <li className="flex flex-row items-center justify-start gap-2 relative my-[5px]">
                              <span className="text-[#31795a] text-[17px]  ">
                                <GoDotFill />
                              </span>
                              <p className="text-[17px]     text-[#acaaaa]">
                                Vacation stipend.
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-4/12 w-full rounded-[20px] pt-[50px] px-[20px] pb-[30px] bg-[#eff6f3] h-fit">
                  <div className=" border-b border-solid border-[#dee2e6]">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="h-[80px] w-[80px]">
                        <img
                          src={
                            job
                              ? jopDetail.company_logo
                              : "../../public/Images/media_22.webp"
                          }
                          alt="companyLogo"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <a href="#" className="text-grayColor text-2xl">
                          {job ? jopDetail.company : "Slack"}
                        </a>
                      </div>
                    </div>
                    <div className="text-center pt-4 pb-9">
                      <a
                        href={job ? jopDetail.apply_url : ""}
                        target="_blank"
                        className="w-[160px] leading-[40px] text-center block mx-[auto] my-[0] font-medium tracking-[-.5px] text-[#fff] bg-[#244034] rounded-[30px] hover:bg-[#31795A] duration-200"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                  <div className="py-7">
                    <ul className="flex flex-wrap  ">
                      <li className="w-7/12 flex flex-col items-start justify-start ">
                        <span className="text-xl  text-[#8a8b8b]">Date</span>
                        <div className="text-[15px] font-medium text-[#244034]  mx-[0] mb-[25px] flex flex-row items-center">
                          <p className="text-[17px]">
                            {job ? formattedDate : "18 Jul 2024"}
                          </p>
                        </div>
                      </li>
                      <li className="w-5/12 flex flex-col items-start justify-start ">
                        <span className="text-xl  text-[#8a8b8b]">
                          Location
                        </span>
                        <div className="text-[15px] font-medium text-[#244034]  mx-[0] mb-[25px] flex flex-row items-center">
                          <p className="text-[17px]">
                            {job ? jopDetail.location : "Spain, Bercelona"}{" "}
                          </p>
                        </div>
                      </li>
                      <li className="w-7/12 flex flex-col items-start justify-start ">
                        <span className="text-xl   text-[#8a8b8b]">Salary</span>
                        <div className="text-[15px] font-medium text-[#244034]  mx-[0] mb-[25px] flex flex-row items-center">
                          <p className="text-[17px]">
                            {job ? jopDetail.salary_min : "900"}
                          </p>
                          / Monthly
                        </div>
                      </li>

                      <li className="w-5/12 flex flex-col items-start justify-start">
                        <span className="text-[19px]  text-[#8a8b8b]">
                          Experience
                        </span>
                        <div className="text-[15px] font-medium text-[#244034]  mx-[0] mb-[25px] flex flex-row items-center">
                          <p className="text-[17px]">Fresher </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <ul className="flex flex-row flex-wrap items-center">
                      {job &&
                        jopDetail.tags.map((tag, index) => (
                          <li
                            key={index}
                            className="text-[12px] font-medium text-[rgba(0,_0,_0,_.48)] leading-[23px] border
                  border-solid border-[#768981] rounded-[30px] mt-[0] mx-[4px] mb-[8px] px-[11px] py-[0] capitalize [transition:all_.2s_ease-in-out_0s] cursor-pointer hover:bg-[#244034] hover:text-white"
                            onClick={(e) => handleNavigate(e, "/Jops")}
                          >
                            {tag}
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className="my-8">
                    <button
                      className="w-full leading-[40px] text-center block mx-[auto] my-[0] font-medium tracking-[-.5px] text-[#fff] bg-[#244034] rounded-[30px] capitalize hover:bg-[#31795A] duration-200"
                      onClick={() => SuccessAdded(job[0])}
                    >
                      apply now
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* <div className="my-16 bg-secondColor pt-20  ">
          <div className="Container pb-20 border-b border-solid border-neutral-200 relative">
            <div className="flex lg:flex-row flex-col items-center justify-between py-3">
              <div className="lg:mb-[55px]">
                <h2>Related Jobs</h2>
              </div>
              <div className="flex flex-row items-center gap-3 py-4 absolute bottom-0 lg:relative ">
                <button
                  ref={prevButtonRef}
                  className="text-grayColor p-2 rounded-full hover:bg-mainColor hover:text-white outline-none"
                >
                  <BsArrowLeft size={20} />
                </button>
                <button
                  ref={nextButtonRef}
                  className="  text-grayColor p-2 rounded-full hover:bg-mainColor hover:text-white outline-none"
                >
                  <BsArrowRight size={20} />
                </button>
              </div>
            </div>

            <div>
              <Swiper
                loop={true}
                autoplay={{
                  delay: 3000, // Delay between slides in milliseconds
                  disableOnInteraction: false, // Don't stop autoplay on interaction
                }}
                breakpoints={{
                  // when window width is >= 320px
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  // when window width is >= 480px
                  480: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  // when window width is >= 1024px
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                cssMode={true}
                navigation={{
                  nextEl: nextButtonRef.current,
                  prevEl: prevButtonRef.current,
                }}
                onSwiper={(swiper) => {
                  // Update swiper instance to use buttons' refs
                  if (swiper.params.navigation) {
                    swiper.params.navigation.nextEl = nextButtonRef.current;
                    swiper.params.navigation.prevEl = prevButtonRef.current;
                    swiper.navigation.update();
                  }
                }}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper "
                style={{ width: "100%" }}
              >
                {relatedJobs &&
                  relatedJobs.map((relatedjop) => (
                    <SwiperSlide key={relatedjop.id}>
                      <JopCard
                        JopId={relatedjop.id}
                        companylogo={relatedjop.company_logo}
                        CompanyName={relatedjop.company}
                        Joptitle={relatedjop.position
                          .split(" ")
                          .slice(0, 6)
                          .join(" ")}
                        joptype={relatedjop.slug
                          .split("-")
                          .slice(1, 4)
                          .join("-")}
                        jopDate={relatedjop.date}
                        jopLocation={
                          relatedjop.location.split(",").slice(1, 2).join(",")
                            ? relatedjop.location
                            : "Remotly"
                        }
                        isButtonVisible={handleApplybutton}
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </div> */}
        <MostCompleteJop />
        <Footer />
      </div>
    </>
  );
}

export default JobDetails;
