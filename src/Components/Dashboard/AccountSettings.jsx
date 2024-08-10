import React from "react";

function AccountSettings() {
  return (
    <div className="relative ">
      <h3 className="text-[#244034] text-[30px] mb-8">Account Settings</h3>
      <div className="lg:px-[45px] px-[20px] py-[40px] rounded-[20px] bg-white">
        <div className="my-3">
          <form>
            <div className="my-4">
              <h4 className="text-[24px] text-[#31795a] mt-[0] mx-[0] mb-[30px]">
                Edit & Update
              </h4>
              <div className="grid grid-cols-12 gap-4">
                <div className="lg:col-span-6 col-span-12">
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
                <div className="lg:col-span-6 col-span-12">
                  <label className="text-[17x] font-medium text-grayColor block mb-[6px]">
                    Last Name*
                  </label>
                  <input
                    placeholder="Kabir"
                    type="text"
                    name="name"
                    // onChange={(e) => setemail(e.target.value)}
                    required
                    className="w-full h-[55px] outline-none text-[16px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-transparent"
                  ></input>
                </div>
                <div className=" col-span-12">
                  <label className="text-[17x] font-medium text-grayColor block mb-[6px]">
                    Email*
                  </label>
                  <input
                    placeholder="@gmail.com"
                    type="email"
                    name="name"
                    // onChange={(e) => setemail(e.target.value)}
                    required
                    className="w-full h-[55px] outline-none text-[16px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-transparent"
                  ></input>
                </div>
                <div className=" col-span-12">
                  <label className="text-[17x] font-medium text-grayColor block mb-[6px]">
                    Phone Number*
                  </label>

                  <input
                    placeholder="+810 321 889 021"
                    type="number"
                    name="name"
                    // onChange={(e) => setemail(e.target.value)}
                    required
                    className="w-full h-[55px] outline-none text-[16px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-transparent"
                  ></input>
                </div>
                <div className=" col-span-12">
                  <label className="text-[17x] font-medium text-grayColor block mb-[6px]">
                    Passwords*
                  </label>

                  <input
                    type="password"
                    name="name"
                    // onChange={(e) => setemail(e.target.value)}
                    required
                    className="w-full h-[55px] outline-none text-[16px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-transparent"
                  ></input>
                </div>
                <div className=" col-span-12">
                  <div className="flex flex-row items-center gap-4">
                    <a
                      href="#"
                      className="font-medium text-[#fff] min-w-[125px] text-center px-[15px] py-[0] leading-[45px] rounded-[6px] bg-[#244034] hover:bg-[#CEEF4B] hover:text-black duration-200"
                    >
                      Save
                    </a>
                    <a
                      href="#"
                      className="font-medium text-[#31795a] cursor-pointer"
                    >
                      Cancel
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="lg:px-[45px] px-[20px] py-[40px] rounded-[20px] bg-white mt-8">
        <div className="my-3">
          <form>
            <div className="my-4">
              <h4 className="text-[24px] text-[#31795a] mt-[0] mx-[0] mb-[30px]">
                Change Password
              </h4>
              <div className="grid grid-cols-12 gap-4">
                <div className=" col-span-12">
                  <label className="text-[17x] font-medium text-grayColor block mb-[6px]">
                    Old Password*
                  </label>
                  <input
                    type="password"
                    name="name"
                    // onChange={(e) => setemail(e.target.value)}
                    required
                    className="w-full h-[55px] outline-none text-[16px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-transparent"
                  ></input>
                </div>
                <div className=" col-span-12">
                  <label className="text-[17x] font-medium text-grayColor block mb-[6px]">
                    New Password*
                  </label>
                  <input
                    type="password"
                    name="name"
                    // onChange={(e) => setemail(e.target.value)}
                    required
                    className="w-full h-[55px] outline-none text-[16px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-transparent"
                  ></input>
                </div>
                <div className=" col-span-12">
                  <label className="text-[17x] font-medium text-grayColor block mb-[6px]">
                    Confirm Password*
                  </label>
                  <input
                    type="password"
                    name="name"
                    // onChange={(e) => setemail(e.target.value)}
                    required
                    className="w-full h-[55px] outline-none text-[16px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-transparent"
                  ></input>
                </div>
              </div>
              <div className="flex flex-row items-center gap-4 mt-3">
                <a
                  href="#"
                  className="font-medium text-[#fff] min-w-[125px] text-center px-[15px] py-[0] leading-[45px] rounded-[6px] bg-[#244034] hover:bg-[#CEEF4B] hover:text-black duration-200"
                >
                  Save
                </a>
                <a
                  href="#"
                  className="font-medium text-[#31795a] cursor-pointer"
                >
                  Cancel
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;
