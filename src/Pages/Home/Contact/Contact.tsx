import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Contact = () => {
  const form:any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_04d790n",
        "template_s19y5kn",
        form.current,
        "_ra6V11GlmYKEfn-J"
      )
      .then(
        (result) => {
          toast.success("Email sent Successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      className="contact p-10"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <h2 className="text-center text-2xl font-bold md:text-4xl">
      Contact <span className="text-primary">Us</span></h2>
      <section className="py-5 lg:py-20 mx-5 lg:mx-0 ">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x shadow-lg p-10">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Dhaka, Bangladesh</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>+8801872400423</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>syntaxterminators7@gmail.com</span>
              </p>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
          >
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                placeholder=""
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-primary text-black border py-3 px-2 mt-2"
                name="user_name"
                required
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                placeholder=""
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:primary text-black border py-3 px-2 mt-2"
                name="user_email"
                required
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-primary  border px-2border py-3 px-2 mt-2"
                name="message"
                required
              ></textarea>
            </label>
            <input
              type="submit"
              value="Submit"
              className="btn bg-primary hover:bg-sky-400 text-white border-none hover:border-none"
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
