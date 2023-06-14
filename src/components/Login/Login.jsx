import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signInUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        console.log(data.email)

        signInUser(data.email, data.password)
            .then(result => {
                const loginUser = result.user;
                console.log(loginUser);

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err.message);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: err.message,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }

    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
    };


    return (
        <>
            <div className="bg-base-100">
                <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center gap-20 pt-20">
                    <div className="shadow-2xl md:w-1/2 card">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h2 className='text-5xl text-center font-semibold mb-5'>Please Login!</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600 mt-1'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='relative'>
                                    <input  type={showPassword ? 'text' : 'password'}  {...register("password", { required: true })} name="password" placeholder="password" className="input input-bordered w-full" />
                                    {errors.password && <span className='text-red-600 mt-1'>This field is required</span>}

                                    <input className='absolute top-4 right-4' type="checkbox" id="showPassword" onChange={handleCheckboxChange} />
                                </div>


                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='-mt-5 ml-8'><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                    <div className=" md:w-1/2 ">
                        <img src="https://i.ibb.co/dPyJDts/login1.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;