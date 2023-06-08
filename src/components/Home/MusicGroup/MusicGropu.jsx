

const MusicGropu = () => {
    return (
        <div className="bg-gray-100">
            <div className="max-w-[1280px] mx-auto">
                <div className="text-center py-10">
                    <h2 className="text-7xl font-semibold">Music Groups</h2>
                    <p className="text-3xl italic font-normal text-gray-600">for</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 pb-10">
                    <div className="text-center">
                        <img className="w-40 h-40 mx-auto rounded-full" src="https://i.ibb.co/PC83T1z/services-3.jpg" alt="" />
                        <h3 className="text-3xl font-semibold my-4">Kids</h3>
                        <p>Our school is a solution for families who would like to expose their children to the world of music.</p>
                    </div>
                    <div className="text-center">
                        <img className="w-40 mx-auto h-40 rounded-full" src="https://i.ibb.co/8MYh6cf/services-2.jpg" alt="" />
                        <h3 className="text-3xl font-semibold my-4">Teens</h3>
                        <p>Our classes help to develop the skills necessary for music learning and a lifelong enjoyment of music.</p>
                    </div>
                    <div className="text-center">
                        <img className="w-40 mx-auto h-40 rounded-full" src="https://i.ibb.co/QXf2VhL/services-1.jpg" alt="" />
                        <h3 className="text-3xl font-semibold my-4">Adults</h3>
                        <p>We have programs for everyone. In addition to teaching music to children, we instruct adults and seniors.</p>
                    </div>
                    <div className="text-center">
                        <img className="w-40 mx-auto h-40 rounded-full" src="https://i.ibb.co/YLQ1t5t/image-7.jpg" alt="" />
                        <h3 className="text-3xl font-semibold my-4">Private lessons</h3>
                        <p>Private music lessons provide one-on-one attention, so teachers can focus on an individual student’s needs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicGropu;