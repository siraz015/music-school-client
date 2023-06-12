import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";


const SelectedClasses = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <div className="w-11/12">
            <div className="uppercase font-semibold flex justify-evenly h-[60px] ">
                <h3>My Selected Classes: {cart.length}</h3>
                <h3>Totoal Price: ${total}</h3>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th> # </th>
                            <th>Cover Photo</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {
                                        item.className
                                    }
                                </td>
                                <td>
                                    {
                                        item.instructorName
                                    }
                                </td>
                                <td>
                                    ${
                                        item.price
                                    }
                                </td>
                                <td>
                                    <button className="btn btn-secondary"> Pay </button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="text-white bg-red-600 btn btn-warning "> <FaTrashAlt></FaTrashAlt> </button>
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default SelectedClasses;