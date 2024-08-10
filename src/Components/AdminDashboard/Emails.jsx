import React, { useState } from "react";
import { FaTrash, FaShare } from "react-icons/fa6";

import { HiDotsVertical } from "react-icons/hi";
import { CiFileOn } from "react-icons/ci";
import { ImAttachment } from "react-icons/im";

function Emails() {
  // handle take the value of input file
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };
  return (
    <div className="mt-4 h-fit mb-7 ">
      <h3 className="text-[#244034] text-[30px] mb-8 lg:px-5">Emails</h3>
      <div className="bg-white rounded-[15px]  grid grid-cols-12">
        <div className="lg:col-span-4 col-span-12 border-r-2 border-solid border-neutral-200  pb-9">
          <div className="my-3 w-full p-4">
            <h4 className="text-[18px] text-black mb-2">Inbox</h4>
            <input
              type="search"
              placeholder="Search Contacts"
              className="w-[calc(100%-10px)] bg-[#F5F5F5]"
            />
          </div>
          <div>
            <ul className="flex flex-row items-center lg:gap-6 gap-3 justify-center px-3 py-3 border-b border-solid border-neutral-200">
              <li className="font-medium text-[#254035] leading-[28px] rounded-[30px] px-[12px] py-[0] mx-[2px] my-[0] relative  capitalize">
                All
              </li>
              <li className="font-medium text-[#254035]  leading-[28px] rounded-[30px] px-[12px] py-[0] mx-[2px] my-[0] relative before:absolute before:top-3 before:-left-2 before:w-2 before:h-2 before:rounded-full before:bg-[#FF4545] capitalize">
                Read
              </li>

              <li className="font-medium text-[#254035]  leading-[28px] rounded-[30px] px-[12px] py-[0] mx-[2px] my-[0] relative before:absolute before:top-3 before:-left-2 before:w-2 before:h-2 before:rounded-full before:bg-[#45ff8c] capitalize">
                unread
              </li>
              <li className="font-medium text-[#254035]  leading-[28px] rounded-[30px] px-[12px] py-[0] mx-[2px] my-[0] relative before:absolute before:top-3 before:-left-2 before:w-2 before:h-2 before:rounded-full before:bg-[#45bbff] capitalize">
                Primary
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center py-5 px-3">
            <div className="w-full">
              <div className="flex flex-row items-center justify-between">
                <div className="text-[15px] font-medium text-[rgba(63,_99,_77,_.8)] relative before:absolute before:top-2 before:left-0 before:w-2 before:h-2 before:rounded-full before:bg-[#FF4545] capitalize">
                  <h4 className="font-semibold">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jenny Rio.
                  </h4>
                </div>
                <div className="text-[12px] uppercase text-[rgba(0,_0,_0,_.5)] font-normal">
                  <span>AUG 22</span>
                </div>
              </div>
              <h3 className="font-medium text-[16px] text-[#000] mt-[7px] mx-[0] mb-[6px] overflow-ellipsis overflow-hidden whitespace-nowrap">
                Work inquiry from google.
              </h3>
              <p className="text-[15px] leading-[25px] text-[rgba(0,_0,_0,_.5)] overflow-hidden">
                Hello, This is Jenny from google. We’r the largest online
                platform offer...
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center py-5 px-3 bg-[#F0F5F3] border-l-4 border-solid border-hoverColor border-r-4">
            <div className="w-full">
              <div className="flex flex-row items-center justify-between">
                <div className="text-[15px] font-medium text-[rgba(63,_99,_77,_.8)] relative before:absolute before:top-2 before:left-0 before:w-2 before:h-2 before:rounded-full before:bg-[#52C1FF] capitalize">
                  <h4 className="font-semibold">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hasan Islam.
                  </h4>
                </div>
                <div className="text-[12px] uppercase text-[rgba(0,_0,_0,_.5)] font-normal">
                  <span>MAY 22</span>
                </div>
              </div>
              <h3 className="font-medium text-[16px] text-[#000] mt-[7px] mx-[0] mb-[6px] overflow-ellipsis overflow-hidden whitespace-nowrap">
                Account Manager.
              </h3>
              <p className="text-[15px] leading-[25px] text-[rgba(0,_0,_0,_.5)] overflow-hidden">
                Hello, Greeting from Uber. Hope you doing great. I am approcing
                to you
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center py-5 px-3">
            <div className="w-full">
              <div className="flex flex-row items-center justify-between">
                <div className="text-[15px] font-medium text-[rgba(63,_99,_77,_.8)] relative before:absolute before:top-2 before:left-0 before:w-2 before:h-2 before:rounded-full before:bg-[#3BDA84] capitalize">
                  <h4 className="font-semibold">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jannatul Ferdaus.
                  </h4>
                </div>
                <div className="text-[12px] uppercase text-[rgba(0,_0,_0,_.5)] font-normal">
                  <span>JUN 22</span>
                </div>
              </div>
              <h3 className="font-medium text-[16px] text-[#000] mt-[7px] mx-[0] mb-[6px] overflow-ellipsis overflow-hidden whitespace-nowrap">
                Product Designer Opportunities.
              </h3>
              <p className="text-[15px] leading-[25px] text-[rgba(0,_0,_0,_.5)] overflow-hidden">
                Hello, This is Jannat from HuntX. We offer business solution to
                our client..
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center py-5 px-3">
            <div className="w-full">
              <div className="flex flex-row items-center justify-between">
                <div className="text-[15px] font-medium text-[rgba(63,_99,_77,_.8)] relative before:absolute before:top-2 before:left-0 before:w-2 before:h-2 before:rounded-full before:bg-[#FF4545] capitalize">
                  <h4 className="font-semibold">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jakie Chan.
                  </h4>
                </div>
                <div className="text-[12px] uppercase text-[rgba(0,_0,_0,_.5)] font-normal">
                  <span>NOV 22</span>
                </div>
              </div>
              <h3 className="font-medium text-[16px] text-[#000] mt-[7px] mx-[0] mb-[6px] overflow-ellipsis overflow-hidden whitespace-nowrap">
                Hunting Marketing Specialist.
              </h3>
              <p className="text-[15px] leading-[25px] text-[rgba(0,_0,_0,_.5)] overflow-hidden">
                Hello, We’r the well known Real Estate Inc provide best
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 col-span-12 pb-9 ">
          <div className="pt-6 flex flex-row items-center justify-between py-5 px-5 border-b border-solid border-neutral-200">
            <div className="flex flex-row items-center justify-start gap-3 pb-5 ">
              <div>
                <img src="/Images/Dashboard/logo_02.webp" />
              </div>
              <div>
                <h3 className="text-[20px] font-medium text-[#254035] -mb-[4px]">
                  Payoneer
                </h3>
                <p className="text-[17px] leading-[25px] text-[rgba(0,_0,_0,_.5)] overflow-hidden">
                  payoneer@inquiry.com
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div>
                <p className="text-[15px] leading-[25px] text-[rgba(0,_0,_0,_.5)] overflow-hidden">
                  4:45AM (3 hours ago)
                </p>
              </div>
              <div className="w-full">
                <ul className="flex flex-row items-center   mt-2 text-[rgba(0,_0,_0,_.5)] text-xl cursor-pointer justify-end gap-4 ">
                  <li className="hover:text-hoverColor">
                    <FaTrash />
                  </li>
                  <li className="hover:text-hoverColor">
                    <FaShare />
                  </li>
                  <li className="hover:text-hoverColor">
                    <HiDotsVertical />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="py-5 px-5 border-b border-solid border-neutral-200">
            <h3 className="text-[20px] font-semibold text-[#254035] mb-[9px]">
              Account Manager.
            </h3>{" "}
            <p className="text-[16px] leading-[25px] text-[rgba(0,_0,_0,_.5)] overflow-hidden font-normal  mb-[12px]">
              Hello, Greeting from Uber. Hope you doing great. I am approaching
              to you for as our company need a great & talented account manager.
            </p>
            <p className="text-[16px] leading-[25px] text-[rgba(0,_0,_0,_.5)] overflow-hidden font-normal mb-[12px]">
              What we need from you to start:
            </p>
            <ul className="text-[16px] leading-[25px] text-[rgba(0,_0,_0,_.5)] overflow-hidden font-normal mb-[12px]">
              <li>- Your CV</li>
              <li>- Verified Gov ID</li>
            </ul>
            <p className="text-[16px] leading-[25px] text-[rgba(0,_0,_0,_.5)] overflow-hidden font-normal mb-[12px]">
              After that we need to redesign our landing page because the
              current one does not carry any information. If you have any
              question don’t hesitate to contact us.
            </p>
            <p className="text-[16px] leading-[25px] text-[rgba(0,_0,_0,_.5)] overflow-hidden font-normal mb-[9px]">
              Our Telegram &nbsp;
              <a href="#" className="text-hoverColor">
                @payoneer
              </a>
              <br />
              Thank you!
            </p>
          </div>
          <div className="py-5 px-5 mb-3 ">
            <div className="flex flex-row items-center justify-between">
              <h3 className="text-[16px] font-semibold text-[#161616]  mb-[4px]">
                2 Attachment
              </h3>
              <a
                href="#"
                className="text-hoverColor capitalize text-[14px] font-semibold  hover:text-mainColor"
              >
                Download All
              </a>
            </div>

            <div className="flex lg:flex-row flex-col items-center gap-3 mt-4">
              <div className="px-[20px] py-[9px] border border-solid border-[rgba(0,0,0,.1)] rounded-[10px] mr-[15px] flex flex-row items-center gap-3 hover:bg-[#F9FBFA] duration-200 cursor-pointer">
                <div className="p-2 bg-[#F0F5F3] rounded-full text-xl">
                  <CiFileOn />
                </div>
                <div>
                  <p className="text-[15px] tracking-[-.3px] text-[#254035] font-normal">
                    project-details.pdf
                  </p>
                  <p className="text-[13px] tracking-[-.3px] text-[rgba(36,_64,_52,_.5)]">
                    2.3mb
                  </p>
                </div>
              </div>
              <div className="px-[20px] py-[9px] border border-solid border-[rgba(0,0,0,.1)] rounded-[10px] mr-[15px] flex flex-row items-center gap-3 hover:bg-[#F9FBFA] duration-200 cursor-pointer">
                <div className="p-2 bg-[#F0F5F3] rounded-full text-xl">
                  <CiFileOn />
                </div>
                <div>
                  <p className="text-[15px] tracking-[-.3px] text-[#254035] font-normal">
                    form.pdf
                  </p>
                  <p className="text-[13px] tracking-[-.3px] text-[rgba(36,_64,_52,_.5)]">
                    1.3mb
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5 px-5">
            <div className="border border-solid border-neutral-200 rounded-[6px] ">
              <div className="flex flex-row items-center justify-start px-4 gap-3">
                <span>To</span>
                <input
                  autoFocus={true}
                  type="text"
                  placeholder="payoneer@inquiry.com"
                  className="rounded-tl-none rounded-bl-none bg-transparent outline-none"
                />
              </div>
              <div className="border-t border-solid border-neutral-200 py-1 w-full ">
                <textarea
                  className=" w-full max-w-full h-[125px] max-h-[125px] border-[none] text-[16px] outline-none resize-none"
                  defaultValue="
                  Hi, Mary Cooper!"
                ></textarea>
                <div className="flex flex-row items-center justify-between px-[22px] py-2">
                  <div className="flex flex-col items-start ">
                    <label className="cursor-pointer flex flex-col items-start">
                      <ImAttachment className="text-xl text-black hover:text-hoverColor" />
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                    {fileName && (
                      <p className="mt-2 text-sm text-gray-500">{fileName}</p>
                    )}
                  </div>
                  <div className="">
                    <a
                      href="#"
                      className="w-full leading-[40px] text-center  mx-[auto] my-[0] font-medium tracking-[-.5px] text-[#fff] rounded-[30px] px-6 py-2  bg-[#244034] hover:bg-[#D2F34C] duration-200"
                    >
                      Reply
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emails;
