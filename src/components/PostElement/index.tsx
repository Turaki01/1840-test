import CustomButton from "components/CustomButton";
import React from "react";
import { FaRegGrinAlt, FaRegImage } from "react-icons/fa";

const PostElement = () => {
  return (
    <div className="min-h-[20vh] bg-[#ffffff] p-6 rounded-lg">
      <div className="flex">
        <img
          className="w-[30px] h-[30px] rounded-full mr-4"
          src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
          alt="Connection"
        />

        <input
          placeholder="What's happening"
          className="outline-0 text-[13px] w-full"
        />
      </div>
      <div className="flex justify-between items-center mt-8">
        <div className="flex text-[13px] text-[#565d68]">
          <p className="mr-3 flex items-center"><FaRegImage className="mr-2" />Media</p>
          <p className="mr-3 flex items-center"><FaRegGrinAlt className="mr-2" /> Feeling</p>
        </div>
        <div className="w-[5rem]">
        <CustomButton  label="Post" />
        </div>
      </div>
    </div>
  );
};

export default PostElement;
