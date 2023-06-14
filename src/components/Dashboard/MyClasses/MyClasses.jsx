import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { Link } from "react-router-dom";


const MyClasses = () => {
    const { user } = useContext(AuthContext);

    // fetch admin role
    const { data: classByUser, isLoading } = useQuery({
        queryKey: ['classByUser'],
        queryFn: async () => {
            const data = await axios(`https://music-school-server-one.vercel.app/classes/${user?.email}`)
            return data.data;
        }
    })

    if (isLoading) return 'Loading...'

    console.log(classByUser);

    return (
        <div className="w-11/12">
            <h2>My Classas page</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-gray-100 text-black">
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Status</th>
                            <th>Total Enrolled</th>
                            <th>Feedback</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classByUser?.map((user, index) => <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td><img className="w-[80px] h-[60px] rounded-lg" src={user.image} alt="" /></td>
                                <td>{user.className}</td>
                                <td>{user.instructorName}</td>
                                <td>{user.status ? user.status : 'Pending'}</td>
                                <td>
                                    0
                                </td>
                                <td>
                                {user.feedback ? user.feedback : 'No feedback yet'}
                                
                                </td>
                                <td>
                                    <Link to={`/dashboard/update/${user._id}`}><button className="rounded btn btn-info">Update</button></Link>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;