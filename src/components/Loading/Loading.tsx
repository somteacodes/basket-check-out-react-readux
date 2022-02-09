import { FC } from "react";

type LoadingProp = {
  show: boolean;
};
const Loading: FC<LoadingProp> = ({ show }) => {
  return (
    <>
      {show && (
        <div className=" bg-black bg-opacity-50 w-screen h-screen z-[99999]  grid place-items-center ">
          <div className="  w-10 h-10 rounded-full bg-yellow-200 animate-ping "></div>
        </div>
      )}
    </>
  );
};

export default Loading;
