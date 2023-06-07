import { FormInputProps } from "interfaces/formElements";
import React from "react";

interface TextInputProps extends FormInputProps {
  type?: string;
  value?: string;
  disabled?: boolean;
  required?: boolean;
  autocomplete?: string;
  placeHolder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent: React.FC<TextInputProps> = ({
  title,
  type = "text",
  value,
  disabled = false,
  required = true,
  placeHolder = "",
  ...props
}) => {
  return (
    <div>
      <label className="block text-[#565d68] text-[13px] mb-2">{title}</label>
      <input
        placeholder={placeHolder}
        className="border border-[#dadbda] w-full h-[48px] rounded-md outline-none px-4 text-[300] text-[14px]"
        defaultValue={value}
        required={required}
        disabled={disabled}
        type={type}
        {...props}
      />
    </div>
  );
};

export default InputComponent;
