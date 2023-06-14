import { Link } from "react-router-dom";


const Slider = () => {
    return (
        <div className="max-w-[1280px] px-5 mx-auto">
            <div className="carousel mt-16">
                <div id="slide1" className="carousel-item relative w-full h-[600px] bg-red-700">
                    <img src="https://i.ibb.co/Db1C0T9/S1.jpg" className="w-full" />
                    <div className='absolute flex items-center h-full w-full top-0 left-0 bg-black bg-opacity-40'>
                        <div className='text-white absolute top-center left-[25%] flex flex-col items-center'>
                            <h2 className='text-7xl font-semibold'>Music is Your World</h2>
                            <p className='mt-3 text-3xl'>Don't miss a chance</p>
                            <button className='btn bg-yellow-200 text-black uppercase hover:bg-slate-300 px-4 py-2 rounded-lg mt-5'>Start Learning</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[600px]">
                    <img src="https://i.ibb.co/RN3ChJX/S2.jpg" className="w-full" />
                    <div className='absolute flex items-center h-full w-full top-0 left-0 bg-black bg-opacity-40'>
                        <div className='text-white absolute top-center left-[25%] flex flex-col items-center'>
                            <h2 className='text-7xl font-semibold'>Start With a Note</h2>
                            <p className='mt-3 text-3xl'>Awaken Posibility</p>
                            <button className='btn bg-yellow-200 text-black uppercase hover:bg-slate-300 px-4 py-2 rounded-lg mt-5'>Start Learning</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[600px]">
                    <img src="https://i.ibb.co/Km3qxp9/S3.jpg" className="w-full" />
                    <div className='absolute flex items-center h-full w-full top-0 left-0 bg-black bg-opacity-40'>
                        <div className='text-white absolute top-center left-[25%] flex flex-col items-center'>
                            <h2 className='text-7xl font-semibold'>Music for Everyone</h2>
                            <p className='mt-3 text-3xl'>Don't miss a chance</p>
                            <button className='btn bg-yellow-200 text-black uppercase hover:bg-slate-300 px-4 py-2 rounded-lg mt-5'>Start Learning</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Slider;