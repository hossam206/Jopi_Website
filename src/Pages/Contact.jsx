import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import withLoader from "../Components/HigherOrderComp/HigherorederLoader";

function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [Subject, setSubject] = useState("");
  const [message, setmessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setname("");
    setemail("");
    setSubject("");
    setmessage("");
  };
  return (
    <div>
      <Navbar />
      <div className="map-banner">
        <div className="gmap_canvas  ">
          <iframe
            className="gmap_iframe  h-screen w-full"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=bass hill plaza medical centre&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
      <div className="pt-[40px]">
        <div className="Container">
          <div>
            <div className=" text-center mb-[70px] lg-mb-[40px]">
              <h2 className="lg:text-[62px]">Get in touch</h2>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:justify-between pb-[100px] gap-10 max-w-[900px] m-auto">
              <div className="flex flex-col items-center justify-center">
                <div className="w-[70px] h-[70px] bg-[#eff6f3] rounded-full flexRow justify-center">
                  <img
                    src="/Images/contact/icon_57.29f0c93f.svg"
                    className="w-[30px] h-[30px]"
                  />
                </div>
                <h4 className="text-[24px] pt-[20px] px-[0] pb-[5px] ">
                  Our Address
                </h4>
                <p className="text-[17px] leading-[1.76em] text-[#878787] text-center">
                  Bass Hill Plaza Medical Centre
                  <br /> Sydney, Australia
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="w-[70px] h-[70px] bg-[#eff6f3] rounded-full flexRow justify-center">
                  <img
                    src="/Images/contact/icon_58.c44d24ea.svg"
                    className="w-[30px] h-[30px]"
                  />
                </div>
                <h4 className="text-[24px] pt-[20px] px-[0] pb-[5px] ">
                  Contact Info
                </h4>
                <p className="text-[17px] leading-[1.76em] text-[#878787] text-center">
                  Open a chat or give us call at
                  <br />
                  <a
                    href="tel:310.841.5500"
                    className="text-[#31795A] hover:underline "
                  >
                    310.841.5500
                  </a>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="w-[70px] h-[70px] bg-[#eff6f3] rounded-full flexRow justify-center">
                  <img
                    src="/Images/contact/icon_59.95220d5e.svg"
                    className="w-[30px] h-[30px]"
                  />
                </div>
                <h4 className="text-[24px] pt-[20px] px-[0] pb-[5px] ">
                  Live Support
                </h4>
                <p className="text-[17px] leading-[1.76em] text-[#878787] text-center">
                  live chat service
                  <br />
                  <a href="#" className="text-[#31795A] underline ">
                    www.jobilivechat.com{" "}
                  </a>
                </p>
              </div>
            </div>
            <div className="mt-5 pb-[100px] flex flex-col gap-10 max-w-[900px] m-auto px-3">
              <form onSubmit={handleSubmit}>
                <div className="flex items-center flex-col lg:flex-row  w-full gap-9 ">
                  <div className="relative lg:w-6/12 w-full">
                    <label className="text-[14px] font-normal text-[rgba(0,_0,_0,_.5)] block mb-[6px]">
                      Name *
                    </label>
                    <input
                      placeholder="James Brower"
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                      required
                      className="w-full h-[55px] outline-none text-[16px] border border-solid border-[rgba(0,0,0,.06)] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-[rgba(49,_121,_90,_.09)]"
                    ></input>
                  </div>
                  <div className="relative lg:w-6/12 w-full">
                    <label className="text-[14px] font-normal text-[rgba(0,_0,_0,_.5)] block mb-[6px]">
                      email *
                    </label>
                    <input
                      placeholder="Email Address"
                      type="email"
                      name="name"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      required
                      className="w-full h-[55px] outline-none text-[16px] border border-solid border-[rgba(0,0,0,.06)] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-[rgba(49,_121,_90,_.09)]"
                    ></input>
                  </div>
                </div>
                <div className="relative  w-full ">
                  <label className="text-[14px] font-normal text-[rgba(0,_0,_0,_.5)] block mb-[6px]">
                    Subject (optional)
                  </label>
                  <input
                    placeholder="Write about the subject here.."
                    type="text"
                    name="name"
                    value={Subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="w-full h-[55px] outline-none text-[16px] border border-solid border-[rgba(0,0,0,.06)] rounded-[8px] pl-[20px] pr-[52px] py-[0] text-[#000] bg-[rgba(49,_121,_90,_.09)]"
                  ></input>
                </div>
                <div className="relative  w-full ">
                  <label className="text-[14px] font-normal text-[rgba(0,_0,_0,_.5)] block mb-[6px]">
                    email *
                  </label>
                  <textarea
                    placeholder="Your Message"
                    type="text"
                    name="message"
                    value={message}
                    onChange={(e) => setmessage(e.target.value)}
                    required
                    className="w-full h-[200px] outline-none text-[16px] border border-solid border-[rgba(0,0,0,.06)] rounded-[8px] pl-[20px] pr-[52px] py-[10px] text-[#000] bg-[rgba(49,_121,_90,_.09)]"
                  ></textarea>
                </div>
                <div className="my-8">
                  <button
                    type="submit"
                    className="w-full outline-none leading-[50px] text-center block mx-[auto] my-[0] font-medium tracking-[-.5px] text-[#fff]  bg-[#31795A] rounded-[10px] capitalize hover:bg-mainColor duration-200"
        
                  >
                    send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withLoader(Contact);
