import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageClasses = () => {
    const { data: classes, isLoading, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const data = await axios('https://music-school-server-one.vercel.app/classes')
            return data.data;
        }
    })

    if (isLoading) return 'Loading...'

    const handleApprove = classItem => {
        fetch(`https://music-school-server-one.vercel.app/classes/approve/${classItem._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${classItem.className} is an Approve Now!`,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }

    const handleDeny = classItem => {
        fetch(`https://music-school-server-one.vercel.app/classes/deny/${classItem._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${classItem.className} is Denied!`,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }


    return (
        <div className="">
            <h2 className="text-center text-3xl my-4 font-semibold text-gray-700">Manage All Classes</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-black bg-slate-200">
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Av. Sets</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes?.map((classItem, index) => <tr key={classItem._id}>
                                <td>{index + 1}</td>
                                <td> <img className="w-[60px] h-[40px] rounded-lg" src={classItem.image} alt="Class Image" /> </td>
                                <td>{classItem.className}</td>
                                <td>{classItem.instructorName}</td>
                                <td>{classItem.instructorEmail}</td>
                                <td>{classItem.availableSets}</td>
                                <td>{classItem.price}</td>

                                <td>{classItem.status ? classItem.status : 'Pending'}</td>


                                <td> <button disabled={classItem.status === 'Approved' ? true : false} onClick={() => handleApprove(classItem)} className=" rounded btn btn-info">Approve</button> </td>
                                <td> <button disabled={classItem.status === 'Denied' ? true : false} onClick={() => handleDeny(classItem)} className=" rounded btn btn-info">Deny</button> </td>
                                <td>
                                    <Link to={`/dashboard/feedback/${classItem._id}`}><button className="rounded btn btn-info">Send Feedback</button></Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>




            </div>
        </div>
    );
};

export default ManageClasses;