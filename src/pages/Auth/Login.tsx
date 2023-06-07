import CustomButton from "components/CustomButton";
import InputComponent from "components/FormElements/inputs";
import PasswordInputComponent from "components/FormElements/inputs/passwordInput";
import React from "react";
import { useHistory } from "react-router";
import { Routes } from "routes/routes-constants";
import { handleAxiosError } from "services/api/handleAxiosError";
import { loginService } from "services/endpoints/user";
import { loginKey, userKey } from "utils/constants";
import storage from "utils/storage";

const Login = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [inputField, setInputField] = React.useState<{
    email?: string;
    password?: string;
  }>({
    email: "",
    password: ""
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await loginService({
        university_email: inputField.email || "",
        password: inputField.password || ""
      });
      if (response.data.response_code === 200) {
        storage.set(loginKey, response.data.token);
        storage.set(userKey, response.data.user);
        window.location.reload();
      }
    } catch (error) {
      handleAxiosError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <h2 className="text-[20px] text-[#565d68] mb-2">Hey, welcome back!</h2>

      <p className="text-[14px] text-[#969696]">
        Continue enjoying amazing discoveries
      </p>

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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInputField({
                ...inputField,
                email: e.target.value
              });
            }}
          />
        </div>

        <div className="mb-4">
          <PasswordInputComponent
            title="Enter your password"
            name="password"
            required
            placeholder="Enter your password"
            value={inputField.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInputField({
                ...inputField,
                password: e.target.value
              });
            }}
          />
        </div>

        <div className="mt-[3rem]">
          <CustomButton label="Login" type="submit" isLoading={isLoading} />
        </div>
      </form>

      <p className="text-center mt-8 text-[#565d68] text-[14px]">
        Don&apos;t have an account ?{" "}
        <span
          className="text-[#0472ef] cursor-pointer"
          onClick={() => history.push(Routes.Signup)}
        >
          Sign Up
        </span>
      </p>
      <p className="text-center mt-2 text-[#0472ef] text-[14px] cursor-pointer">
        Forgot your password?
      </p>

      <p className="text-[#565d68] text-center mt-10 text-[13px] max-w-[20rem] mx-auto font-[500]">
        By clicking on &apos;Login&apos; you&apos;ve agreed to the{" "}
        <span className="text-[#0472ef] cursor-pointer">Terms of Use</span> and{" "}
        <span className="text-[#0472ef] cursor-pointer">Privacy Policy</span>
      </p>
    </div>
  );
};

export default Login;
