import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
function Counters() {
  const [count, setcount] = useState(false);
  const handleCount = () => {
    setcount(!count);
  };
  return (
    <ScrollTrigger onEnter={handleCount} onExit={handleCount}>
      <div className="flex lg:flex-row  flex-wrap flex-col items-center   justify-between  p-7  ">
        <div className="flexCol  ">
          {count && (
            <h2 className="text-[#244034] !text-[70px] ">
              <CountUp start={0} end={30} duration={3} delay={0}></CountUp>
              &nbsp;k +
            </h2>
          )}
          <p className="text-grayColor">World wide Client</p>
        </div>
        <div className="flexCol  ">
          {count && (
            <h2 className="text-[#244034] !text-[70px] ">
              <CountUp start={0} end={3} duration={3} delay={0}></CountUp> %
            </h2>
          )}
          <p className="text-grayColor">Top Talents</p>
        </div>
        <div className="flexCol  ">
          {count && (
            <h2 className="text-[#244034] !text-[70px] ">
              <CountUp start={0} end={13} duration={3} delay={0}></CountUp>K +
            </h2>
          )}
          <p className="text-grayColor">Dollar Payout</p>
        </div>
      </div>
    </ScrollTrigger>
  );
}

export default Counters;
