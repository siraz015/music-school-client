import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";


const AllUser = () => {
    // const [disable, setDisable] = useState(false);

    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const data = await axios('https://music-school-server-one.vercel.app/users')
            return data.data;
        }
    })

    if (isLoading) return 'Loading...'

    const handleMakeAdmin = user => {
        fetch(`https://music-school-server-one.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                })
            })

    }

    const handleMakeInstructor = user => {
        fetch(`https://music-school-server-one.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Instructor Now!`,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }


    return (
        <div className="w-10/12">
            <h2 className="text-center font-semibold text-2xl my-5">Total Stuents: {users?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-gray-100 text-black">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Current Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role ? user.role : 'Student'}</td>
                                <td>
                                    {
                                        <button disabled={user.role === 'admin' ? true : false} onClick={() => handleMakeAdmin(user)} className="btn btn-primary"> Make Admin </button>
                                    }
                                </td>
                                <td>
                                    {
                                        <button disabled={user.role === 'instructor' ? true : false} onClick={() => handleMakeInstructor(user)} className="btn btn-primary"> Make Instructor </button>
                                    }

                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUser;