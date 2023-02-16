import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51MWZFIFOxg23fb3FZBBESyKsXoFGupdLPx5f3uA7cpivPtneEBABjv7hxFfGt6P0IwRN0O41bNhMtE50ZEiSef2300iMifsqAI"
);

const Payment = () => {
  const params = useParams();
  const id = params.id;

  const { data: membership = [], refetch } = useQuery({
    queryKey: ["membership"],
    queryFn: async () => {
      const res = await fetch(
        `https://scheduplannr-server.vercel.app/membership/${id}`
      );
      const data = await res.json();
      refetch();
      return data;
    },
  });
  return (
    <div>
      <h1 className="text-6xl font-bold text-center uppercase">
        Pay<span className="text-primary">Now</span>
      </h1>
      <h1 className="text-center text-xl mt-10">
        Please Pay{" "}
        <span className="font-bold text-2xl">${membership?.cost}</span> to
        upgrade <span className="font bold text-2xl">{membership?.status}</span>
      </h1>

      <div className="my-10">
        <Elements stripe={stripePromise}>
          <CheckoutForm membership={membership} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
