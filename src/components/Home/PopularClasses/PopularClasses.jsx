import axios from "axios";
import ClassCard from "./ClassCard";
import { useQuery } from "@tanstack/react-query";


const PopularClasses = () => {
    
    const {data: classesData, isLoading} = useQuery({
        queryKey: ['classesData'],
        queryFn: async () => {
            const data = await axios('https://music-school-server-one.vercel.app/classes')
            return data.data;
        }
    })

    if (isLoading) return 'Loading...'

    return (
        <div className="max-w-[1280px] mx-auto my-10 font-semibold">
            <h2 className="text-center text-7xl mb-4">Popular Classes</h2>
            <p className="text-center text-2xl font-normal mb-5 text-slate-600">Unlock Your Musical Potential: Join Our Popular Classes Today!</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-8">
                {
                    classesData?.slice(0, 6).map(classItem => <ClassCard key={classItem._id} classItem={classItem}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;