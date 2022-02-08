import React, { FC } from "react";

type ButtonProps ={
  onClick: () => void;
  background: string;
  color: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  background,
  color,
  onClick,
}) => (
    <div>
      <button
        className={`text-center cursor-pointer px-4 py-2 ${background} ${color} hover:saturate-150 saturate-100 font-bold rounded-lg`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );

