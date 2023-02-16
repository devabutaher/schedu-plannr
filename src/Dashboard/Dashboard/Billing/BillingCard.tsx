import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { MdCardMembership } from "react-icons/md";
import { Link } from "react-router-dom";

const BillingCard = ({ plan }: any) => {
  const {
    status,
    cost,
    Email_support,
    Active_event_types,
    payments,
    Customize_email_notifications,
    Phone_support,
    Update_your_cancellation_policy,
    View_analytics_and_insights,
    _id,
  } = plan;
  console.log(plan);
  return (
    <div>
      <article className="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6">
        <div className="flex items-center gap-6 my-5">
          <div>
            <span className="inline-block rounded bg-blue-600 p-2 text-white">
              <MdCardMembership></MdCardMembership>
            </span>
          </div>
          <div className="text-xl font-bold">{status}</div>
        </div>

        <h3 className="mt-0.5 text-lg font-medium ">
          <span className="text-2xl font-bold">${cost}</span> USD/month
        </h3>
        <div className="my-5 flex justify-center ">
          <Link to={`membership/${_id}`}>
            <label
              className="group relative inline-flex items-center overflow-hidden rounded-full border border-current px-8 py-3 text-primary focus:outline-none focus:ring active:text-Primary cursor-pointer"
              htmlFor="my-modal-4"
            >
              <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span className="text-sm font-medium transition-all group-hover:mr-4">
                Subscribe
              </span>
            </label>
          </Link>
        </div>

        <p className="mt-2 text-sm leading-relaxed line-clamp-3">
          <div className="flex items-center gap-4">
            <div>
              <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight>{" "}
            </div>
            <div>
              <span>Active event types : {Active_event_types}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight>{" "}
            </div>
            <div>
              <span>Collect payments with Stripe : {payments}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight>{" "}
            </div>
            <div>
              <span>
                Customize email notifications : {Customize_email_notifications}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight>{" "}
            </div>
            <div>
              <span>
                Update cancellation policy : {Update_your_cancellation_policy}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight>{" "}
            </div>
            <div>
              <span>
                View analytics and insights : {View_analytics_and_insights}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight>{" "}
            </div>
            <div>
              <span>24/7 Email support : {Email_support}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight>{" "}
            </div>
            <div>
              <span>24/7 Phone support : {Phone_support}</span>
            </div>
          </div>
        </p>
      </article>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </label>
      </label>
    </div>
  );
};

export default BillingCard;
