import React from "react";
import { Link } from "react-router-dom";

const IntegrationDetails = () => {
  return (
    <div className="container mx-auto">
      <section className="overflow-hidden flex justify-between items-center">
        <div className="mx-auto max-w-xl text-center sm:text-left w-1/2">
          <h2 className="text-2xl font-bold  md:text-3xl">
            Video conferencing{" "}
            <span className="text-base font-normal">
              is a type of virtual, online meeting where two or more people talk
              through a video and audio call in real-time. Video conferencing
              has been around for years, but it skyrocketed in popularity as
              school and work shifted into the home during the 2020 pandemic.
            </span>
          </h2>
        </div>

        <div className="w-1/2">
          <img
            alt="Student"
            src="https://i.ibb.co/GPR0PYQ/MJB-Automate-tasks.png"
            className="h-56 sm:h-full p-20"
          />
        </div>
      </section>
      <section>
        <div>
          <h1 className="text-2xl">Native integrations</h1>
        </div>
        <h1 className="text-center text-4xl">Video conferencing</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
          <div>
            <article className="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6">
              <div className="flex items-center gap-9">
                <div>
                  <img
                    src="https://i.ibb.co/TtgyDVY/5e8ce318664eae0004085461.png"
                    alt=""
                    className="h-14 w-14"
                  />
                </div>

                <div>
                  <h3 className="mt-0.5 text-2xl font-bold ">Zoom</h3>
                </div>
              </div>

              <p className="mt-2 text-sm leading-relaxed  line-clamp-3">
                Automatically include secure Zoom meeting links in your
                scheduling activity.
              </p>

              <Link
                to={"/zoom"}
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </Link>
            </article>
          </div>
          <div>
            <article className="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6">
              <div className="flex items-center gap-9">
                <div>
                  <img
                    src="https://cdn.icon-icons.com/icons2/2642/PNG/512/google_meet_camera_logo_icon_159349.png"
                    alt=""
                    className="h-14 w-14"
                  />
                </div>

                <div>
                  <h3 className="mt-0.5 text-2xl font-bold ">Google Meet</h3>
                </div>
              </div>

              <p className="mt-2 text-sm leading-relaxed  line-clamp-3">
                Automatically include secure Google Meet meeting links in your
                scheduling activity.
              </p>

              <Link
                to={"/meet"}
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </Link>
            </article>
          </div>
          <div>
            <article className="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6">
              <div className="flex items-center gap-9">
                <div>
                  <img
                    src="https://www.clipartmax.com/png/full/19-193109_microsoft-clip-art-software.png"
                    alt=""
                    className="h-14 w-14"
                  />
                </div>

                <div>
                  <h3 className="mt-0.5 text-2xl font-bold ">Microsoft Team</h3>
                </div>
              </div>

              <p className="mt-2 text-sm leading-relaxed  line-clamp-3">
                Automatically include secure Microsoft Team meeting links in
                your scheduling activity.
              </p>

              <Link
                to={"/msTeam"}
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </Link>
            </article>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/XC_D4jBpdaY"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default IntegrationDetails;
