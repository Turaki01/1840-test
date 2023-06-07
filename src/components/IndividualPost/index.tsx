import { FeedsResponseInterface } from "interfaces/feeds";
import React from "react";
import {
  FaEllipsisH,
  FaHeart,
  FaPaperPlane,
  FaRegComment,
  FaRegGrinAlt,
  FaRegHeart,
  FaRegImage,
  FaShareAlt
} from "react-icons/fa";

interface IndividualPostProps {
  feedsResponseInterface: FeedsResponseInterface,
}

const IndividualPost: React.FC<IndividualPostProps> = ({
  feedsResponseInterface
}) => {
  return (
    <div className="min-h-[40vh] bg-[#ffffff] p-6 mt-6 rounded-md">
      <div>
        <div className="flex justify-between">
          <div className="flex">
            <img
              className="w-[30px] h-[30px] rounded-full"
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
              alt="Connection"
            />
            <div>
              <div className="flex items-center">
                <p className="pl-2 text-[#565d68] text-[14px]">
                 { feedsResponseInterface?.user?.name } {" "}
                </p>{" "}
                <div className="w-[6px] h-[6px] bg-[#b3b3b3] rounded-full mx-2"></div>
                <p className="text-[#b3b3b3] text-[12px]">8 Min</p>
              </div>
              <p className="pl-2 text-[#999898] text-[12px]">
               { feedsResponseInterface?.user?.course_of_study }
              </p>
            </div>
          </div>
          <div>
            <FaEllipsisH width={20} />
          </div>
        </div>
        <div className="mt-6 mx-10">
          {/* <div className="flex mb-3">
            <img
              className="w-[30px] h-[30px] rounded-full"
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
              alt=""
            />
            <div>
              <div className="flex items-center">
                <p className="pl-2 text-[#565d68] text-[14px]">
                  Chukwuemeka Bello{" "}
                </p>{" "}
                <div className="w-[6px] h-[6px] bg-[#b3b3b3] rounded-full mx-2"></div>
                <p className="text-[#b3b3b3] text-[12px]">8 Min</p>
              </div>
              <p className="pl-2 text-[#999898] text-[12px]">
                Mechanical Engineering
              </p>
            </div>
            <div></div>
          </div> */}
          <img
            className="w-[100%] h-[180px] object-cover rounded-md"
            src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
            alt="Connection"
          />

          <p className="text-[#565d68] text-[13px] mt-3">
            {feedsResponseInterface?.body}
          </p>

          <div className="flex mt-5 justify-between">
            <div className="flex">
              <img
                className="w-[20px] h-[20px] rounded-full"
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
                alt=""
              />
              <img
                className="w-[20px] h-[20px] rounded-full"
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
                alt=""
              />
              <div className="w-[20px] h-[20px] rounded-full bg-[#556479] text-[10px] text-[#ffffff] flex items-center justify-center">
                +5
              </div>
            </div>

            <div className="flex text-[#565d68] text-[11px]">
              <p className="mr-3">{feedsResponseInterface?.likes} likes</p>
              <p className="mr-3">{feedsResponseInterface?.comments} comments</p>
              <p>0 Reports</p>
            </div>
          </div>
        </div>
        <hr className="mt-4 pb-3" />
        <div className="flex">
          {feedsResponseInterface.like_status ? <FaHeart color="red" className="mr-2" /> : <FaRegHeart className="mr-2" />}
          <FaRegComment className="mr-2" />
          {" "}
          <FaShareAlt />
        </div>
        <hr className="mt-3" />

        <div className="flex mt-4 justify-between items-center">
          <div className="flex">
            <img
              className="w-[30px] h-[30px] rounded-full mr-3"
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
              alt=""
            />

            <input
              placeholder="Write a comment ...."
              className="outline-0 text-[13px] w-[400px]"
            />
          </div>
          <div className="flex items-center">
            <FaRegImage className="mr-2" />
            <FaRegGrinAlt className="mr-2" />

            <div className="bg-[#f1faff] w-[35px] cursor-pointer h-[35px] text-[#0472ef] font-[600] flex items-center justify-center rounded-md">
              <FaPaperPlane color="#0472ef" size={15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualPost;
