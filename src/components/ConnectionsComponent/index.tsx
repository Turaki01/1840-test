import React from "react";
import { FaSearch } from "react-icons/fa";

const ConnectionsComponent = () => {
  return (
    <div>
      <div className="flex justify-between text-[14px] mb-2">
        <p className="text-[#565d68]">Connections</p>

        <p className="text-[#0472ef] cursor-pointer">See All</p>
      </div>

      <hr />

      <div className="mb-5 mt-3">
        <div className="relative mb-5">
          <FaSearch size={15} className="absolute left-3 top-3" color="#565d68" />
          <input type="text" placeholder="Search Connections" className="pl-8 pr-4 font-[300] text-[13px] w-full h-[40px] border border-[#dadbda] outline-0"/>
        </div>
        <div className="flex items-center mb-3 justify-between">
          <div className="flex items-center">
            <img
              className="w-[30px] h-[30px] rounded-full"
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
              alt="Connection"
            />
            <p className="pl-2 text-[#565d68] text-[13px]">Helen Richards</p>
          </div>

          <div className="w-[10px] h-[10px] bg-[#30a96b] rounded-full"></div>
        </div>

        <div className="flex items-center mb-3 justify-between">
          <div className="flex items-center">
            <img
              className="w-[30px] h-[30px] rounded-full"
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
              alt="Connection"
            />
            <p className="pl-2 text-[#565d68] text-[13px]">Chukwuemeka Bello</p>
          </div>
        </div>

        <div className="flex items-center mb-3 justify-between">
          <div className="flex items-center">
            <img
              className="w-[30px] h-[30px] rounded-full"
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
              alt="Connection"
            />
            <p className="pl-2 text-[#565d68] text-[13px]">Amina Ahmed</p>
          </div>
        </div>

        <div className="flex items-center mb-3 justify-between">
          <div className="flex items-center">
            <img
              className="w-[30px] h-[30px] rounded-full"
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
              alt="Connection"
            />
            <p className="pl-2 text-[#565d68] text-[13px]">Amina Ahmed</p>
          </div>
        </div>

        <div className="flex items-center mb-3 justify-between">
          <div className="flex items-center">
            <img
              className="w-[30px] h-[30px] rounded-full"
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
              alt="Connection"
            />
            <p className="pl-2 text-[#565d68] text-[13px]">Amina Ahmed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionsComponent;
