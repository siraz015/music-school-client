import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import axios from "axios";
import Swal from "sweetalert2";
// import './checkOut.css'


const CheckOut = ({ price, paymentClass }) => {
    const { user } = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {

        if (price > 0) {
            axios.post('http://localhost:5000/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }

    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error);
            setCardError(error.message);
        } else {
            setCardError('');
            // console.log('payment method', paymentMethod)
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        setProcessing(false);

        if (paymentIntent.status === 'succeeded') {
            // const transactionId = paymentIntent.id;
            setTransactionId(paymentIntent.id)

            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                itemName: paymentClass.className,
                cartId: paymentClass._id,
                classId: paymentClass.classItemId,
            }

            axios.post('http://localhost:5000/payment', payment)
                .then(res => {
                    if (res.data.insertResult) {
                        // display confirm
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Payment Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })

            console.log(paymentClass);

            fetch(`http://localhost:5000/updateClass/${paymentClass.classItemId}`, {
                method: 'PATCH'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="w-8/12 mx-auto">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                    className="bg-white shadow-lg p-4 rounded-lg"
                />
                <button className="btn btn-secondary btn-sm w-3/12 my-6" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600">{cardError}</p>}
            {transactionId && <p className="text-green-600">Transaction Success with transactionId: {transactionId}</p>}

        </div>
    );
};

export default CheckOut;