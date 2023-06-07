import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data)

        createUser(data.email, data.password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Created Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div className="bg-base-100">
            <div className="max-w-[800px] mx-auto">
                <div className="shadow-2xl card">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h2 className='text-5xl text-center font-semibold mb-5'>Please Sign Up!</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className='text-red-600 mt-1'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-red-600 mt-1'>This field is required</span>}
                        </div>
                        <div className='flex gap-10 w-full'>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password && <span className='text-red-600 mt-1'>This field is required</span>}
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="confirm" {...register("confirm", { required: true })} name="confirm" placeholder="Confirm Password" className="input input-bordered" />
                                {errors.confirm && <span className='text-red-600 mt-1'>This field is required</span>}
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="photo" {...register("photo", { required: true })} name="photo" placeholder="Photo URL" className="input input-bordered" />
                            {errors.photo && <span className='text-red-600 mt-1'>This field is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='-mt-5 mb-5 ml-8'><small>Already have account? <Link to="/login">Please Login!</Link> </small></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;