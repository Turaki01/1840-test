import React from "react";

const CoursesComponent = () => {
  return (
    <div>
      <div className="flex justify-between text-[14px] mb-2">
        <p className="text-[#565d68]">Courses</p>

        <p className="text-[#0472ef] cursor-pointer">See All</p>
      </div>

      <hr />

      <div>
        <div className="flex my-4 justify-between">
          <div className="flex">
            <div className="bg-[#f1faff] w-[40px] h-[40px] text-[#0472ef] font-[600] flex items-center justify-center">
              EM
            </div>
            <div className="ml-3">
              <p className="text-[14px] text-[#565d68]">
                Elementary Mathematics
              </p>
              <p className="text-[11px] text-[#a9a9a9]">PHYS120</p>
            </div>
          </div>

          <p className="text-[12px] text-[#0472ef] underline cursor-pointer">View</p>
        </div>

        <hr />

        <div className="flex my-4 justify-between">
          <div className="flex">
            <div className="bg-[#f1faff] w-[40px] h-[40px] text-[#0472ef] font-[600] flex items-center justify-center">
              PO
            </div>
            <div className="ml-3">
              <p className="text-[14px] text-[#565d68]">
                Principles of physics
              </p>
              <p className="text-[11px] text-[#a9a9a9]">PHYS120</p>
            </div>
          </div>

          <p className="text-[12px] text-[#0472ef] underline cursor-pointer">View</p>
        </div>

        <hr />


        <div className="flex my-4 justify-between">
          <div className="flex">
            <div className="bg-[#f1faff] w-[40px] h-[40px] text-[#0472ef] font-[600] flex items-center justify-center">
              FO
            </div>
            <div className="ml-3">
              <p className="text-[14px] text-[#565d68]">
                Foundamentals of Business
              </p>
              <p className="text-[11px] text-[#a9a9a9]">PHYS120</p>
            </div>
          </div>

          <p className="text-[12px] text-[#0472ef] underline cursor-pointer">View</p>
        </div>

        <hr />
      </div>
    </div>
  );
};

export default CoursesComponent;
