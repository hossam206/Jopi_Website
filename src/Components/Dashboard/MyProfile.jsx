import React from "react";

function MyProfile() {
  return (
    <div className="relative">
      <h3 className="text-[#244034] text-[30px] mb-8">My Profile</h3>
      <div className="lg:px-[45px] px-[20px] py-[40px] rounded-[20px] bg-white">
        <div className="flex flex-row items-center gap-3 ">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img src="/Images/Dashboard/avatar_01.webp" />
          </div>
          <div>
            <input type="file" id="profilephoto" className="hidden" />
            <label
              htmlFor="profilephoto"
              className="cursor-pointer  lg:text-[15px] text-[13px] tracking-[-.15px]  lg:w-[175px] lg:leading-[40px] h-[40px] text-center rounded-[7px] text-[#244034] bg-[#d2f34c] py-3 px-4 font-semibold hover:bg-[#31795A] hover:text-white duration-200 "
            >
              Upload New photo
            </label>
          </div>
          <div>
            <a href="#" className="font-medium hover:text-red-600">
              Delete
            </a>
          </div>
        </div>
        <div className="my-3">
          <form>
            <div className="my-4">
              <label className="text-[17x] font-medium text-grayColor block mb-[6px]">
                Full Name*
              </label>
              <input
                placeholder="James Brower"
                type="text"
                name="name"
               
                
                // onChange={(e) => setemail(e.target.value)}
                required
                className="w-full h-[55px] outline-none text-[16px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-transparent"
              ></input>
            </div>
            <div className="my-4">
              <label className="text-[17x] font-medium text-grayColor block mb-[6px]">
                Bio*
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
      <div className="mt-3 lg:px-[45px] px-[20px] py-[40px] rounded-[20px] bg-white">
        <h3 className="text-[#244034]   mb-8  text-[24px]">Social Media</h3>
        <div>
          <form>
            <div className="my-4">
              <label className="text-[17x] font-medium text-grayColor block mb-[6px]">
                Network 1*
              </label>
              <input
                placeholder="#"
                type="text"
     
                // onChange={(e) => setemail(e.target.value)}
                required
                className="w-full h-[55px] outline-none text-[16px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-transparent"
              ></input>
            </div>
            <div className="my-4">
              <label className="text-[17x] font-medium text-grayColor block mb-[6px]">
                Network 2*
              </label>
              <input
                placeholder="#"
                type="text"
                name="name"
  
         
                
                // onChange={(e) => setemail(e.target.value)}
                required
                className="w-full h-[55px] outline-none text-[16px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-transparent"
              ></input>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-3 lg:px-[45px] px-[20px] py-[40px] rounded-[20px] bg-white">
        <h3 className="text-[#244034]   mb-8  text-[24px]">
          Address & Location
        </h3>
        <div>
          <form>
            <div className="my-4">
              <label className="text-[17x] font-medium text-grayColor block mb-[6px]">
                Address*
              </label>
              <input
                placeholder="Write Your Address Here"
                type="text"
                name="name"
       
                
                // onChange={(e) => setemail(e.target.value)}
                required
                className="w-full h-[55px] outline-none text-[16px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-transparent"
              ></input>
            </div>

            <div className="my-4 grid grid-cols-12 gap-2">
              <div className="lg:col-span-3 col-span-12">
                <label className="text-[17x] font-medium text-grayColor block mb-[6px]">
                  Country*
                </label>
                <input
                  placeholder=" "
                  type="text"
                  name="name"
                  // onChange={(e) => setemail(e.target.value)}
                  required
                  className=" h-[55px]  w-full  outline-none text-[16px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-transparent"
                ></input>
              </div>
              <div className="lg:col-span-3 col-span-12">
                <label className="text-[17x] font-medium text-grayColor block mb-[6px]">
                  City*
                </label>
                <input
                  placeholder=" "
                  type="text"
                  name="name"
                  // onChange={(e) => setemail(e.target.value)}
                  required
                  className=" h-[55px] w-full   outline-none text-[16px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-transparent"
                ></input>
              </div>
              <div className="lg:col-span-3 col-span-12">
                <label className="text-[17x] font-medium text-grayColor block mb-[6px]">
                  Zip Code*
                </label>
                <input
                  placeholder=" "
                  type="number"
                  name="name"
                  // onChange={(e) => setemail(e.target.value)}
                  required
                  className=" h-[55px]  w-full  outline-none text-[16px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-transparent"
                ></input>
              </div>
              <div className="lg:col-span-3 col-span-12">
                <label className="text-[17x] font-medium text-grayColor block mb-[6px]">
                  State*
                </label>
                <input
                  placeholder=" "
                  type="text"
                  name="name"
                  // onChange={(e) => setemail(e.target.value)}
                  required
                  className=" h-[55px] w-full   outline-none text-[16px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-transparent"
                ></input>
              </div>
            </div>
          </form>
        </div>
        <div className="map-banner">
          <div className="gmap_canvas  ">
            <iframe
              className="gmap_iframe  h-[400px] w-full"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=bass hill plaza medical centre&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
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

export default MyProfile;
