import { FormInputProps } from "interfaces/formElements";
import React from "react";
import { ReactComponent as EyeSolid } from "assets/svg/eye-solid.svg";
import { ReactComponent as EyeSlashSolid } from "assets/svg/eye-slash-solid.svg";

interface TextInputProps extends FormInputProps {
  title: string;
  value?: string;
  disabled?: boolean;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInputComponent: React.FC<TextInputProps> = ({
  value,
  title,
  required,
  disabled,
  ...props
}) => {
  const [passwordShow, setPasswordShow] = React.useState(false);

  return (
    <div className="relative">
      <label className="block text-[#565d68] text-[13px] mb-2">{title}</label>
      <input
        className="border border-[#dadbda] w-full h-[48px] rounded-md outline-none px-4 text-[14px]"
        defaultValue={value}
        required={required}
        disabled={disabled}
        type={passwordShow ? "text" : "password"}
        {...props}
      />

        {passwordShow ? (
          <EyeSolid onClick={() => setPasswordShow(!passwordShow)} className="cursor-pointer absolute top-[48px] z-1 right-[15px]" style={{ maxWidth: "14px" }} />
        ) : (
          <EyeSlashSolid onClick={() => setPasswordShow(!passwordShow)} className="cursor-pointer absolute top-[48px] z-1 right-[15px]"  style={{ maxWidth: "15px" }} />
        )}
    </div>
  );
};

export default PasswordInputComponent;
