import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useRef, useState } from "react";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { useReactToPrint } from "react-to-print";
import { AuthContext } from "../../../components/Contexts/AuthProvider/AuthProvider";
import PaymentTerms from "./PaymentTerms";

const CheckoutForm = ({ membership }: any) => {
  const { user }: any = useContext(AuthContext);
  console.log(user);
  const [userInfo, setData] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(
          `https://scheduplannr-server.vercel.app/user?email=${user?.email}`
        )
      ).json();
      setData(data);
    };

    dataFetch();
  }, [user?.email]);

  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [amount, setAmount] = useState({});
  const stripe = useStripe();
  const elements = useElements();
  const { cost, status } = membership;
  // console.log(success)
  const userPayment = {
    email: user?.email,
    amount,
  };
  useEffect(() => {
    fetch("https://scheduplannr-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ cost }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClientSecret(data?.clientSecret);
      });
  }, [cost]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod }: any = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setSuccess("");
    setProcessing(true);

    const { paymentIntent, error: confirmError }: any =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status == "succeeded") {
      setSuccess("Congrats! your payment completed");
      setTransactionId(paymentIntent.id);

      fetch("http://localhost:5000/paymentMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentIntent,
          email: user?.email,
          name: user?.displayName,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
    // setAmount(paymentIntent)
    console.log("paymentIntent", paymentIntent);
  };

  const componentRef: any = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={!stripe || !clientSecret || processing}
            className="btn btn-primary w-48 my-5"
          >
            Pay
          </button>
        </div>
      </form>

      <p className="text-red-500">{cardError}</p>
      {success && (
        <div>
          <div className="flex justify-end">
            <button onClick={handlePrint} className="btn btn-primary">
              Download PDF
              <IoArrowDownCircleOutline className="h-6 w-6 text-white" />
            </button>
          </div>
          <div ref={componentRef} className=" shadow-lg p-10  md:mx-auto">
            <div className="text-center">
              <svg
                viewBox="0 0 24 24"
                className="text-green-600 w-16 h-16 mx-auto my-6"
              >
                <path
                  fill="currentColor"
                  d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                ></path>
              </svg>
              <h3 className="md:text-2xl text-base font-semibold text-center">
                Payment Done!
              </h3>
              <p className=" my-2">
                Thank you for completing your secure online payment.
              </p>
              <p className="visible lg:hidden">Email : {user.email}</p>
              <p className="visible lg:hidden">
                Transaction Id :{" "}
                <span className="font-bold">{transactionId}</span>
              </p>
              <p> Have a great day! </p>
            </div>

            {userInfo?.map((usr: any) => {
              const {
                currentAddress,
                permanentAddress,
                contactNumber,
                image,
                name,
              } = usr;
              return (
                <div className="mt-10">
                  <div className="lg:flex items-center gap-10">
                    <div className="flex justify-center my-5">
                      <img className="w-52" src={image} alt="" />
                    </div>
                    <div className=" text-xl">
                      <div className="">
                        <div className="grid grid-cols-1 lg:grid-cols-2 text-sm">
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Name</div>
                            <div className="px-4 py-2">{name}</div>
                          </div>

                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                              Contact No.
                            </div>
                            <div className="px-4 py-2">{contactNumber}</div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                              Current Address
                            </div>
                            <div className="px-4 py-2">{currentAddress}</div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                              Permanent Address
                            </div>
                            <div className="px-4 py-2">{permanentAddress}</div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                              Status
                            </div>
                            <div className="px-4 py-2">{status}</div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                              Amount
                            </div>
                            <div className="px-4 py-2 font-bold">${cost}</div>
                          </div>
                          <div className="hidden lg:grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Email</div>
                            <div className="px-4 py-2">{user?.email}</div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold"></div>
                            <div className="px-4 py-2 font-bold"> </div>
                          </div>
                          <div className="hidden lg:grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                              Transaction Id
                            </div>
                            <div className="px-4 py-2">{transactionId}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <PaymentTerms />
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
