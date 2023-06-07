import React from "react";

interface ButtonProps {
  type?: "submit" | "button" | "reset";
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  isLoading?: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({
  type = "submit",
  label,
  disabled,
  isLoading,
  onClick
}) => {
  return (
    <button
      type={type}
      className="bg-[#0472ef] h-[45px] text-white w-full rounded-md"
      onClick={onClick}
      disabled={disabled}
    >
      {isLoading ? <div>Loading...</div> : label}
    </button>
  );
};

export default CustomButton;
