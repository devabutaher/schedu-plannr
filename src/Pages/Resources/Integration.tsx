import React from "react";
import { Link } from "react-router-dom";

const Integration = () => {
  return (
    <div>
      <div className="relative py-28 pb-20 lg:py-32">
        <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
          <h1
            className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl"
            data-aos="fade-right"
          >
            Automate tasks before and <br className="lg:block hidden" />{" "}
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-primaryLight dark:to-secondaryLight">
              after meetings
            </span>
            .
          </h1>
          <div className="lg:flex">
            <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
              <p className="sm:text-lg lg:w-11/12" data-aos="fade-right">
                Automatically send meeting confirmations and reminders by SMS or
                email to minimize no-shows and cancellations. Streamline pre-
                and post-meeting communication and maximize the outcomes of
                every meeting. Use Zapier and native CRM integrations to sync
                contact details and activities to other platforms
              </p>
              <span className="block font-semibold" data-aos="zoom-in-up">
                The best companion bot for your chat app.
              </span>
              <div
                className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <a
                  aria-label="add to slack"
                  href="https://www.microsoft.com/en-us/microsoft-teams/group-chat-software"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30"
                >
                  <div className="flex justify-center space-x-4">
                    <img
                      className="w-6 h-6"
                      src="https://www.clipartmax.com/png/full/19-193109_microsoft-clip-art-software.png"
                      alt="slack logo"
                      loading="lazy"
                      width="128"
                      height="128"
                    />
                    <span className="hidden font-medium md:block dark:text-white">
                      Microsoft Team
                    </span>
                  </div>
                </a>
                <a
                  aria-label="add to chat"
                  href="https://meet.google.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30"
                >
                  <div className="flex justify-center space-x-4">
                    <img
                      className="w-6 h-6"
                      src="https://cdn.icon-icons.com/icons2/2642/PNG/512/google_meet_camera_logo_icon_159349.png"
                      alt="chat logo"
                      loading="lazy"
                      width="128"
                      height="128"
                    />
                    <span className="hidden font-medium md:block dark:text-white">
                      Google Meet
                    </span>
                  </div>
                </a>
                <a
                  aria-label="add to zoom"
                  href="https://zoom.us/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-600/20 dark:hover:border-blue-300/30"
                >
                  <div className="flex justify-center space-x-4">
                    <img
                      className="w-6 h-6"
                      src="https://i.ibb.co/TtgyDVY/5e8ce318664eae0004085461.png"
                      alt="chat logo"
                      loading="lazy"
                      width="128"
                      height="128"
                    />
                    <span className="hidden font-medium md:block dark:text-white">
                      Zoom
                    </span>
                  </div>
                </a>
              </div>

              <div
                className="py-12 flex gap-6 lg:gap-12 justify-between grayscale lg:w-2/3"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
                  className="h-8 sm:h-10 w-auto lg:h-20"
                  alt=""
                />
                <img
                  src="https://www.freepnglogos.com/uploads/ge-png-logo/ge-logo-png-0.png"
                  className="h-8 sm:h-10 w-auto lg:h-20"
                  alt=""
                />
                <img
                  src="https://www.freepnglogos.com/uploads/microsoft-logo-4.png"
                  className="h-8 sm:h-10 w-auto lg:h-20"
                  alt=""
                />
              </div>
              <div className="">
                <Link
                  to={"/integrationDetails"}
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
            <div className="mt-12 md:mt-0 lg:absolute -right-10 lg:w-7/12">
              <div className="relative w-full">
                <img
                  src="https://i.ibb.co/GPR0PYQ/MJB-Automate-tasks.png"
                  className="relative w-full lg:pr-14"
                  alt=""
                  loading="lazy"
                  data-aos="flip-down"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;
