import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const navItems = <>
        <li> <Link to='/'>Home</Link> </li>
        <li> <Link to='/instructorpage'>Instructors</Link> </li>
        <li> <Link to='/allClasses'>Classes</Link> </li>
        {user && <li> <Link to='/dashboard'>Dashboard</Link> </li>}
        <li>
            <Link to='/dashboard/selectedclasses'>
                <button className="flex gap-2 justify-center ">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>
            </Link>
        </li>
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Logout Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="bg-base-200 z-20">
            <div className="navbar max-w-[1280px] mx-auto px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ?
                            <div className="avatar flex items-center">
                                <div className="w-12 rounded-full">
                                    {user && <img referrerPolicy="no-referrer" src={user?.photoURL} />}
                                </div>
                                <button onClick={handleLogOut} className="ml-5 btn">Log Out</button>
                            </div>
                            :
                            <Link to='/login'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;