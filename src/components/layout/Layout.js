import {Outlet} from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {

    return (
        <>
            <Outlet/>
            <Footer/>
            <div id="toast-container" style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 9999 }}></div>
        </>
    )
}

export default Layout;