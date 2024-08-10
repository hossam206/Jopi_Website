import React from "react";
// import icons
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Container border-t border-solid py-10 px-4 border-neutral-200">
      <div className="flex flex-col md:flex-row items-start justify-between pt-6">
        <div className="flex-col items-start justify-start">
          <div className="w-[100px] h-[37px] mb-[30px]">
            <img src="/Images/footer/logo_04.webp" />
          </div>

          <ul className="flex flex-col items-start justify-start gap-5  ">
            <li className="flexRow gap-2">
              <div className="w-[30px] h-[30px] text-xl rounded-[50%] border border-solid border-[#f0f0f0] flex items-center justify-center ">
                <MdEmail className="text-[#00bf58] text-[16px]" />
              </div>
              <a
                href="mailto:hossammohamed6401@gmail.com"
                className="text-[15px] text-[#254035] hover:underline"
              >
                hossammohamed6401@gmail
              </a>
            </li>
            <li className="my-6 rotate-[-20deg] animate-moving ">
              <img src="/Images/footer/shape_28.761e9e53.svg" />
            </li>
          </ul>
        </div>
        <div>
          <h3>Services​</h3>
          <ul className="flexCol !items-start">
            <li>
              <Link
                to="/Jops"
                className="text-[rgba(0,_0,_0,_.7)] mb-[18px] [transition:all_.2s_ease-in-out_0s] block hover:text-mainColor"
              >
                Browse Jobs
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="text-[rgba(0,_0,_0,_.7)] mb-[20px] [transition:all_.2s_ease-in-out_0s] block hover:text-mainColor"
              >
                Companies
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[rgba(0,_0,_0,_.7)] mb-[18px] [transition:all_.2s_ease-in-out_0s] block hover:text-mainColor"
              >
                Candidates
              </a>
            </li>
            <li>
              <Link
                to="/Pricing"
                className="text-[rgba(0,_0,_0,_.7)] mb-[18px] [transition:all_.2s_ease-in-out_0s]  block hover:text-mainColor"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul className="flexCol !items-start">
            <li>
              <Link
                to="/About"
                className="text-[rgba(0,_0,_0,_.7)] mb-[18px] [transition:all_.2s_ease-in-out_0s] block hover:text-mainColor"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/Blog"
                className="text-[rgba(0,_0,_0,_.7)] mb-[20px] [transition:all_.2s_ease-in-out_0s] block hover:text-mainColor"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="text-[rgba(0,_0,_0,_.7)] mb-[18px] [transition:all_.2s_ease-in-out_0s] block hover:text-mainColor"
              >
                FAQ’s
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="text-[rgba(0,_0,_0,_.7)] mb-[18px] [transition:all_.2s_ease-in-out_0s]  block hover:text-mainColor"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Support</h3>
          <ul className="flexCol !items-start">
            <li>
              <a
                href="#"
                className="text-[rgba(0,_0,_0,_.7)] mb-[18px] [transition:all_.2s_ease-in-out_0s] block hover:text-mainColor"
              >
                Terms of use
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[rgba(0,_0,_0,_.7)] mb-[20px] [transition:all_.2s_ease-in-out_0s] block hover:text-mainColor"
              >
                Terms & conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[rgba(0,_0,_0,_.7)] mb-[18px] [transition:all_.2s_ease-in-out_0s] block hover:text-mainColor"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[rgba(0,_0,_0,_.7)] mb-[18px] [transition:all_.2s_ease-in-out_0s]  block hover:text-mainColor"
              >
                Cookie policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Support</h3>
          <ul className="flexCol !items-start">
            <li>
              <p className="text-[rgba(0,_0,_0,_.7)] text-[15px] mb-[18px] [transition:all_.2s_ease-in-out_0s] block ">
                Join & get important new regularly
              </p>
            </li>
            <li>
              <form className="relative h-[60px] bg-[rgba(0,_0,_0,_.04)] rounded-[7px]">
                <input
                  type="email"
                  placeholder="enter your email"
                  className="w-full h-full border-[none] bg-transparent pl-[20px] pr-[50px] py-[0] rounded-[7px]"
                />
                <button className="text-[15px] font-medium absolute w-[75px] top-[10px] right-[10px] bottom-[10px] rounded-[6px] bg-[#244034] text-[#fff] [transition:all_.2s_ease-in-out_0s] hover:bg-mainColor">
                  send
                </button>
              </form>
              <p className="text-[#818080] text-[15px] py-[10px] [transition:all_.2s_ease-in-out_0s] block ">
                We only send interesting and relevant emails.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col-reverse items-center gap-3 md:flex-row !justify-between mt-10">
        <div className="flex flex-row justify-between gap-2">
          <div>
            <a href="#" className="text-[15px] hover:underline duration-200">
              Privacy & Terms.
            </a>
            &nbsp;
            <a href="#" className="text-[15px] hover:underline duration-200">
              Contact Us
            </a>
          </div>
        </div>
        <div>
          <a href="#">Copyright @2023 jobi inc.</a>
        </div>
        <div>
          <ul className="flex flex-row justify-center items-center gap-5">
            <li>
              <a
                href="#"
                className="text-[rgba(0,_0,_0,_.6)] text-[16px] [transition:all_.2s_ease-in-out_0s] hover:text-mainColor"
              >
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[rgba(0,_0,_0,_.6)] text-[16px] [transition:all_.2s_ease-in-out_0s]
                hover:text-mainColor"
              >
                <FaDribbble />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[rgba(0,_0,_0,_.6)] text-[16px] [transition:all_.2s_ease-in-out_0s]          hover:text-mainColor"
              >
                <FaGooglePlusG />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[rgba(0,_0,_0,_.6)] text-[16px] [transition:all_.2s_ease-in-out_0s]          hover:text-mainColor"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
