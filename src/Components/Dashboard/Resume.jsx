import React from "react";
import { IoCloseOutline } from "react-icons/io5";

function Resume() {
  const skillsarr = [
    "HTML5 ",
    "Illustrator ",
    "Adobe Photoshop ",
    "WordPress ",
    "jQuery ",
    "Web Design ",
    "Adobe XD ",
    "CSS ",
  ];
  return (
    <div className="relative">
      <h3 className="text-[#244034] text-[30px] mb-8"> Intro & Overview</h3>
      <div className="lg:px-[45px] px-[20px] py-[40px] rounded-[20px] bg-white">
        <div className="my-3">
          <form>
            <div className="my-4">
              <label className="text-[17x] font-semibold text-grayColor block mb-[6px]">
                Overview*
              </label>
              <textarea
                placeholder="Write Something interesting about You....*"
                type="text"
                name="textarea"
                
                // onChange={(e) => setemail(e.target.value)}
                required
                className="w-full h-[155px] outline-none text-[16px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-transparent"
              ></textarea>
              <p className="text-[14px] tracking-[-.14px] text-[rgba(0,_0,_0,_.5)]">
                Brief description for your profile. URLs are hyperlinked.
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="lg:px-[45px] px-[20px] py-[40px] rounded-[20px] bg-white mt-6">
        <div className="my-3">
          <h3 className="text-[#244034] text-[30px] mb-8 font-medium">
            Education
          </h3>
          <div className="my-4 border border-solid border-[#e5e5e5] rounded-[8px] lg:px-[30px] px-[10px] py-[20px]">
            <p className="font-semibold text-[15px]">Add Education*</p>
            <form className="lg:py-6 py-2 lg:px-5 px-1">
              <div className="grid grid-cols-12   my-6  ">
                <div className="lg:col-span-2 col-span-12">
                  <label className="block text-[15px] font-semibold text-[#254035] mb-[10px] w-8">
                    Title*
                  </label>
                </div>
                <div className="lg:col-span-10 col-span-12">
                  <input
                    placeholder="Product Designer Google"
                    type="text"
                    name="name"
                   
                    
                    // onChange={(e) => setemail(e.target.value)}
                    required
                    className="w-full h-[55px] outline-none text-[16px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-transparent"
                  ></input>
                </div>
              </div>
              <div className="grid grid-cols-12   my-6  ">
                <div className="lg:col-span-2 col-span-12">
                  <label className="block text-[15px] font-semibold text-[#254035] mb-[10px] w-8">
                    Academy*
                  </label>
                </div>
                <div className="lg:col-span-10 col-span-12">
                  <input
                    placeholder="Google Arts Collage & University"
                    type="text"
                    name="name"
          
                    
                    // onChange={(e) => setemail(e.target.value)}
                    required
                    className="w-full h-[55px] outline-none text-[16px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-transparent"
                  ></input>
                </div>
              </div>
              <div className="grid grid-cols-12   my-6  ">
                <div className="lg:col-span-2 col-span-12">
                  <label className="block text-[15px] font-semibold text-[#254035] mb-[10px] w-8">
                    Year*
                  </label>
                </div>
                <div className="lg:col-span-5 col-span-6 mr-3">
                  <input
                    placeholder="From"
                    type="text"
                    name="name"
                
                    
                    // onChange={(e) => setemail(e.target.value)}
                    required
                    className="w-full h-[55px] outline-none text-[16px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-transparent"
                  ></input>
                </div>
                <div className="lg:col-span-5 col-span-6 ">
                  <input
                    placeholder="To"
                    type="text"
                    name="name"
            
                    
                    // onChange={(e) => setemail(e.target.value)}
                    required
                    className="w-full h-[55px] outline-none text-[16px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-transparent"
                  ></input>
                </div>
              </div>
              <div className="grid grid-cols-12   my-6  ">
                <div className="lg:col-span-2 col-span-12">
                  <label className="block text-[15px] font-semibold text-[#254035] mb-[10px] w-8">
                    Description*
                  </label>
                </div>
                <div className="lg:col-span-10 col-span-12">
                  <textarea
                    placeholder="Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam et pulvinar tortor luctus."
                    type="text"
                    name="name"
               
                    
                    // onChange={(e) => setemail(e.target.value)}
                    required
                    className="w-full h-[200px] font-thin outline-none text-[16px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[20px] pr-[52px] py-3 text-[#000] bg-transparent"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="lg:px-[45px] px-[20px] py-[40px] rounded-[20px] bg-white mt-6">
        <div className="my-3">
          <h3 className="text-[#244034] text-[30px] mb-8 font-medium">
            Skills & Experience
          </h3>
          <p className="font-semibold text-[15px]">Add Skills*</p>
          <div className="my-4 bg-[#F7F7F7] rounded-[8px] lg:px-[30px] px-[10px] lg:py-[20px] py-[10px]">
            <div>
              <ul className="flex flex-row items-center flex-wrap gap-2">
                {skillsarr.map((skill, index) => (
                  <li
                    className="flex flex-row items-center gap-4 text-[17px] text-[#31795a] leading-[42px]  px-4 py-[0] bg-[#fff] [box-shadow:0_15px_30px_rgba(0,_0,_0,_.036)] rounded-[30px] relative"
                    key={index}
                  >
                    <a href="#">{skill}</a>
                    <IoCloseOutline />
                  </li>
                ))}
                <li className="flex flex-row items-center justify-center text-[21px] w-[42px] h-[42px] rounded-[50%] bg-[#d2f34c] hover:bg-[#31795A] hover:text-white duration-200 cursor-pointer">
                  +
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-5 py-6">
        <div>
          <a
            href="#"
            className="cursor-pointer text-[15px] tracking-[-.15px]  w-[175px] leading-[40px] h-[40px] text-center rounded-[7px] text-[#244034] bg-[#d2f34c] py-3 px-4 font-semibold hover:bg-[#31795A] hover:text-white duration-200 "
          >
            Save
          </a>
        </div>
        <a href="#" className="font-semibold text-[#31795a]">
          Cancel
        </a>
      </div>
    </div>
  );
}

export default Resume;
