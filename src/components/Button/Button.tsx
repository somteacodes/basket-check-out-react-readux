import React, { FC } from "react";

type ButtonProps = {
  onClick: () => void;
  background: string;
  color: string;
  disabled?: boolean;
   testid?:string
};

export const Button: FC<ButtonProps> = ({
  children,
  background,
  color,
  onClick,
  disabled,
  testid
}) => (
  <div>
    <button
    data-testid={testid||'button'} 
      className={
        disabled
          ? "text-center px-4 py-2 bg-gray-400  text-white font-bold rounded-lg"
          : `text-center cursor-pointer px-4 py-2 ${background} ${color} hover:saturate-150 saturate-100 font-bold rounded-lg`
      }
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  </div>
);
