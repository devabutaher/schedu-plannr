import axios from "axios";
import { useQuery } from "react-query";
import PricingCard from "./PricingCard";

const Plans = () => {
  // const { data: membership = [] } = useQuery({
  //   queryKey: ["membership"],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       "https://scheduplannr-server.vercel.app/membership"
  //     );
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  const { data, isLoading, refetch } = useQuery("blogs", () =>
    axios(`https://scheduplannr-server.vercel.app/membership`)
  );
  console.log(data);
  return (
    <div>
      <div className="">
        <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">
          <div className="m-auto text-center">
            <h2 className="text-2xl text-primary font-bold md:text-6xl">
              Pick the perfect plan for your team
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {data?.data?.map((plan: any) => (
              <PricingCard plan={plan} key={plan._id}></PricingCard>
            ))}
          </div>
        </div>

        <section>
          <div className="flex justify-center">
            <img
              src="https://www.pngmart.com/files/10/FAQ-PNG-Transparent.png"
              alt=""
            />
          </div>
          <div className="px-8 lg:px-40 py-10 lg:pb-20">
            <div className="space-y-4">
              <details
                className="group border-l-4 border-primary bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
                open
              >
                <summary className="flex items-center justify-between cursor-pointer">
                  <h2 className="text-lg font-medium text-gray-900">
                    Which plan is best for me and my team?
                  </h2>

                  <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                  Check out the plans to compare our different paid plans and
                  select the one that best fits your needs.
                </p>
              </details>

              <details className="group border-l-4 border-primary bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h2 className="text-lg font-medium text-gray-900">
                    What does the renewal process look like?
                  </h2>

                  <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                  Paid subscription automatically renew for the same
                  subscription period unless you downgrade your plan before your
                  renewal date.
                </p>
              </details>

              <details className="group border-l-4 border-primary bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h2 className="text-lg font-medium text-gray-900">
                    How do i upgrade or downgrade?
                  </h2>

                  <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                  Visit your billing page. From there, you can change your plan,
                  add or remove user seats, and update your payment information.
                </p>
              </details>

              <details className="group border-l-4 border-primary bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer">
                  <h2 className="text-lg font-medium text-gray-900">
                    What payment methods do you accept?
                  </h2>

                  <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                  We accept Visa, Mastercard, American Express, Credit and Debit
                  cards.
                </p>
              </details>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Plans;
