import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import InstructorCard from "./InstructorCard";

const Instructors = () => {

    const { data: instructorData, isLoading } = useQuery({
        queryKey: ['instructorData'],
        queryFn: async () => {
            const data = await axios('http://localhost:5000/instructors')
            return data?.data;
        }
    })

    if (isLoading) return 'Loading...'

    return (
        <div className="max-w-[1280px] m-auto p-8">
            <div className="text-center mt-10 mb-5">
                <h2 className="text-5xl font-semibold mb-4">Our Popular Instructors</h2>
                <p className="text-2xl font-normal text-slate-600">Experience Excellence with Our Acclaimed Instructors: Learn from the Best!</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    instructorData?.map(instructorItem => <InstructorCard key={instructorItem._id} instructorItem={instructorItem}></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default Instructors;