import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";


const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const Update = () => {
    const { user } = useContext(AuthContext);
    const updatingClass = useLoaderData();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const { className, image, instructorName, instructorEmail, availableSets, price, _id } = updatingClass;


    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgRes => {

                if (imgRes.success) {
                    const imgURL = imgRes.data.display_url;
                    const { name, instructorName, instructorEmail, availableSets, price } = data;
                    const newClass = { className: name, instructorName, instructorEmail, price: parseFloat(price), availableSets: parseInt(availableSets), image: imgURL }
                    console.log(newClass);

                    fetch(`https://music-school-server-one.vercel.app/classes/${_id}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newClass)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);

                            console.log(data);

                            if (data.modifiedCount > 0) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Class Updated Successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })

                }
            })
    };

    return (
        <div className="w-11/12">
            <h2 className="text-center my-8 text-4xl font-semibold">Update Your Class Info</h2>


            <form onSubmit={handleSubmit(onSubmit)} className='w-10/12 mx-auto bg-gray-100 p-10 rounded-lg'>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold">Class Name*</span>
                    </label>
                    <input type="text" defaultValue={className} placeholder="Class Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full" />
                </div>
                <div className='flex gap-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Instructor Name</span>
                        </label>
                        <input type="text" readOnly defaultValue={user?.displayName} placeholder="Instructor Name"
                            {...register("instructorName", { required: true })}
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Instructor Email</span>
                        </label>
                        <input type="text" readOnly defaultValue={user?.email} placeholder="Instructor Email"
                            {...register("instructorEmail", { required: true })}
                            className="input input-bordered w-full" />
                    </div>
                </div>

                <div className='flex gap-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Available seats*</span>
                        </label>
                        <input defaultValue={availableSets} type="text" placeholder="Available seats"
                            {...register("availableSets", { required: true })}
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Price*</span>
                        </label>
                        <input defaultValue={price} type="text" placeholder="Price"
                            {...register("price", { required: true })}
                            className="input input-bordered w-full" />
                    </div>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Class Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                </div>

                <input type="submit" value="Update Class" className='btn btn-secondary w-full border-none my-5' />
            </form>

        </div>
    );
};

export default Update;