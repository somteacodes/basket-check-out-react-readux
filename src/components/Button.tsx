import React, { FC } from "react";

type ButtonProps = {
  onClick: () => void;
  background: string;
  color: string;
  disabled?: boolean;
};

export const Button: FC<ButtonProps> = ({
  children,
  background,
  color,
  onClick,
  disabled,
}) => (
  <div>
    <button
      className={
        disabled
          ? "text-center cursor-pointer px-4 py-2 bg-gray-400  text-white font-bold rounded-lg"
          : `text-center cursor-pointer px-4 py-2 ${background} ${color} hover:saturate-150 saturate-100 font-bold rounded-lg`
      }
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  </div>
);
