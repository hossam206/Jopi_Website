import React from "react";
// import icons
import { FaStar } from "react-icons/fa";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
export default function Testemonile() {
  return (
    <div className='px-5 relative before:content-[""] before:absolute before:right-[0] before:top-[0] before:bottom-[0] before:w-1/2 before:bg-[#f0f6f3] mt-[50px] py-10'>
      <div className="Container flex  flex-col items-center md:flex-row md:items-center  ">
        <div className=" w-full lg:w-4/12 z-20 ">
          <p className="smallp ">TESTIMONIAL</p>
          <h2 className=" text-[43px] md:text-[62px] leading-[46px] md:leading-[60px]">
            Clients loves jobi.
          </h2>
          <div className="mt-[50px]">
            <h3 className="text-4xl text-mainColor font-semibold py-3">
              A+ Rating
            </h3>
            <p className="smallp">Avg rating 4.8 makes us best market place.</p>
          </div>
        </div>
        <div className="w-full lg:w-8/12  z-20 py-10 overflow-hidden">
          <Swiper
            slidesPerView={"2"}
            pagination={{
              clickable: true,
            }}
            loop={true}
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
                slidesPerView: 1,
                spaceBetween: 30,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination]}
            className="mySwiper "
            style={{ width: "100%" }}
          >
            <SwiperSlide>
              <div className="rounded-md bg-white px-8  py-10 border border-solid border-[#fafafa]">
                <h3 className="text-xl capitalize text-mainColor font-semibold py-1">
                  impressive
                </h3>
                <div className="cursor-pointer flex flex-row items-center text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="py-10 border-b border-solid border-black">
                  “This is absolutely unique and clean design that I'm looking
                  for. Also, the code quality is great!”
                </p>
                <div className="flex flex-row   items-center justify-between pt-6 pb-1">
                  <div className="flex flex-row   items-center">
                    <div className="mr-4">
                      <img src="/Images/Home/Clients loves jobi/img_14.webp" />
                    </div>
                    <div>
                      <h3 className="text-2xl text-[#363A3D] font-[400]">
                        james stephens
                      </h3>
                      <p className="smallp">sydney</p>
                    </div>
                  </div>
                  <span className="text-[#D6E7DE] text-3xl">99</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md bg-white px-8  py-10 border border-solid border-[#fafafa]">
                <h3 className="text-xl capitalize text-mainColor font-semibold py-1">
                  nice work
                </h3>
                <div className="cursor-pointer flex flex-row items-center text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="py-10 border-b border-solid border-black">
                  “This is absolutely unique and clean design that I'm looking
                  for. Also, the code quality is great!”
                </p>
                <div className="flex flex-row   items-center justify-between pt-6 pb-1">
                  <div className="flex flex-row   items-center">
                    <div className="mr-4">
                      <img src="/Images/Home/Clients loves jobi/img_15.webp" />
                    </div>
                    <div>
                      <h3 className="text-2xl text-[#363A3D] font-[400]">
                        james stephens
                      </h3>
                      <p className="smallp">sydney</p>
                    </div>
                  </div>
                  <span className="text-[#D6E7DE] text-3xl">99</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md bg-white px-8  py-10 border border-solid border-[#fafafa]">
                <h3 className="text-xl capitalize text-mainColor font-semibold py-1">
                  impressive
                </h3>
                <div className="cursor-pointer flex flex-row items-center text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="py-10 border-b border-solid border-black">
                  “This is absolutely unique and clean design that I'm looking
                  for. Also, the code quality is great!”
                </p>
                <div className="flex flex-row   items-center justify-between pt-6 pb-1">
                  <div className="flex flex-row   items-center">
                    <div className="mr-4">
                      <img src="/Images/Home/Clients loves jobi/img_14.webp" />
                    </div>
                    <div>
                      <h3 className="text-2xl text-[#363A3D] font-[400]">
                        james stephens
                      </h3>
                      <p className="smallp">sydney</p>
                    </div>
                  </div>
                  <span className="text-[#D6E7DE] text-3xl">99</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md bg-white px-8  py-10 border border-solid border-[#fafafa]">
                <h3 className="text-xl capitalize text-mainColor font-semibold py-1">
                  nice work
                </h3>
                <div className="cursor-pointer flex flex-row items-center text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="py-10 border-b border-solid border-black">
                  “This is absolutely unique and clean design that I'm looking
                  for. Also, the code quality is great!”
                </p>
                <div className="flex flex-row   items-center justify-between pt-6 pb-1">
                  <div className="flex flex-row   items-center">
                    <div className="mr-4">
                      <img src="/Images/Home/Clients loves jobi/img_15.webp" />
                    </div>
                    <div>
                      <h3 className="text-2xl text-[#363A3D] font-[400]">
                        james stephens
                      </h3>
                      <p className="smallp">sydney</p>
                    </div>
                  </div>
                  <span className="text-[#D6E7DE] text-3xl">99</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md bg-white px-8  py-10 border border-solid border-[#fafafa]">
                <h3 className="text-xl capitalize text-mainColor font-semibold py-1">
                  impressive
                </h3>
                <div className="cursor-pointer flex flex-row items-center text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="py-10 border-b border-solid border-black">
                  “This is absolutely unique and clean design that I'm looking
                  for. Also, the code quality is great!”
                </p>
                <div className="flex flex-row   items-center justify-between pt-6 pb-1">
                  <div className="flex flex-row   items-center">
                    <div className="mr-4">
                      <img src="/Images/Home/Clients loves jobi/img_14.webp" />
                    </div>
                    <div>
                      <h3 className="text-2xl text-[#363A3D] font-[400]">
                        james stephens
                      </h3>
                      <p className="smallp">sydney</p>
                    </div>
                  </div>
                  <span className="text-[#D6E7DE] text-3xl">99</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md bg-white px-8  py-10 border border-solid border-[#fafafa]">
                <h3 className="text-xl capitalize text-mainColor font-semibold py-1">
                  nice work
                </h3>
                <div className="cursor-pointer flex flex-row items-center text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="py-10 border-b border-solid border-black">
                  “This is absolutely unique and clean design that I'm looking
                  for. Also, the code quality is great!”
                </p>
                <div className="flex flex-row   items-center justify-between pt-6 pb-1">
                  <div className="flex flex-row   items-center">
                    <div className="mr-4">
                      <img src="/Images/Home/Clients loves jobi/img_15.webp" />
                    </div>
                    <div>
                      <h3 className="text-2xl text-[#363A3D] font-[400]">
                        james stephens
                      </h3>
                      <p className="smallp">sydney</p>
                    </div>
                  </div>
                  <span className="text-[#D6E7DE] text-3xl">99</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
