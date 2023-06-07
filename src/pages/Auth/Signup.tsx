import CustomButton from "components/CustomButton";
import InputComponent from "components/FormElements/inputs";
import React from "react";
import { useHistory } from "react-router";
import { Routes } from "routes/routes-constants";

const Signup = () => {
  const history = useHistory();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return <div>
    <h2 className="text-[20px] text-[#565d68] mb-3">Join and discover more</h2>


    <form
        className="mt-10"
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="mb-4">
          <InputComponent
            required
            name="email"
            placeHolder="example@gmail.com"
            title="Enter your university email"
            type="text"
          />
        </div>

        <div className="mb-4">
          <InputComponent
            required
            name="first_name"
            placeHolder="John"
            title="Enter your First Name"
            type="text"
          />
        </div>

        <div className="mb-4">
        <InputComponent
            required
            name="last_name"
            placeHolder="Doe"
            title="Enter your Last Name"
            type="text"
          />
        </div>

        <div className="mb-4">
          <InputComponent
            required
            name="graduation_date"
            placeHolder="1995"
            title="Enter your Graduation Year"
            type="date"
          />
        </div>


        <div className="mt-[4rem]">
          <CustomButton label="Next" type="submit" />
        </div>

        <p className="text-center mt-8 text-[#565d68] text-[15px]">
          Already have an account?
        <span className="text-[#0472ef] cursor-pointer" onClick={() => history.push(Routes.Login)}>Login</span>
      </p>

      <p className="text-[#565d68] text-center mt-6 mb-8 text-[13px] max-w-[20rem] mx-auto font-[500]">
        By clicking on &apos;Login&apos; you&apos;ve agreed to the{" "}
        <span className="text-[#0472ef] cursor-pointer">Terms of Use</span> and{" "}
        <span className="text-[#0472ef] cursor-pointer">Privacy Policy</span>
      </p>
      </form>
  </div>;
};

export default Signup;
