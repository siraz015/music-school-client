import { Fade } from "react-awesome-reveal";

const InstructorPageCard = ({singleInstructor}) => {
    const { image, name, email } = singleInstructor;

    return (
        <div>
            <Fade direction="up" delay={500} triggerOnce>
                <div className="card w-96 bg-base-100 shadow-xl text-center">
                    <figure><img className="w-full h-[260px]" src={image} alt="img" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-semibold">{name}</h2>
                        <p className="text-slate-600">Email: {email}</p>
                    </div>
                </div>
            </Fade>
        </div >
    );
};

export default InstructorPageCard;