import { Fade } from "react-awesome-reveal";


const InstructorCard = ({ instructorItem }) => {
    const { image, name, email } = instructorItem;

    return (
        <div>
            <Fade direction="up" delay={500} triggerOnce>
                <div className="card w-96 bg-base-100 shadow-xl text-center">
                    <figure><img src={image} alt="img" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-semibold">{name}</h2>
                        <p className="text-slate-600">Email: {email}</p>
                    </div>
                </div>
            </Fade>
        </div >
    );
};

export default InstructorCard;