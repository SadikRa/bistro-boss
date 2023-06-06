import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";

const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);
  const [cart] = useCart()
  const total = cart.reduce( (sum, item) => sum + item.price, 0)
  const price = parseFloat(total.toFixed(2))
  return (
    <div>
      <SectionTitle
        subHeading={"please provide"}
        heading={"payment"}
      ></SectionTitle>
      <Elements stripe={stripePromise}>
        <CheckOutForm price={price} cart={cart}/>
      </Elements>
    </div>
  );
};

export default Payment;
