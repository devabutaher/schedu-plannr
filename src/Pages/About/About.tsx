import React from "react";
import "./About.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import useTitle from "../../hooks/useTitle/useTitle";

const About = () => {
  useTitle("About");
  return (
    <div className=" max-w-[1300px] mx-auto overflow-hidden">
      <section className="text-center mb-20 pt-20">
        <h1 className="text-4xl font-bold" data-aos="fade-down">
          Who is <span className="text-primary">ScheduPlannr</span>?
        </h1>
        <p
          className="text-xl my-10 w-9/12 mx-auto leading-8"
          data-aos="zoom-in-up"
        >
          In the hare and the tortoise fable we like to think of ourselves as
          the tortoise. Not in the sense of being slow, but in the sense of
          being consistent in the pursuit of our long-term goals. Here are some
          of the key traits that make us a good tortoise…
        </p>
      </section>

      <section className="">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <div className="lg:w-5/12 w-full" data-aos="fade-right">
              <img
                src="https://i.ibb.co/QDxTRcN/E-Wallet-bro.png"
                className="lg:max-w-sm rounded-lg lg:ml-10"
                alt=""
              />
            </div>
            <div className="lg:w-7/12 lg:text-left text-center mt-5">
              <h1
                className="lg:text-3xl text-3xl font-bold mb-5"
                data-aos="fade-left"
              >
                Fair pricing!
              </h1>
              <p
                className="py-6 text-lg lg:w-11/12 leading-relaxed"
                data-aos="fade-left"
              >
                Since we are funded by our customers, a long term win-win
                relationship with them is critical. Those who cannot afford to
                pay for our services can use our very generous Premium plan.
                Customers who upgrade to a paid version only pay for the
                engagement options they use. Any billing changes can always be
                made via self-service including deletion of their OnceHub
                account.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10 lg:hidden block">
        <div className="hero">
          <div
            className="hero-content flex-col lg:flex-row"
            data-aos="fade-left"
          >
            <div className="w-full">
              <img src="https://i.ibb.co/Cbqq05B/Work-time-pana.png" alt="" />
            </div>
            <div className="w-full text-center mt-5">
              <h1 className="text-3xl font-bold mb-5" data-aos="fade-right">
                Always available
              </h1>
              <p className="py-6 text-xl leading-relaxed" data-aos="fade-right">
                Our strong connection with our customers is put to the test when
                they need us. Whether reaching out for support, onboarding help,
                or looking to schedule a discovery session, our team is always
                here to help. Our support team is available 24/7 with a quick
                turnaround. Our sales team is available to speak with prospects
                via live chat or a scheduled meeting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10 hidden lg:block">
        <div className="hero">
          <div
            className="hero-content flex-col lg:flex-row"
            data-aos="fade-right"
          >
            <div className="w-7/12 mt-5">
              <h1 className="text-3xl font-bold mb-5" data-aos="fade-left">
                Always available
              </h1>
              <p
                className="py-6 text-lg lg:w-11/12 leading-relaxed"
                data-aos="fade-left"
              >
                Our strong connection with our customers is put to the test when
                they need us. Whether reaching out for support, onboarding help,
                or looking to schedule a discovery session, our team is always
                here to help. Our support team is available 24/7 with a quick
                turnaround. Our sales team is available to speak with prospects
                via live chat or a scheduled meeting.
              </p>
            </div>
            <div className="w-5/12">
              <img src="https://i.ibb.co/Cbqq05B/Work-time-pana.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10">
        <h1 className="lg:text-5xl text-4xl font-bold text-center">
          Our founders
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-28 w-full lg:mx-12 mx-7">
          {/* Asif Ullah Sikder */}
          <div className="cardbox">
            <div className="imgbox">
              <img
                src="https://i.ibb.co/Wcy6mpV/me.png"
                className="rounded-2xl"
                alt=""
              />
            </div>
            <div className="content">
              <div className="details">
                <h2 className="text-2xl font-semibold ">
                  Md. Asif Ullah Sikder
                </h2>
                <h3 className="text-xl font-light">Frontend Developer</h3>
                <div className="flex my-5 justify-center">
                  <a href="https://asifullahsikder-58465.web.app/">
                    <button className="px-6 text-base btn btn-primary mx-1 ">
                      Portfolio
                    </button>
                  </a>
                  <a href="https://drive.google.com/file/d/18ubG-0IT5cAFk9Xez0w0E-_VsQEkgS4o/view?usp=share_link">
                    <button className="px-7 text-base btn btn-outline btn-primary mx-1">
                      Resume
                    </button>
                  </a>
                </div>
                <div className="flex justify-center mt-2">
                  <span className="drop w-12 h-12 rounded-full mx-2">
                    <a href="https://www.linkedin.com/in/asifsikder23/">
                      <FaLinkedinIn className="text-primary" />
                    </a>
                  </span>
                  <span className="drop w-12 h-12 rounded-full mx-2">
                    <a href="https://www.facebook.com/asifullahsikder">
                      <FaFacebookF className="text-primary" />
                    </a>
                  </span>
                  <span className="drop w-12 h-12 rounded-full mx-2">
                    <MdEmail className="text-primary" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Abu Taher */}
          <div className="cardbox">
            <div className="imgbox">
              <img
                src="https://i.ibb.co/72Yk2Mt/299659082-117802967681821-5760830339680529478-n-removebg-preview.png"
                className="rounded-2xl"
                alt=""
              />
            </div>
            <div className="content">
              <div className="details">
                <h2 className="text-2xl font-semibold ">Abu Taher</h2>
                <h3 className="text-xl font-light">Front-End Web Developer</h3>
                <div className="flex my-5 justify-center">
                  <a href="https://abu-taher-portfolio.web.app/">
                    <button className="px-6 text-base btn btn-primary mx-1">
                      Portfolio
                    </button>
                  </a>
                  <a href="https://drive.google.com/file/d/1chhVtIsrpYDgIYB-Ta9C1PjnTHijrBkk/view">
                    <button className="px-7 text-base btn btn-outline btn-primary mx-1">
                      Resume
                    </button>
                  </a>
                </div>
                <div className="flex justify-center mt-2">
                  <span className="drop w-12 h-12 rounded-full mx-2">
                    <a href="https://www.linkedin.com/in/writerabutaher/">
                      <FaLinkedinIn className="text-primary" />
                    </a>
                  </span>
                  <span className="drop w-12 h-12 rounded-full mx-2">
                    <a href="https://www.facebook.com/AbuTaher9682/">
                      <FaFacebookF className="text-primary" />
                    </a>
                  </span>
                  <span className="drop w-12 h-12 rounded-full mx-2">
                    <MdEmail className="text-primary" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sayed Abu Ahmad */}
          <div className="cardbox">
            <div className="imgbox">
              <img
                src="https://i.ibb.co/cJCbd31/siam-removebg-preview-1-removebg-preview.png"
                className="rounded-2xl"
                alt=""
              />
            </div>
            <div className="content">
              <div className="details">
                <h2 className="text-2xl font-semibold "> Sayed Abu Ahmad</h2>
                <h3 className="text-xl font-light">Front-End Web Developer</h3>
                <div className="flex my-5 justify-center">
                  <a href="https://sayed111-portfolio.netlify.app/">
                    <button className="px-6 text-base btn btn-primary mx-1">
                      Portfolio
                    </button>
                  </a>
                  <button className="px-7 text-base btn btn-outline btn-primary mx-1">
                    Resume
                  </button>
                </div>
                <div className="flex justify-center mt-2">
                  <span className="drop w-12 h-12 rounded-full mx-2">
                    <a href="https://www.linkedin.com/in/sayed-siam">
                      <FaLinkedinIn className="text-primary" />
                    </a>
                  </span>
                  <span className="drop w-12 h-12 rounded-full mx-2">
                    <a href="https://www.facebook.com/siam.husain">
                      <FaFacebookF className="text-primary" />
                    </a>
                  </span>
                  <span className="drop w-12 h-12 rounded-full mx-2">
                    <MdEmail className="text-primary" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Syeda Ayesha Ahmad */}
          <div className="cardbox">
            <div className="imgbox">
              <img
                src="https://i.ibb.co/CVXdMVz/small.png"
                className="rounded-2xl"
                alt=""
              />
            </div>
            <div className="content">
              <div className="details">
                <h2 className="text-2xl font-semibold ">Syeda Ayesha Ahmad</h2>
                <h3 className="text-xl font-light">Front-End Web Developer</h3>
                <div className="flex my-5 justify-center">
                  <a href="https://aisha-ahmad-portfolio.netlify.app/">
                    <button className="px-6 text-base btn btn-primary mx-1">
                      Portfolio
                    </button>
                  </a>
                  <a href="https://drive.google.com/file/d/1yvhKJNPYLKxwPufh4SP4eQfuLucXV5Ex/view">
                    <button className="px-7 text-base btn btn-outline btn-primary mx-1">
                      Resume
                    </button>
                  </a>
                </div>
                <div className="flex justify-center mt-2">
                  <a href="https://www.linkedin.com/in/aisha-ahmad19">
                    <span className="drop w-12 h-12 rounded-full mx-2">
                      <FaLinkedinIn className="text-primary" />
                    </span>
                  </a>

                  <span className="drop w-12 h-12 rounded-full mx-2">
                    <a href="https://www.facebook.com/profile.php?id=100015597035398">
                      <FaFacebookF className="text-primary" />
                    </a>
                  </span>
                  <span className="drop w-12 h-12 rounded-full mx-2">
                    <MdEmail className="text-primary" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Moddasir */}
          <div className="cardbox">
            <div className="imgbox">
              <img
                src="https://i.ibb.co/NSK2qbZ/Passport-Size-1-removebg-preview.png"
                className="rounded-2xl"
                alt=""
              />
            </div>
            <div className="content">
              <div className="details">
                <h2 className="text-2xl font-semibold ">Moddasir</h2>
                <h3 className="text-xl font-light">Front-end Developer</h3>
                <div className="flex my-5 justify-center">
                  <a href="https://moddas311.github.io/portfolio/">
                    <button className="px-6 text-base btn btn-primary mx-1">
                      Portfolio
                    </button>
                  </a>

                  <button className="px-7 text-base btn btn-outline btn-primary mx-1">
                    Resume
                  </button>
                </div>
                <div className="flex justify-center mt-2">
                  <a
                    href="https://www.linkedin.com/in/m-moddasir/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <span className="drop w-12 h-12 rounded-full mx-2">
                      <FaLinkedinIn className="text-primary" />
                    </span>
                  </a>

                  <a href="https://web.facebook.com/mdmuddasir.hossain.5">
                    <span className="drop w-12 h-12 rounded-full mx-2">
                      <FaFacebookF className="text-primary" />
                    </span>
                  </a>

                  <span className="drop w-12 h-12 rounded-full mx-2">
                    <MdEmail className="text-primary" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Yeasin Arafat */}
          <div className="cardbox">
            <div className="imgbox">
              <img
                src="https://i.ibb.co/rQHLSYX/d-removebg-previesw.png"
                className="rounded-2xl"
                alt=""
              />
            </div>
            <div className="content">
              <div className="details">
                <h2 className="text-2xl font-semibold ">Yeasin Arafat</h2>
                <h3 className="text-xl font-light">Front-end Developer</h3>
                <div className="flex my-5 justify-center">
                  <button className="px-7 text-base btn btn-primary mx-1">
                    Portfolio
                  </button>
                  <button className="px-6 text-base btn btn-outline btn-primary mx-1">
                    Resume
                  </button>
                </div>
                <div className="flex justify-center mt-2">
                  <a href="https://www.linkedin.com/in/yeasin-arafat10/">
                    <span className="drop w-12 h-12 rounded-full mx-2">
                      <FaLinkedinIn className="text-primary" />
                    </span>
                  </a>

                  <a href="https://www.facebook.com/profile.php?id=100065181076417">
                    <span className="drop w-12 h-12 rounded-full mx-2">
                      <FaFacebookF className="text-primary" />
                    </span>
                  </a>

                  <span className="drop w-12 h-12 rounded-full mx-2">
                    <MdEmail className="text-primary" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
