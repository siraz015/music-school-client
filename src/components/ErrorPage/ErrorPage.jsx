import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>

            <div className="flex flex-col justify-center items-center">
                <img src="https://i.ibb.co/5BmgsCC/Silver-Reckless-Hectorsdolphin-size-restricted.gif" alt="" />
                <Link to="/"><button className="btn btn-primary">Back to home</button></Link>
            </div>

        </div>
    );
};

export default ErrorPage;