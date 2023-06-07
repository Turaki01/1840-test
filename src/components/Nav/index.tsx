import React from "react";
import { FaBell, FaSearch, FaWpforms } from "react-icons/fa";

const NavComponent = () => {
  return (
    <div className="bg-[#0472ef] h-[60px] sticky top-0 px-3 pt-2 z-10">
      <div className="flex justify-between ">
      <div className="relative mb-5">
        <FaSearch size={15} className="absolute left-3 top-3" color="#e2e2e28c" />
        <input
          type="text"
          placeholder=""
          className=" rounded-md pl-8 pr-4  font-[300] text-[13px] w-[17rem] h-[40px] border border-[#e2e2e28c] outline-0 bg-transparent text-[#ffffff]"
        />
      </div>


      <div className="flex pt-2">
        <FaBell color="#ffffff" className="mt-2" />

        <FaWpforms color="#ffffff" className="mt-2 mx-3"  />

        <img
              className="w-[30px] h-[30px] rounded-full"
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
              alt="Connection"
            />
      </div>
      </div>
    </div>
  );
};

export default NavComponent;
