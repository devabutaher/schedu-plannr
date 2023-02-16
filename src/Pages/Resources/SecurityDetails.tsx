import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const SecurityDetails = () => {
  return (
    <div className="max-w-[1400px] mx-auto overflow-hidden">
      <section className="overflow-hidden sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div>
            <div data-aos="fade-right">
              <img
                src="https://www.pngmart.com/files/7/Security-PNG-Transparent-Picture.png"
                alt=""
                className="w-20 h-20"
              />
            </div>
            <p className="text-6xl font-sans font-bold" data-aos="fade-right">
              Security
            </p>
            <p className="my-5" data-aos="fade-right">
              We build security into everything we do.
            </p>
          </div>
        </div>

        <div data-aos="zoom-in-left">
          <img
            alt="Student"
            src="https://images.squarespace-cdn.com/content/v1/5ade0eb85cfd79247926399a/1628025398906-UGAHWXAJLGZFZ5Y48N1A/Cybersecurity_1.gif?format=1000w"
            className="h-56 w-full object-cover sm:h-full"
          />
        </div>
      </section>
      <section className="flex justify-center">
        <ul className="p-4 lg:p-8">
          <li>
            <article className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="mb-1">
                <img
                  src="https://baytechrecovery.com/wp-content/uploads/2021/05/security_proffesional_services_KWM_DOTS.gif"
                  alt="" className="md:w-3/4"
                />
              </div>
              <div className=" p-4 overflow-hidden rounded-xl">
                <h3 className="mb-5 ml-8 font-semibold text-2xl">
                  Data security
                </h3>
                <div className="ml-8 md:ml-0 flex gap-10">
                  <AiOutlineCheck className="w-16 h-16" />
                  <p>
                    Customer data is managed and stored using industry-standard
                    database technologies. All data and backups are encrypted at
                    rest using strong cyphers (AES 256) and securely managed
                    encryption keys. Our applications are ‘HTTPS only’ and all
                    data in transit is encrypted using TLS 1.2 and higher.
                  </p>
                </div>
                <div className="ml-8 md:ml-0 flex gap-10 mt-5">
                  <AiOutlineCheck className="w-16 h-16" />
                  <p>
                    Our calendar integrations use secure server to server
                    authentication protocols. Official APIs are always used to
                    read data in real time and we only access the calendar data
                    necessary to provide real-time availability during
                    scheduling.
                  </p>
                </div>
              </div>
            </article>
          </li>
        </ul>
      </section>
      <section className="flex justify-center">
        <ul className="p-4 lg:p-8">
          <li>
            <article className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="mb-1">
                <img
                  src="https://www.asdcybersecurity.in/wp-content/uploads/2022/03/21150-illustration-cybersecurity-as-a-service-2-1.gif"
                  alt="" className="md:w-3/4"
                />
              </div>
              <div className=" p-4 overflow-hidden rounded-xl">
                <h3 className="mb-5 ml-8 font-semibold text-2xl my-5">
                  Software security
                </h3>
                <div className="ml-8 md:ml-0 flex gap-10">
                  <AiOutlineCheck className="w-16 h-16" />
                  <p>
                    We follow a Secure Software Development Lifecycle (SDLC)
                    model, which incorporates security and privacy by design,
                    throughout all phases of product development, testing,
                    release, and post release support.
                  </p>
                </div>
                <div className="ml-8 md:ml-0 flex gap-10 mt-5">
                  <AiOutlineCheck className="w-16 h-16" />
                  <p>
                    We perform numerous automated and manual vulnerability tests
                    both prior to, and post-release, in order to maintain a high
                    level of product security.
                  </p>
                </div>
                <div className="ml-8 md:ml-0 flex gap-10 mt-5">
                  <AiOutlineCheck className="w-16 h-16" />
                  <p>
                    Our project managers, developers, and quality assurance
                    testers are regularly trained on security issues, trends,
                    defensive programming concepts, and attack surface reduction
                    techniques including the OWASP Application Security
                    Verification Standards.
                  </p>
                </div>
                <div className="ml-8 md:ml-0 flex gap-10 mt-5">
                  <AiOutlineCheck className="w-16 h-16" />
                  <p>
                    Our products provide advanced security tools, including
                    two-factor authentication, account lockout, password
                    policies, and session timeout settings, which enable you to
                    further enhance your account security.
                  </p>
                </div>
              </div>
            </article>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default SecurityDetails;
