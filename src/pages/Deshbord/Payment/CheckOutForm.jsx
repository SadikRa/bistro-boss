import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import './CheckOutForm.css'

const CheckOutForm = ({cart, price}) => {
    const stripe = useStripe()
    const element = useElements()
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const {user} = useAuth()
    const [processing, setProcessing] = useState(false)
    const [traId, setTraId] = useState('')

    useEffect(() =>{
     if(price > 0){
      axiosSecure.post('/create-payment-intent', {price})
      .then(res => {
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
      })
     }
    }, [price, axiosSecure])

    const handleSubmit = async(event) => {
        event.preventDefault()

        if(!stripe || !element){
            return
        }

        const card = element.getElement(CardElement)

        if(card === null){
            return
        }
        console.log(card)
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          if (error) {
            console.log('[error]', error);
            setCardError(error.message)
          } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('')
          }
          setProcessing(true)
          const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: user?.displayname || '',
                  email: user?.email || '',
                },
              },
            },
          );
          if(confirmError){
            console.log(confirmError)
          }
          setProcessing(false)
          if(paymentIntent.status === 'succeeded'){
            setTraId(paymentIntent.id)
            const payment = {
              email: user?.email,
              transactionId: paymentIntent.id,
              price,
              date: new Date(),
              quantity: cart.length,
              cartItems: cart.map(item => item._id),
              menuItems: cart.map(item => item.menuItemId),
              status: 'service pending',
              itemNames: cart.map(item => item.name)
          }
           axiosSecure.post('/payments',payment )
           .then(res => {
            console.log(res.data);
            if (res.data.result.insertedId) {
                // display confirm
            }})
          }
    }
    return (
        <>
        <form className="w-2/3 mx-auto mt-5" onSubmit={handleSubmit}>
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
      />
      <button className="btn btn-outline btn-primary mt-4" type="submit" disabled={!stripe || processing || !clientSecret}>
        Pay
      </button>
    </form>
    {
        cardError && <p className="text-red-500 lg:ml-44">{cardError}</p>
    }
     {
       <p className="text-red-500 lg:ml-44">traId {traId}</p>
    }
        </>
    );
};

export default CheckOutForm;