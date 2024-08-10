import React, { useRef } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

function TrustedByStartup() {
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  return (
    <div className="my-4 py-10  ">
      <div className="Container pb-20  relative">
        <div className="flex lg:flex-row flex-col items-center justify-between py-3 mb-[20px]">
          <div className="">
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
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
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
            <SwiperSlide>
              <div
                className="bg-[#f9ffe1] rounded-[30px]
              border border-2-solid border-grayColor duration-200 py-6 px-5 hover:bg-hoverColor hover:text-white
              "
              >
                <div className="flex flex-col items-start justify-between">
                  <div>
                    <img src="/Images/TrustedCompany/media_01.webp" />
                  </div>
                  <div className="my-[50px]">
                    <p>
                      “Seattle opera simplifies Performance planning with jobi
                      eSignature.”
                    </p>
                  </div>
                  <div className="flex flex-row  gap-1">
                    James Brower,
                    <p className="smallp ">Lead Designer</p>
                  </div>
                  <div className="border-b border-solid border-grayColor w-full py-2"></div>
                </div>
                <div className="flex flex-row items-center justify-between py-4">
                  <p className="text-[17px] ">4.8 Excellent</p>
                  <div className="flex flex-row items-center gap-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="bg-[#f9ffe1] rounded-[30px]
              border border-2-solid border-grayColor duration-200 py-6 px-5 hover:bg-[#D2F34C] hover:text-grayColor
              "
              >
                <div className="flex flex-col items-start justify-between">
                  <div>
                    <img src="/Images/TrustedCompany/media_01.webp" />
                  </div>
                  <div className="my-[50px]">
                    <p>
                      “Seattle opera simplifies Performance planning with jobi
                      eSignature.”
                    </p>
                  </div>
                  <div className="flex flex-row  gap-1">
                    James Brower,
                    <p className="smallp ">Lead Designer</p>
                  </div>
                  <div className="border-b border-solid border-grayColor w-full py-2"></div>
                </div>
                <div className="flex flex-row items-center justify-between py-4">
                  <p className="text-[17px] ">4.8 Excellent</p>
                  <div className="flex flex-row items-center gap-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="bg-[#f9ffe1] rounded-[30px]
              border border-2-solid border-grayColor duration-200 py-6 px-5 hover:bg-[#D2F34C] hover:text-grayColor
              "
              >
                <div className="flex flex-col items-start justify-between">
                  <div>
                    <img src="/Images/TrustedCompany/media_01.webp" />
                  </div>
                  <div className="my-[50px]">
                    <p>
                      “Seattle opera simplifies Performance planning with jobi
                      eSignature.”
                    </p>
                  </div>
                  <div className="flex flex-row  gap-1">
                    James Brower,
                    <p className="smallp ">Lead Designer</p>
                  </div>
                  <div className="border-b border-solid border-grayColor w-full py-2"></div>
                </div>
                <div className="flex flex-row items-center justify-between py-4">
                  <p className="text-[17px] ">4.8 Excellent</p>
                  <div className="flex flex-row items-center gap-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="bg-[#f9ffe1] rounded-[30px]
              border border-2-solid border-grayColor duration-200 py-6 px-5 hover:bg-[#D2F34C] hover:text-grayColor
              "
              >
                <div className="flex flex-col items-start justify-between">
                  <div>
                    <img src="/Images/TrustedCompany/media_01.webp" />
                  </div>
                  <div className="my-[50px]">
                    <p>
                      “Seattle opera simplifies Performance planning with jobi
                      eSignature.”
                    </p>
                  </div>
                  <div className="flex flex-row  gap-1">
                    James Brower,
                    <p className="smallp ">Lead Designer</p>
                  </div>
                  <div className="border-b border-solid border-grayColor w-full py-2"></div>
                </div>
                <div className="flex flex-row items-center justify-between py-4">
                  <p className="text-[17px] ">4.8 Excellent</p>
                  <div className="flex flex-row items-center gap-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="bg-[#f9ffe1] rounded-[30px]
              border border-2-solid border-grayColor duration-200 py-6 px-5 hover:bg-[#D2F34C] hover:text-grayColor
              "
              >
                <div className="flex flex-col items-start justify-between">
                  <div>
                    <img src="/Images/TrustedCompany/media_01.webp" />
                  </div>
                  <div className="my-[50px]">
                    <p>
                      “Seattle opera simplifies Performance planning with jobi
                      eSignature.”
                    </p>
                  </div>
                  <div className="flex flex-row  gap-1">
                    James Brower,
                    <p className="smallp ">Lead Designer</p>
                  </div>
                  <div className="border-b border-solid border-grayColor w-full py-2"></div>
                </div>
                <div className="flex flex-row items-center justify-between py-4">
                  <p className="text-[17px] ">4.8 Excellent</p>
                  <div className="flex flex-row items-center gap-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default TrustedByStartup;
