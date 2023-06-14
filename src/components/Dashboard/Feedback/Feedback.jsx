import { useForm } from "react-hook-form";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Feedback = () => {
    const singleData = useLoaderData();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        const newFeedback = { feedback: data.feedback }

        fetch(`https://music-school-server-one.vercel.app/classes/${singleData._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                reset();

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Send Feedback Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
            })
    };



    return (
        <div className='w-10/12'>
            <div className='text-center my-5'>
                <h2 className="text-3xl font-semibold mb-2"> Class Name: {singleData.name}</h2>
                <p className="text-2xl font-semibold text-slate-600">Instructor Name: {singleData.instructor}</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='w-10/12 mx-auto bg-gray-100 p-10 rounded-lg'>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold text-lg">Please Type Your Feedback*</span>
                    </label>

                    <textarea className="h-[200px] px-3 py-1 text-[16px]  outline-gray-400" {...register("feedback", { required: true })} name="feedback"></textarea>
                </div>

                <input type="submit" value="Send Feedback" className='btn btn-primary border-none my-5' />
            </form>



        </div>
    );
};

export default Feedback;