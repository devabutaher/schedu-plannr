import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Zoom = () => {
  return (
    <div className="">
      <div className="flex justify-center">
        <img
          src="https://i.ibb.co/tpr2dTK/Zoom-Integration-Desktop.png"
          alt=""
          width={"640px"}
        />
      </div>
      <div className="my-5">
        <p className="text-center text-xl">Create a seamless workflow with</p>
        <p className="text-center text-xl">secure video calls</p>
      </div>
      <div className="flex justify-center">
        <hr className="w-20" />
      </div>
      <div className="flex justify-center my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 lg:px-0 md:w-3/4">
          <div className="flex items-center gap-10 mt-5">
            <div>
              <BsFillCheckCircleFill />
            </div>{" "}
            <div>
              <p>Connect securely to your Zoom account</p>
            </div>
          </div>
          <div className="flex items-center gap-10 mt-5">
            <div>
              <BsFillCheckCircleFill />
            </div>{" "}
            <div>
              <p>Automatically schedule private Zoom sessions</p>
            </div>
          </div>
          <div className="flex items-center gap-10 mt-5">
            <div>
              <BsFillCheckCircleFill />
            </div>{" "}
            <div>
              <p>Send automated notifications to all stakeholders</p>
            </div>
          </div>
          <div className="flex items-center gap-10 mt-5">
            <div>
              <BsFillCheckCircleFill />
            </div>{" "}
            <div>
              <p>Configure your Zoom settings from ScheduPlannr</p>
            </div>
          </div>
          <div className="flex items-center gap-10 mt-5">
            <div>
              <BsFillCheckCircleFill />
            </div>{" "}
            <div>
              <p>Receive automatic updates to rescheduled/deleted events</p>
            </div>
          </div>
          <div className="flex items-center gap-10 mt-5">
            <div>
              <BsFillCheckCircleFill />
            </div>{" "}
            <div>
              <p>Support a variety of meeting types</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="md:w-3/4" />
      </div>

      <section className="container mx-auto">
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 rounded-lg sm:h-80 lg:order-last lg:h-full flex justify-center">
              <img
                alt="Party"
                src="https://www.howtogeek.com/wp-content/uploads/2020/03/Zoom-logo-on-a-smartphone-with-a-video-call-in-the-background.jpeg?height=200p&trim=2,2,2,2"
                className="w-full rounded-2xl"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Create Zoom video calls from smart forms
              </h2>

              <p className="mt-4">
                Create a smart form that automates your lead qualification for
                Zoom meetings.
              </p>
              <p className="mt-4">
                Use conditional routing to personalize the qualification
                questions for each website visitor.
              </p>
              <p className="mt-4">
                Use contact or account information to personalize the form
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-20">
        <div className="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6">
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/WH0pWLD/free-fo-mascot.png"
              className="w-52 h-36"
              alt=""
            />
          </div>
          <div>
            <h3 className="mt-0.5 text-xl font-bold text-center">
              Get started today
            </h3>
            <p className="mt-2 text-sm leading-relaxed line-clamp-3 text-center">
              Our Starter plan is free for up to 3 users
            </p>
            <div className="flex justify-center">
              <Link
                to={"/"}
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary"
              >
                Start Now
                <span
                  aria-hidden="true"
                  className="block transition group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6">
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/RPGp9pQ/Pricing-Chat-Once.png"
              className="w-52 h-36"
              alt=""
            />
          </div>
          <div>
            <h3 className="mt-0.5 text-xl font-bold text-center">Pricing</h3>
            <p className="mt-2 text-sm leading-relaxed line-clamp-3 text-center">
              Choose a plan that’s right for your team
            </p>
            <div className="flex justify-center">
              <Link
                to={"/dashboard/billing"}
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary"
              >
                Learn more
                <span
                  aria-hidden="true"
                  className="block transition group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Zoom;
