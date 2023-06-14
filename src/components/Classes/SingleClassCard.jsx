import { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { AuthContext } from "../../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";

const SingleClassCard = ({ singleClass }) => {

    const { image, className, instructorName, instructorEmail, availableSets, price, student, _id } = singleClass;

    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();

    const navigate = useNavigate();
    const location = useLocation();

    const handleCard = () => {

        if (user && user.email) {
            const cartItem = { classItemId: _id, image, className, instructorName, instructorEmail, availableSets, price, email: user.email }
            fetch('https://music-school-server-one.vercel.app/carts', {
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
            <Fade direction="up" delay={500} triggerOnce>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="w-full h-[250px]" src={image} alt="img" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Class Name: {className}</h2>
                        <p>Instructor Name: {instructorName}</p>
                        <p>Available Seats: {availableSets}</p>
                        <p>Price: ${price}</p>
                        <p>Student: {student}</p>
                        <div className="card-actions justify-center">
                            <button onClick={() => handleCard()} className="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>
            </Fade>
        </div >
    );
};

export default SingleClassCard;