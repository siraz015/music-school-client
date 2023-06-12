import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";


const ClassCard = ({ classItem }) => {
    const { image, className, instructorName, instructorEmail, availableSets, price, _id } = classItem;

    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();

    const navigate = useNavigate();
    const location = useLocation();


    const handleCard = () => {

        if (user && user.email) {
            const cartItem = { classItemId: _id, image, className, instructorName, instructorEmail, availableSets, price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class has been Booked',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        } else {
            Swal.fire({
                title: 'Please Login to order class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="w-full h-[250px]" src={image} alt="img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Class Name: {className}</h2>
                    <p>Instructor Name: {instructorName}</p>
                    <p>Available Seats: {availableSets}</p>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => handleCard()} className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;