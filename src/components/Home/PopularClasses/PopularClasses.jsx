import axios from "axios";
import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import { useQuery } from "@tanstack/react-query";


const PopularClasses = () => {
    // const [classData, setClassData] = useState();

    // useEffect(() => {
    //     axios.get('http://localhost:5000/classes')
    //         .then(res => {
    //             setClassData(res.data)
    //         })
    // }, [])


    const {data: classesData, isLoading} = useQuery({
        queryKey: ['classesData'],
        queryFn: async () => {
            const data = await axios('http://localhost:5000/classes')
            return data.data;
        }
    })

    if (isLoading) return 'Loading...'

    return (
        <div className="max-w-[1280px] mx-auto my-10 font-semibold">
            <h2 className="text-center text-7xl mb-10">Popular Classes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-8">
                {
                    classesData?.map(classItem => <ClassCard key={classItem.available_seats} classItem={classItem}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;