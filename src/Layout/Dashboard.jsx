import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    // fetch admin role
    const { data: userRole, isLoading } = useQuery({
        queryKey: ['userRole'],
        queryFn: async () => {
            const data = await axios(`http://localhost:5000/users/${user?.email}`)
            return data.data;
        }
    })

    if (isLoading) return 'Loading...'

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-60 h-full bg-base-200 text-base-content">
                    <h2 className='text-center uppercase bg-orange-600 py-2 text-2xl font-semibold rounded text-white mb-10'>{userRole.role ? userRole.role : 'Student'}</h2>


                    {
                        userRole.role === 'admin' ? <>
                            <li> <Link to="/dashboard/manageclasses">Manage Classes</Link> </li>
                            <li> <Link to="/dashboard/allusers">Manage Users</Link> </li>
                        </> : userRole.role === 'instructor' ?
                            <>
                                <li> <Link to="/dashboard/addaclass">Add A Class</Link> </li>
                                <li> <Link to="/dashboard/myclasses">My Classes</Link> </li>
                            </> :
                            <>
                                <li> <Link to="/dashboard/selectedclasses">My Selected Classes</Link> </li>
                                <li> <Link to="/dashboard/enrollclasses">My Enrolled Classes</Link> </li>
                            </>
                    }

                    <div className='divider'></div>

                    <li> <Link to="/">Home</Link> </li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;