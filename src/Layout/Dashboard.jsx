import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FaHome, FaAddressBook, FaAddressCard, FaUserEdit, FaUserSecret, FaUserCheck, FaUserClock } from 'react-icons/fa';

const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

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
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    // fetch admin role
    const { data: userRole, isLoading } = useQuery({
        queryKey: ['userRole'],
        queryFn: async () => {
            const data = await axios(`https://music-school-server-one.vercel.app/users/${user?.email}`)
            return data.data;
        }
    })

    if (isLoading) return 'Loading...'

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center ">
                {/* Page content here */}
                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-60 h-full bg-base-200 text-base-content">
                    <div className='bg-orange-600 rounded-lg py-4 mb-10'>
                        <h2 className='text-center uppercase text-2xl font-semibold text-white'>{userRole.role ? userRole.role : 'Student'}</h2>
                        <p className='text-center text-lg text-white'>{userRole.name}</p>
                        <p className='text-center text-lg text-white'>{userRole.email}</p>
                    </div>

                    {
                        userRole?.role === 'admin' ? <>
                            <li className='text-base font-semibold'> <Link to="/dashboard/manageclasses"> <FaUserSecret></FaUserSecret> Manage Classes</Link> </li>
                            <li className='text-base font-semibold'> <Link to="/dashboard/allusers"> <FaUserEdit></FaUserEdit> Manage Users</Link> </li>
                        </> : userRole?.role === 'instructor' ?
                            <>
                                <li className='text-base font-semibold'> <Link to="/dashboard/addaclass"> <FaAddressBook></FaAddressBook> Add A Class</Link> </li>
                                <li className='text-base font-semibold'> <Link to="/dashboard/myclasses"> <FaAddressCard></FaAddressCard> My Classes</Link> </li>
                            </> :
                            <>
                                <li className='text-base font-semibold'> <Link to="/dashboard/selectedclasses"> <FaUserClock></FaUserClock> My Selected Classes</Link> </li>
                                <li className='text-base font-semibold'> <Link to="/dashboard/enrollclasses"> <FaUserCheck></FaUserCheck> My Enrolled Classes</Link> </li>
                            </>
                    }

                    <div className='divider'></div>

                    <div className='flex flex-col'>
                        <li className='text-base font-semibold'> <Link to="/"> <FaHome></FaHome> Home</Link> </li>
                        <button disabled={user ? false : true} onClick={handleLogOut} className='btn btn-secondary mt-20'>Log Out</button>
                    </div>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;