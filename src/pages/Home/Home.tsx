import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";

export const Home: FC = () => {
  return (
    <main>
      <div className="fixed w-full top-0 z-10">
        <Header />
      </div>
      <Outlet />
    </main>
  );
};
