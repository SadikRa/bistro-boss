import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";

const Main = () => {
    const location = useLocation();
    const noHadersFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
           {noHadersFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
           {noHadersFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;