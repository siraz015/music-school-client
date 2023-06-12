import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../providers/AuthProviders";
import axios from "axios";
import { useContext } from "react";

const useAdmin = () => {
    const { user } = useContext(AuthContext);

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axios(`http://localhost:5000/users/admin/${user?.email}`)
            return res.data.admin;
        }
    })

    return [isAdmin, isAdminLoading]
};

export default useAdmin;