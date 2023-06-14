import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";


const DashboardHome = () => {
    const { user } = useContext(AuthContext);

    // fetch admin role
    const { data: userRole, isLoading } = useQuery({
        queryKey: ['userRole'],
        queryFn: async () => {
            const data = await axios(`https://music-school-server-one.vercel.app/users/${user?.email}`)
            return data.data;
        }
    })

    if (isLoading) return 'Loading...'

    console.log('dashboard home', userRole);

    return (
        <div className="text-center">
            <h2 className="mt-5  font-semibold text-3xl bg-slate-500 px-20 py-2 rounded-lg text-white">Dashboard Home</h2>
            <div className="mt-5 flex flex-col">
                <img className="h-[300px]" src={userRole?.image} alt="" />
                <h2 className="text-2xl font-semibold">{userRole?.name}</h2>
                <h2 className="text-lg">{userRole?.role}</h2>
            </div>
        </div>
    );
};

export default DashboardHome;