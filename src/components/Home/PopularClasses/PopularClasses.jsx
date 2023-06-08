import axios from "axios";
import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";


const PopularClasses = () => {
    const [classData, setClassData] = useState();

    useEffect(() => {
        axios.get('ClassesData.json')
            .then(res => {
                setClassData(res.data)
            })
    }, [])

    return (
        <div className="max-w-[1280px] mx-auto my-10 font-semibold">
            <h2 className="text-center text-7xl mb-10">Popular Classes</h2>
            <div className="grid grid-cols-3 gap-5">
                {
                    classData?.map(classItem => <ClassCard key={classItem.available_seats} classItem={classItem}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;