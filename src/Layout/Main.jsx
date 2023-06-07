import { Outlet } from "react-router-dom";
import Footer from "../components/Home/Footer/Footer";
import Navbar from "../components/Home/Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;