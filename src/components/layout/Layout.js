import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import HeaderDesktop from "./header/HeaderDesktop";
import useIsTablet from "../../hooks/useIsTablet";
import HeaderMobile from "./header/HeaderMobile";

const Layout = () => {
  const isTablet = useIsTablet();

  return (
    <>
      {isTablet ? <HeaderMobile /> : <HeaderDesktop />}
      <Outlet />
      <Footer />
      <div
        id="toast-container"
        style={{ position: "fixed", bottom: 20, right: 20, zIndex: 9999 }}
      ></div>
    </>
  );
};

export default Layout;
