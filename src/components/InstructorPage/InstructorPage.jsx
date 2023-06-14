import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import InstructorPageCard from "./instructorPageCard";


const InstructorPage = () => {

    const { data: allUser, isLoading } = useQuery({
        queryKey: ['instructorData'],
        queryFn: async () => {
            const data = await axios('https://music-school-server-one.vercel.app/users')
            return data?.data;
        }
    })

    if (isLoading) return 'Loading...'

    const allInstructor = allUser?.filter(user => user.role === 'instructor');



    if (isLoading) return 'Loading...'

    return (
        <div className="max-w-[1280px] m-auto p-8">
            <div className="mt-20">
                <div className="text-center mt-10 mb-8">
                    <h2 className="text-5xl font-semibold mb-4">All Instructors</h2>
                    <p className="text-2xl font-normal text-slate-600">Experience Excellence with Our Acclaimed Instructors: Learn from the Best!</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        allInstructor?.map(singleInstructor => <InstructorPageCard key={singleInstructor._id} singleInstructor={singleInstructor}></InstructorPageCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default InstructorPage;