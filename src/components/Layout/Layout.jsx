import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar.jsx";
import { Header } from "../Header/Header.jsx";

import css from "../Layout/Layout.module.css";

export const Layout = () => {
  return (
    <div className={css.container}>
      <Sidebar />

      <Header />

      <Outlet />
    </div>
  );
};
