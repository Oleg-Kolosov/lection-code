import { Outlet } from "react-router-dom";

import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const MainTemplate = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <div className="container flex-grow-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
