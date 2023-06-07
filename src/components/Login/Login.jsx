import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data.email)
    }


    return (
        <>
            <div className="bg-base-100">
                <div className="max-w-[1280px] mx-auto flex gap-7">
                    <div className="shadow-2xl card">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })}name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600 mt-1'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password && <span className='text-red-600 mt-1'>This field is required</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
                    </div>
                    <div className="text-center md:w-1/2 lg:text-left">
                        <img src="https://i.ibb.co/dPyJDts/login1.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;