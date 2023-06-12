import { useLoaderData } from "react-router-dom";


const Update = () => {
    const updatingClass = useLoaderData();

    const {className, image, instructorName, instructorEmail, availableSets, price, _id } = updatingClass;

    console.log(updatingClass);

    return (
        <div>
            updated page
        </div>
    );
};

export default Update;