import React from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
const Payment = () => {
  const navigate = useNavigate();
  return (
    <div>
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
    </div>
  );
};

export default Payment;
