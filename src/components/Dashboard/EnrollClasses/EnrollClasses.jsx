import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const EnrollClasses = () => {
    const { user } = useContext(AuthContext);

    const { data: paymentData, isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const data = await axios(`https://music-school-server-one.vercel.app/payment/${user?.email}`)
            return data.data;
        }
    })

    if (isLoading) return 'Loading...'


    return (
        <div className="w-10/12 mt-10">
            <h2 className="text-center text-3xl font-semibold bg-slate-500 rounded-lg py-2 text-white mb-5">My Enrolled Classes</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-black">
                            <th>#</th>
                            <th>Class Name</th>
                            <th>TransactionId</th>
                            <th>Payment Fee</th>
                            <th>Payment Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            paymentData?.map((singlePayment, index) => <tr key={singlePayment._id}>
                                <td>{index + 1}</td>
                                <td>{singlePayment.itemName}</td>
                                <td>{singlePayment.transactionId}</td>
                                <td>{singlePayment.price}</td>
                                <td>{singlePayment.date}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrollClasses;