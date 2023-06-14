import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>

            <div className="bg-base-200">
                <footer className="footer p-10 text-base-content mt-10 max-w-[1280px] mx-auto">
                    <div>
                        <img className="w-[150px]" src="https://i.ibb.co/BGFtbWh/Logo.png" alt="" />
                        <p className="text-xl font-semibold -mb-1 -mt-2">Siraz Music Academy</p>
                        <p>Lalmonirhat, Rangpur, Bangladesh</p>
                    </div>
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Kids Lesson</a>
                        <a className="link link-hover">Teens Lesson</a>
                        <a className="link link-hover">Private Lesson</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                    </div>
                    <div>
                        <p className='text-xl font-semibold'>Social Account</p>
                        <div className='flex gap-5 text-xl text-slate-600'>
                            <p><FaFacebook></FaFacebook></p>
                            <p><FaTwitter></FaTwitter></p>
                            <p> <FaLinkedin></FaLinkedin> </p>
                            <p> <FaInstagram></FaInstagram> </p>
                        </div>
                    </div>
                </footer>
            </div>

        </div>
    );
};

export default Footer;