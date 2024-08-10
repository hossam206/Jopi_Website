import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { Tags, categoryarr } from "../../assets/asset";
import { useDispatch, useSelector } from "react-redux";
import { ShowAllPosts } from "../../firebase/mainfunction";

export default function JobfilterComp({
  showfilter,
  onFilterDataUpdate,
  handlesideDive,
}) {
  const dispatch = useDispatch();
  const postsjobs = useSelector((state) => state.jobsPosts.publishJopPosts);
  // show more btn
  const [morecategory, setmorecategory] = useState(5);
  const [morecompany, setmorecompany] = useState(5);
  const [Jops, setJops] = useState([]); // this that carry all target jops
  const [field, setField] = useState(""); //this which have where is should search in position or location
  const [filterdata, setFilterData] = useState([]); // this will carry final result
  const [selectedCompany, setSelectedCompany] = useState(null); //this for handle select one item in checkbox
  const [selectedCategory, setselectedCategory] = useState(null);
  const fixedMaxSalary = 115000;
  //  show more category function
  const ShowMorecategory = (e) => {
    setmorecategory((prevCount) => prevCount + 5);
    e.preventDefault();
  };
  //  show more company function
  const ShowMorecompany = (e) => {
    setmorecompany((prevCount) => prevCount + 5);
    e.preventDefault();
  };
  // show and hide elements
  const [dropdown, setDropdowns] = useState();
  const toggleDropdown = (index) => {
    setDropdowns(dropdown === index ? null : index);
    const id = event.target.id; // Assuming event.target is the element you want to get id from
    setField(id);
  };
  // get the companies
  const [companies, setcompaines] = useState([]);
  const getGompaines = (jops) => {
    const uniqueCompanies = jops.map((Jop) => Jop.company);
    const TargetCompany = uniqueCompanies.filter(
      (item, index) => uniqueCompanies.indexOf(item) === index
    );
    setcompaines(TargetCompany);
  };

  // now this function show what i search about
  const searchValue = (e) => {
    const value = e.target.value;
    setSelectedCompany(value); // to select one choise
    setselectedCategory(value); // to select one choise
    const result = Jops.filter(
      (jop) =>
        jop[field] && jop[field].toLowerCase().includes(value.toLowerCase())
    );
    setFilterData(result);
  };
  onFilterDataUpdate(filterdata);

  //  handle salary
  const handleSalary = (e) => {
    const value = Number(e.target.value); // Convert input to number
    const result = filterdata.filter((jop) => {
      return jop && jop.salary_min >= value && jop.salary_min <= fixedMaxSalary;
    });
    setFilterData(result);
  };
  //  get recent added jops
  const getLatestJops = () => {
    setFilterData(postsjobs);
  };

  // get all jops
  useEffect(() => {
    dispatch(ShowAllPosts());
    fetch("https://remoteok.com/api")
      .then((Response) => Response.json())
      .then((data) => {
        const jobData = data.slice(1);
        setJops(jobData);
      })
      .catch((error) => console.log(error));
    getGompaines(Jops);
  }, [field]);
 
  return (
    <div
      className={` bg-[#EFF6F3] md:w-3/12 md:flex  md:relative flex-col gap-4 items-start rounded-[10px] pb-[30px]  !pl-6 !pr-6 py-[30px] clear-both w-[320px] max-w-[calc(100vw - 60px)] pt-[32px] px-[12px] overflow-scroll
          [transition:all_.3s_ease-in-out] fixed top-0 left-0 h-screen z-30  md:h-fit md:overflow-hidden md:z-10 -translate-x-full md:translate-x-[0]
         ${showfilter}`}
    >
      <div className="flex flex-row justify-between items-center w-full mb-2 md:hidden">
        <h2 className="md:hidden  w-full font-thin">Filter By</h2>
        <div
          className="w-9  h-9  rounded-md flex items-center justify-center cursor-pointer transition all ease-in-out   hover:text-red-500 "
          onClick={handlesideDive}
        >
          <IoCloseOutline className="text-3xl" />
        </div>
      </div>

      <div className=" w-full border-b border-solid border-[#31795a56] py-4 relative">
        <div
          href="#"
          className="flex flex-row justify-between items-center font-semibold"
        >
          Location
          <span>
            <IoIosArrowDown
              id="location"
              className="cursor-pointer p-1 text-[24px]    text-[#818181]   border  border-solid border-[rgba(0,0,0,.15)]  rounded-full hover:bg-[#31795A] hover:text-white duration-200"
              onClick={(e) => {
                toggleDropdown(1, e);
              }}
            />
          </span>
        </div>
        {dropdown === 1 && (
          <div
            className={`flex  flex-col  [transition:h 2s_ease-in-out] ${
              dropdown === 1
                ? "max-h-[200px] opacity-100 translate-y-[0]"
                : "max-h-[0] opacity-0"
            }`}
          >
            <div className="w-full mt-2">
              <label className="smallp !p-0 !m-0">Filter By Location</label>
              <input
                placeholder="Enter Your Target Location"
                type="text"
                name="name"
                onChange={searchValue}
                className="w-full h-[45px] outline-none text-[14px] border border-solid border-[#e5e5e5] rounded-[8px] pl-[10px] pr-[42px] py-[0] text-[#000] bg-white"
              ></input>
            </div>
          </div>
        )}
      </div>

      <div className=" w-full border-b border-solid border-[#31795a56] py-4 relative">
        <div
          href="#"
          className="flex flex-row justify-between items-center font-semibold"
        >
          companies
          <span>
            <IoIosArrowDown
              id="company"
              className="cursor-pointer p-1 text-[24px]     text-[#818181]   border  border-solid border-[rgba(0,0,0,.15)]  rounded-full hover:bg-[#31795A] hover:text-white duration-200"
              onClick={(e) => {
                toggleDropdown(2, e);
              }}
            />
          </span>
        </div>
        {dropdown == 2 && (
          <div
            className={`flex  flex-col  [transition:h 2s_ease-in-out] ${
              dropdown === 2
                ? "h-fit opacity-100 translate-y-[0]"
                : "max-h-[0] opacity-0"
            }`}
          >
            <ul className="flex flex-col gap-2 my-1  ">
              {companies.slice(1, morecompany).map((company, index) => (
                <li
                  className="flex flex-row items-center justify-between"
                  key={index}
                >
                  <div className="flex flex-row items-center gap-2">
                    <input
                      type="checkBox"
                      value={company}
                      checked={selectedCompany === company}
                      name="company"
                      onChange={searchValue}
                    />
                    <span className="text-[14px]  text-neutral-700">
                      {company}
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-center text-[#000] leading-[20px] w-[20px] h-[20px] rounded-[50%] bg-[#fff] float-right mt-[7px]">
                     
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div
              className="mt-[10px] text-[#fff] text-[12px] leading-[28px] font-medium cursor-pointer bg-[rgba(36,_64,_52,_.6)] text-center rounded-[5px] [transition:all_.2s_ease-in-out_0s]s hover:bg-mainColor"
              onClick={ShowMorecompany}
            >
              <a href="#" className="outline-none">
                Show More
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="w-full border-b border-solid border-[#31795a56] py-4">
        <div
          href="#"
          className="flex flex-row justify-between items-center font-semibold"
        >
          Salary
          <span>
            <IoIosArrowDown
              id="salary_min"
              className="cursor-pointer  p-1 text-[24px]    text-[#818181]   border  border-solid border-[rgba(0,0,0,.15)]  rounded-full hover:bg-[#31795A] hover:text-white duration-200"
              onClick={(e) => {
                toggleDropdown(3, e);
              }}
            />
          </span>
        </div>

        {dropdown == 3 && (
          <div>
            <div className="flex flex-row items-center gap-2  py-2">
              <input
                type="number"
                placeholder="MinSalary"
                onChange={handleSalary}
                className="smallinput"
              />
              <small>-</small>
              <input
                type="number"
                placeholder="MaxSalary"
                className="smallinput"
                readOnly
                value={115000}
              />
              <span className="text-[14px]  text-neutral-700">USD</span>
            </div>
            <ul className="[list-style:none] flex flex-row items-center mt-2">
              <li className="relative w-auto mt-[0] mx-[8px] mb-[5px]">
                <input
                  type="radio"
                  name="jobDuration"
                  value="01"
                  className="absolute opacity-0 w-full h-full left-[0] cursor-pointer"
                />
                <label className="relative text-[11px] font-medium   bg-[#fff] text-[#31795a] rounded-[20px] px-[12px] py-[7px] [transition:all_.1s_ease-in-out_0s] ">
                  Weekly
                </label>
              </li>
              <li className="relative w-auto mt-[0] mx-[8px] mb-[5px]">
                <input
                  type="radio"
                  name="jobDuration"
                  value="01"
                  className="absolute opacity-0 w-full h-full left-[0] cursor-pointer"
                />
                <label className="relative text-[11px] font-medium   bg-[#fff] text-[#31795a] rounded-[20px] px-[12px] py-[7px] [transition:all_.1s_ease-in-out_0s] ">
                  Monthly
                </label>
              </li>
              <li className="relative w-auto mt-[0] mx-[8px] mb-[5px]">
                <input
                  type="radio"
                  name="jobDuration"
                  value="01"
                  className="absolute opacity-0 w-full h-full left-[0] cursor-pointer"
                />
                <label className="relative text-[11px] font-medium   bg-[#fff] text-[#31795a] rounded-[20px] px-[12px] py-[7px] [transition:all_.1s_ease-in-out_0s] ">
                  Year
                </label>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="w-full border-b border-solid border-[#31795a56] py-4">
        <div
          className="flex flex-row justify-between items-center
          font-semibold"
        >
          Category
          <span>
            <IoIosArrowDown
              id="position"
              className="cursor-pointer  p-1 text-[24px]    text-[#818181]   border  border-solid border-[rgba(0,0,0,.15)]  rounded-full hover:bg-[#31795A] hover:text-white duration-200"
              onClick={(e) => {
                toggleDropdown(4, e);
              }}
            />
          </span>
        </div>
        {dropdown == 4 && (
          <div className="mt-2">
            <ul className="flex flex-col gap-2 my-1">
              {categoryarr.slice(1, morecategory).map((category, index) => (
                <li
                  className="flex flex-row items-center justify-between"
                  key={index}
                >
                  <div className="flex flex-row items-center justify-start gap-1">
                    <input
                      type="checkBox"
                      value={category.value}
                      checked={selectedCategory === category.value}
                      onChange={searchValue}
                    />
                    <span className="text-[14px]  text-neutral-700">
                      {category.key}
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-center text-[#000] leading-[20px] w-[20px] h-[20px] rounded-[50%] bg-[#fff] float-right mt-[7px]">
                      
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div
              className="mt-[10px] text-[#fff] text-[12px] leading-[28px] font-medium cursor-pointer bg-[rgba(36,_64,_52,_.6)] text-center rounded-[5px] [transition:all_.2s_ease-in-out_0s]s hover:bg-mainColor"
              onClick={ShowMorecategory}
            >
              <a href="#" className="outline-none">
                Show More
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="w-full   py-4">
        <div className="flex flex-row justify-between items-center font-semibold">
          Date
          <span>
            <IoIosArrowDown
              id="Date"
              className="cursor-pointer  p-1 text-[24px]    text-[#818181]   border  border-solid border-[rgba(0,0,0,.15)]  rounded-full hover:bg-[#31795A] hover:text-white duration-200"
              onClick={(e) => {
                toggleDropdown(5, e);
              }}
            />
          </span>
        </div>
        {dropdown == 5 && (
          <ul className="flex flex-col gap-2 my-3">
            {Tags.map((Tag, index) => (
              <li
                className="flex flex-row items-center justify-between"
                key={index}
              >
                <div className="flex flex-row items-center justify-start gap-1">
                  <input type="checkBox" value={Tag} onChange={getLatestJops} />
                  <span className="text-[14px]  text-neutral-700">{Tag}</span>
                </div>
                <div>
                  <span className="text-[11px] font-medium text-center text-[#000] leading-[20px] w-[20px] h-[20px] rounded-[50%] bg-[#fff] float-right mt-[7px]">
                    {postsjobs.length}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* <div className="w-full">
        {Jops.length > 0 ? (
          <button className="mt-[10px] text-[#fff] text-[12px] leading-[28px] font-medium cursor-pointer bg-[#31795A] py-2 duration-200  rounded-[5px]  hover:bg-mainColor w-full outline-none">
            Apply Filter
          </button>
        ) : (
          <button className="mt-[10px] text-[#fff] text-[12px] leading-[28px] font-medium cursor-pointer bg-[#31795A] py-2 duration-200  rounded-[5px]  hover:bg-mainColor w-full outline-none">
            Reset Filter
          </button>
        )}
      </div> */}
    </div>
  );
}
