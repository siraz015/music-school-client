import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SingleClassCard from "./SingleClassCard";


const Classes = () => {

    const { data: allClasses, isLoading } = useQuery({
        queryKey: ['classesData'],
        queryFn: async () => {
            const data = await axios('https://music-school-server-one.vercel.app/classes')
            return data.data;
        }
    })

    if (isLoading) return 'Loading...'

    return (
        <div className="max-w-[1280px] mx-auto font-semibold">
            <div className="">
                <div className="">
                    <h2 className="text-center text-7xl pt-20 mb-4">All Classes</h2>
                    <p className="text-center text-2xl font-normal mb-5 text-slate-600">Unlock Your Musical Potential: Join Our Popular Classes Today!</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-8">
                        {
                            allClasses?.map(singleClass => <SingleClassCard key={singleClass._id} singleClass={singleClass}></SingleClassCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Classes;