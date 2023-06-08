

const ClassCard = ({ classItem }) => {

    const {image, name, instructor, available_seats, price} = classItem;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Class Name: {name}</h2>
                    <p>Instructor Name: {instructor}</p>
                    <p>Available Seats: {available_seats}</p>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;