import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useUserRole = () => {
    const { user } = useContext(AuthContext);

    const { data: userRole, isLoading: isUserRoleLoading } = useQuery({
        queryKey: ['userRole', user?.email],
        queryFn: async () => {
            const res = await axios(`https://music-school-server-one.vercel.app/users/${user?.email}`)
            return res.data.userRole;
        }
    })

    return [userRole, isUserRoleLoading]
};

export default useUserRole;