import React from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useStates } from "../States";
import { SiPrettier } from "react-icons/si";
const HarizontalNavbar = () => {
  const navigate = useNavigate();
  const { isPremium, gotoPlans } = useStates();
  return (
    <div className="w-full flex justify-between items-center h-10 px-64 pt-2">
      <div className="flex w-20 justify-between">
        <HiOutlineChevronLeft
          onClick={() => navigate(-1)}
          className="px-1 text-mp-black border text-3xl font-semibold cursor-pointer rounded-full bg-mp-gray"
        />
        <HiOutlineChevronRight
          onClick={() => navigate(+1)}
          className="px-1 text-mp-black border text-3xl font-semibold cursor-pointer rounded-full bg-mp-gray"
        />
      </div>
      {isPremium==="false" ? (
        <button
          onClick={gotoPlans}
          className="px-1 text-mp-white border text-base font-semibold rounded-xl"
        >
          Upgrade
        </button>
      ) : (
        <button className="flex justify-center items-center px-3 text-mp-black  border-spacing-1 border-mp-white text-base font-semibold rounded-xl bg-mp-gold">
          <SiPrettier />
          Premium
          <img
            className="w-8 ml-2 object-cover"
            src="https://svgsilh.com/svg/304838.svg"
            alt=""
          />
        </button>
      )}
    </div>
  );
};

export default HarizontalNavbar;
