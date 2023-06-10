import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import axios, { Axios } from "axios";

const useAdmin = () => {
    const { user } = useContext(AuthContext);

    // const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
    //     queryKey: ['isAdmin', user?.email],
    //     queryFn: async () => {
    //         const res = await Axios(`http://localhost:5000/users/admin/${user?.email}`);
    //         return res.data.admin;
    //     }
    // })

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axios(`http://localhost:5000/users/admin/${user?.email}`)
            console.log('is admin response', res);
            return res.data.admin;
        }
    })

    // useEffect(() => {
    //     fetch(`http://localhost:5000/users/admin/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => setIsAdmin(data))
    // }, [])

    return [isAdmin, isAdminLoading]
};

export default useAdmin;