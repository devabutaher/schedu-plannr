import React from "react";
import { Link } from "react-router-dom";

const Security = () => {
  return (
    <div className="max-w-[1400px] mx-auto overflow-hidden my-32">
      <section className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <div data-aos="flip-left">
            <img
              src="https://www.pngmart.com/files/7/Security-PNG-Transparent-Picture.png"
              alt=""
              className="w-20 h-20"
            />
          </div>
          <div>
            <h1
              className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl"
              data-aos="fade-left"
            >
              Trust Center &<br className="lg:block hidden" />{" "}
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-primaryLight dark:to-secondaryLight">
                Security
              </span>
              .
            </h1>
          </div>

          <p className="hidden md:mt-4 md:block" data-aos="fade-left">
            <li className="my-5">Customer data is managed and stored using industry-standard database technologies. All data and backups are encrypted at rest using strong cyphers (AES 256) and securely managed encryption keys. Our applications are ‘HTTPS only’ and all data in transit is encrypted using TLS 1.2 and higher.</li>
            <li className="my-5">Our products provide advanced security tools, including two-factor authentication, account lockout, password policies, and session timeout settings, which enable you to further enhance your account security.</li>
            <li className="my-5">Access to customer data is restricted to OnceHub employees who require it to fulfill their job responsibilities.</li>
          </p>

          <div className="mt-4 md:mt-8">
            <Link
              to={"/securityDetails"}
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
        <div data-aos="fade-left">
          <img
            src="https://pro2-bar-s3-cdn-cf.myportfolio.com/93bea8ef802a988ed8ab44889dc82b83/13d79c62-bf64-42a5-b1e0-3bba1acf8f9b_rw_1200.gif?h=eec2d9f16781bc52a9dd1a85db0c57ec"
            alt=""
            className="rounded-l-full"
          />
        </div>
      </section>
    </div>
  );
};

export default Security;
