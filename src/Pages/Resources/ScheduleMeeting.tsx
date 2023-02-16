import React from "react";
import { Link } from "react-router-dom";

const ScheduleMeeting = () => {
  return (
    <div>
      <section className="overflow-hidden sm:grid sm:grid-cols-2">
        <div data-aos="fade-right">
          <img
            alt="Student"
            src="https://cdn.dribbble.com/users/2508569/screenshots/6251877/co.gif"
            className="h-56 w-full object-cover sm:h-full rounded-r-full"
          />
        </div>
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h1
              className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl"
              data-aos="fade-left"
            >
              Scheduled <br className="lg:block hidden" />{" "}
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-primaryLight dark:to-secondaryLight">
                meetings
              </span>
              .
            </h1>

            <p className="hidden md:mt-4 md:block" data-aos="fade-left">
              Give ideal customers a way to engage when you’re not online, or at
              a time that suits them best. Offer scheduled meetings on simple
              pages, in forms, or in chatbots. Share them with a link or add
              them to your website and keep valuable conversations moving
              forward.
            </p>

            <div className="mt-4 md:mt-8">
              <Link
                to={"/scheduleMeetingDetails"}
                className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 border-primary rounded-full shadow-md group"
                data-aos="fade-up-right"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">
                  Read More
                </span>
                <span className="relative invisible">Read More</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScheduleMeeting;
