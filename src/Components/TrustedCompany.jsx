import React from "react";
// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Main Swiper styles
import "swiper/css/autoplay"; // Autoplay module styles
// import SwiperCore, { Autoplay } from "swiper";

// Install modules
// SwiperCore.use([Autoplay]);
function TrustedCompany() {
  return (
    <div className=" py-8 text-center px-3 ">
      <h3 className="text-[18px] md:mb-8 font-semibold tracking-[1px]">
        TRUSTED BY <span className="text-mainColor">500+</span> COMPANIES
      </h3>
      <div
        className="flex flex-row 
      justify-center items-center py-10 Container  border-b border-solid border-neutral-200   "
      >
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={"2"}
          pagination={{
            clickable: true,
          }}
          loop={true}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 6,
              spaceBetween: 40,
            },
          }}
          modules={[]}
          className="mySwiper "
          style={{ width: "100%" }}
        >
          <SwiperSlide>
            <div className="overflow-hidden h-15 flex items-center flex-col  w-[108px] md:w-[145px]">
              <img src="/Images/Home/trustedByCompanies/media_03.webp" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="overflow-hidden h-15 flex items-center  flex-col w-[108px] md:w-[145px]">
              <img src="/Images/Home/trustedByCompanies/media_04.webp" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="overflow-hidden h-15 flex items-center flex-col w-[108px] md:w-[145px]">
              <img src="/Images/Home/trustedByCompanies/media_05.webp" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="overflow-hidden h-15 flex items-center flex-col w-[108px] md:w-[145px]">
              <img src="/Images/Home/trustedByCompanies/media_06.webp" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="overflow-hidden h-15 flex items-center flex-col w-[108px] md:w-[145px]">
              <img src="/Images/Home/trustedByCompanies/media_07.webp" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="overflow-hidden h-15 flex items-center flex-col w-[108px] md:w-[145px]">
              <img src="/Images/Home/trustedByCompanies/media_08.webp" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="overflow-hidden h-15 flex items-center flex-col w-[108px] md:w-[145px]">
              <img src="/Images/Home/trustedByCompanies/media_06.webp" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="overflow-hidden h-15 flex items-center flex-col w-[108px] md:w-[145px]">
              <img src="/Images/Home/trustedByCompanies/media_07.webp" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default TrustedCompany;
