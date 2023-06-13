import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";
import { useLoaderData } from "react-router-dom";

// TODO: provide stripe publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const paymentClass = useLoaderData();

    const total = paymentClass.price;
    const price = parseFloat(total.toFixed(2));

    return (
        <div className="w-2/3">
            <h2 className="my-5 text-center text-2xl font-semibold">Please Payment!</h2>

            <Elements stripe={stripePromise}>
                <CheckOut paymentClass={paymentClass} price={price}></CheckOut>
            </Elements>
        </div>
    );
};

export default Payment;