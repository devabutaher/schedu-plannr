import React from "react";
import Integration from "./Integration";
import ScheduleMeeting from "./ScheduleMeeting";
import Security from "./Security";

const Resources = () => {
  return (
    <div className="max-w-[1400px] mx-auto overflow-hidden">
      <section className="my-10">
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/3kXS6VV/Meeting-journey-builder-icon.png"
            alt=""
            className="w-28"
          />
        </div>
        <p className="text-center text-6xl font-sans font-thin">
          Meeting journey builder
        </p>
        <p className="text-center text-2xl font-bold my-3">
          Managing who gets your time now and later
        </p>
        <div className="flex justify-center">
          <p className="md:w-2/4 text-center">
            Use our no-code builder to create interactive workflows in minutes.
            Automatically manage scheduled meetings and live engagements
            according to your availability and preferences. Streamline
            information sharing and collection, qualification, routing,
            reminders, and follow-ups.
          </p>
        </div>
      </section>
      <hr />
      <section>
        <Integration/>
        <ScheduleMeeting/>
        <Security/>
      </section>
    </div>
  );
};

export default Resources;
