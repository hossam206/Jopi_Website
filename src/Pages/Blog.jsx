import React from "react";
import FixedNavbar from "../Components/FixedNavbar/FixedNavbar";
// import icons
import { FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import MostCompleteJop from "../Components/MostCompleteJop";
import Footer from "../Components/Footer";
import withLoader from "../Components/HigherOrderComp/HigherorederLoader";

function Blog() {
  const categoryarr = [
    "Education (3)",
    "Information (4)",
    "Interview (2)",
    "Speaking (8)",
    "Skill (5)",
    "Developer (3)",
    "Account (7)",
  ];
  const Keywordsarr = [
    "Ideas",
    "Education",
    "Design",
    "Development",
    "Branding",
  ];
  return (
    <div>
      <FixedNavbar
        MainTitle={"Blog"}
        SubTitle={"Read our blog from top talents"}
      />
      <div className="pt-[100px]">
        <div className="Container">
          <div className="grid grid-cols-12 lg:gap-9 pb-[100px] px-[20px] border-b border-solid border-neutral-200 ">
            <div className="lg:col-span-8 col-span-12 ">
              <div className="text-[rgba(0,_0,_0,_.5)]">
                Developer 23 APR, 2023 . By{" "}
                <a href="#" className="font-medium text-[#244034]">
                  James Brower
                </a>
              </div>
              <h2 className="text-[25px] lg:text-[46px] text-[#244034] my-4">
                Print, publishing qui visual layout mockups.
              </h2>
              <div className="mb-10">
                <div className="h-[450px] w-full rounded-sm mb-9 overflow-hidden">
                  <img
                    src="../../public/Images/Blog/blog_img_31.webp"
                    alt="blog"
                    loading="lazy"
                  />
                </div>
                <p className="font-normal text-[17px] relative text-[rgba(0,_0,_0,_.7)]">
                  Tomfoolery crikey bits and bobs brilliant bamboozled down the
                  pub amongst brolly hanky panky, cack bonnet arse over tit
                  burke bugger all mate bodge. cillum dolore eu fugiat pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.Suspendisse
                  interdum consectetur libero id faucibu nisl. Lacus vel
                  facilisis volutpat est velit egestas.Tempus imperdiet nulla
                  malesuada pellentesque elit eget gravida cum. Sit amet ris
                  nullam eget felis. Enim praesent elementum facilisis leo.
                  Ultricies leo integer.
                  <br /> Tempus imperdiet nulla malesuada pellentesque elit eget
                  gravida cum. Sit amet ris nullam eget felis. Enim praesent
                  elementum facilisis leo. Ultricies leo integer.
                </p>
              </div>
              <div className="mb-10">
                <div className="h-[450px] rounded-md mb-5 overflow-hidden">
                  <img
                    src="../../public/Images/Blog/blog_img_19.webp"
                    alt="blog"
                    loading="lazy"
                  />
                </div>

                <h5 className="text-[20px] leading-[1.65em] text-[#244034] font-medium py-5">
                  This response is important for our ability to from mistakes
                  but it also gives rise to self-criticism imperdiet nulla
                  malesu elit.
                </h5>
                <p className="font-normal text-[17px] relative text-[rgba(0,_0,_0,_.7)]">
                  One touch of a red-hot stove is usually all we need to avoid
                  that kind of discomfort in future The same is true as we
                  experienc the emotional of stress from our instances. We are
                  quickly learn to fear and thus automatically. Lorem ipsum
                  dolor sit amet.
                </p>
              </div>
              <div className="text-center bg-[#eff6f3] rounded-[15px] pt-[35px] px-[15px] pb-[45px] mt-[30px] mx-[0] mb-[40px]">
                <blockquote className="text-[42px] leading-[1.062em] text-[#244034] mb-[25px]">
                  “Everything is designed. <br />
                  Few things are designed well{" "}
                </blockquote>
                <div className="text-[#407f64] text-[15px]">
                  <span className="font-semibold">Brian Reed, </span>
                  <span>front-end developer</span>
                </div>
              </div>
              <div className="mb-10 mt-4">
                <h5 className="text-[32px] tracking-[-1px] text-[#244034] mb-[15px] font-semibold">
                  Work Harder & Gain Success
                </h5>
                <p className="font-normal text-[17px] relative text-[rgba(0,_0,_0,_.7)] mb-[20px]">
                  One touch of a red-hot stove is usually all we need to avoid
                  that kind of discomfort in quis elit future. The same Duis
                  aute irure dolor in reprehenderit .
                  <br />
                  <br />
                  is true as we experience the emotional sensation of stress
                  from our firs social rejec ridicule. We quickly learn to fear
                  and thus automatically. potentially stressful situation of
                  wlir ext quiert all kinds, including the most common of all.
                </p>
                <div className="flex flex-col   lg:flex-row justify-between items-start gap-4 lg:items-center border-b border-solid border-neutral-200 py-6">
                  <div>
                    <ul className="flex flex-row items-center">
                      <li>
                        <span className="font-medium text-[#244034] mr-[7px]">
                          Tag:
                        </span>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[rgba(36,_64,_52,_.55)] mr-[4px] hover:underline hover:text-grayColor duration-200 "
                        >
                          business ,
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[rgba(36,_64,_52,_.55)] mr-[4px] hover:underline hover:text-grayColor duration-200 "
                        >
                          marketing ,
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-[rgba(36,_64,_52,_.55)] mr-[4px] hover:underline hover:text-grayColor duration-200 "
                        >
                          tips
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="flex flex-row items-center justify-center gap-3">
                      <li>
                        <span className="font-medium text-grayColor">
                          Share:
                        </span>
                      </li>
                      <li className="">
                        <a
                          href="#"
                          className="w-8 h-8 bg-[#EEEDED] flex items-center justify-center rounded-full hover:bg-[#31795A] hover:text-white duration-200"
                        >
                          <FaGoogle />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="w-8 h-8 bg-[#EEEDED] flex items-center justify-center rounded-full hover:bg-[#31795A] hover:text-white duration-200"
                        >
                          <FaInstagram />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="w-8 h-8 bg-[#EEEDED] flex items-center justify-center rounded-full hover:bg-[#31795A] hover:text-white duration-200"
                        >
                          <FaTwitter />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="py-4">
                <h3 className="text-2xl ">2 Comments</h3>
                <div className="py-4 flex flex-col item-start justify-start gap-7">
                  <div className="flex flex-row item-start gap-3 relative">
                    <div className="md:w-[90px] w-[50%] h-[60px]">
                      <img src="../../public/Images/Blog/avatar_01.webp" />
                    </div>

                    <div className="flex flex-col item-start ">
                      <h3 className="!m-0">Al Hasani</h3>
                      <p className="text-[15px] text-[#adadad] !m-0">
                        13 June, 2023, 7:30pm
                      </p>
                      <p className="smallp leading-6 !text-[#000000b3] mt-2">
                        One touch of a red-hot stove is usually all we need to
                        avoid that kind of lorem discomfort in future. The same
                        true we experience
                      </p>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="text-[13px] text-[#fff] uppercase tracking-[0] text-center w-[65px] leading-[27px] bg-[#31795a] rounded-[3px]  absolute  right-[0] hover:bg-mainColor duration-200"
                      >
                        Reply
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-row item-start gap-3 relative">
                    <div className="md:w-[90px] w-[50%] h-[60px]">
                      <img src="../../public/Images/Blog/avatar_02.webp" />
                    </div>

                    <div className="flex flex-col item-start ">
                      <h3 className="!m-0">John Doe</h3>
                      <p className="text-[15px] text-[#adadad] !m-0">
                        13 June, 2023, 7:30pm
                      </p>
                      <p className="smallp leading-6 !text-[#000000b3] mt-2">
                        One touch of a red-hot stove is usually all we need to
                        avoid that kind of lorem discomfort in future. The same
                        true we experience
                      </p>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="text-[13px] text-[#fff] uppercase tracking-[0] text-center w-[65px] leading-[27px] bg-[#31795a] rounded-[3px]  absolute  right-[0] hover:bg-mainColor duration-200"
                      >
                        Reply
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-7">
                <div className="py-[30px] px-[15px] rounded-[20px] bg-[#EFF6F3] ">
                  <div>
                    <h3 className="text-[25px] font-medium !m-0">
                      Leave A Comment
                    </h3>
                    <p className="smallp !text-[#000000b3] ">
                      <a className="underline" href="/register">
                        Sign
                      </a>
                      in to post your comment or signup if you do not have any
                      account.
                    </p>
                    <div className="flex flex-col items-start justify-start mb-[25px] mt-[30px]">
                      <label className="text-[14px] font-normal text-[rgba(0,_0,_0,_.5)] block mb-[6px]">
                        Name *
                      </label>
                      <input
                        placeholder="james Brower"
                        type="text"
                        name="email"
                        required
                        className="w-full h-[55px] outline-none text-[16px] border border-solid border-[#FFFFFF] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-[#FFFFFF]"
                      ></input>
                    </div>
                    <div className="flex flex-col items-start justify-start mb-[25px]">
                      <label className="text-[14px] font-normal text-[rgba(0,_0,_0,_.5)] block mb-[6px]">
                        Email *
                      </label>
                      <input
                        placeholder="james@example.com"
                        type="email"
                        name="email"
                        required
                        className="w-full h-[55px] outline-none text-[16px] border border-solid border-[#FFFFFF] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-[#FFFFFF]"
                      ></input>
                    </div>
                    <div className="flex flex-col items-start justify-start mb-[25px]">
                      <label className="text-[14px] font-normal text-[rgba(0,_0,_0,_.5)] block mb-[6px]">
                        Message *
                      </label>
                      <textarea
                        placeholder="james@example.com"
                        type="email"
                        name="email"
                        required
                        className="block text-[17px] w-full max-w-full h-[145px] border-[none] rounded-[8px] px-[25px] py-[20px] bg-[#fff]"
                      ></textarea>
                      <div className="my-8">
                        <button
                          type="submit"
                          className="  leading-[50px] text-center px-[54px]   font-medium tracking-[-.5px] text-[#fff] bg-[#31795A] rounded-[10px] capitalize hover:bg-mainColor duration-200"
                        >
                          post comment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 col-span-12 p-4 text-white">
              <form
                className="relative mb-[50px] lg:mb-[40px] h-[45px] rounded-[5px]"
                action="#"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full h-full border-[none] rounded-[5px] bg-[#f4f4f4] pl-[20px] pr-[60px] py-[0]"
                />
                <button className="absolute text-grayColor top-3 right-2 cursor-pointer">
                  <CiSearch className="text-[17px]" />
                </button>
              </form>
              <div>
                <h3 className="text-[24px] mb-[25px]">Category</h3>
                <ul>
                  {categoryarr.map((category, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-[#000] leading-[40px] hover:underline hover:text-hoverColor"
                      >
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="py-4">
                <h3 className="text-2xl ">Recent News</h3>
                <div className="flex flex-col item-start justify-start gap-7">
                  <div className="flex flex-row item-start gap-3 relative border-t border-b border-solid border-[#dee2e6]  pt-4 pb-4">
                    <div className="md:w-[50px]  h-[50px]">
                      <img src="../../public/Images/Blog/blog_img_16.webp" />
                    </div>

                    <div className="flex flex-col item-start ">
                      <a
                        href="#"
                        className="text-[15px] text-grayColor font-medium hover:underline"
                      >
                        Easy way to boost your business.
                      </a>
                      <p className="text-[15px] text-[#adadad] !m-0">
                        5 Jan, 2023
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row item-start gap-3 relative   border-b border-solid border-[#dee2e6]   pb-4">
                    <div className="md:w-[50px]   h-[50px]">
                      <img src="../../public/Images/Blog/blog_img_15.webp" />
                    </div>

                    <div className="flex flex-col item-start ">
                      <a
                        href="#"
                        className="text-[15px] text-grayColor font-medium hover:underline"
                      >
                        Introducing new tools for your design.
                      </a>
                      <p className="text-[15px] text-[#adadad] !m-0">
                        5 Jan, 2023
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row item-start gap-3 relative border-b border-solid border-[#dee2e6]  pb-4">
                    <div className="md:w-[50px]   h-[50px]">
                      <img src="../../public/Images/Blog/blog_img_17.webp" />
                    </div>

                    <div className="flex flex-col item-start ">
                      <a
                        href="#"
                        className="text-[15px] text-grayColor font-medium hover:underline"
                      >
                        Speaking remotely at WordCamp US.
                      </a>
                      <p className="text-[15px] text-[#adadad] !m-0">
                        5 Jan, 2023
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[24px] mb-[25px]">Keywords</h3>
                <ul className="flex flex-row items-center flex-wrap gap-1">
                  {Keywordsarr.map((word, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-[14px] px-[25px] py-[6px] text-[#31795a] leading-[40px] rounded-[30px] bg-[#EFF6F3] [transition:all_.2s_ease-in-out_0s]  hover:bg-[#244034] hover:text-white duration-200"
                      >
                        {word}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <MostCompleteJop />
        <Footer />
      </div>
    </div>
  );
}
export default withLoader(Blog);
