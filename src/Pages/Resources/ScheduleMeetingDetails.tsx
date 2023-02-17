import React from "react";

const ScheduleMeetingDetails = () => {
  return (
    <div className="max-w-[1400px] mx-auto overflow-hidden">
      <div className="flex justify-center my-10">
        <img
          src="https://i.ibb.co/fp7LLK7/Scheduled-meetings-icon.png"
          className="w-32 h-32"
          alt=""
        />
      </div>
      <h1 className="text-center text-5xl font-thin">Scheduled Meetings</h1>
      <h1 className="text-center text-2xl font-thin">
        When it’s best to talk later
      </h1>
      <div className="flex justify-center my-5">
        <p className="text-center w-2/4">
          Give ideal customers a way to engage when you’re not online, or at a
          time that suits them best. Offer scheduled meetings on simple pages,
          in forms, or in chatBots. Share them with a link or add them to your
          website and keep valuable conversations moving forward
        </p>
      </div>
      <hr className="my-10" />

      <div className="flex justify-center">
        <h1 className="text-center text-6xl font-bold font-sans w-3/4">
          Get more meetings booked, according to your exact rules and
          preferences
        </h1>
      </div>
      <p className="text-center my-5">
        Make it easy for the right audience to schedule time on your calendar.
      </p>

      <section className="flex justify-between gap-10 items-center my-20">
        <div className="w-1/2">
          <img src="https://i.ibb.co/qdZBHdv/Screenshot-12.png" alt="" />
        </div>
        <div className="w-1/2">
          <h1 className="text-6xl font-bold">
            Never miss an{" "}
            <span className="text-primary">opportunity to connect</span>
          </h1>
          <p className="mt-5">
            <li className="my-5">Confirm engagements even when you’re not online. Offer scheduled
            meetings on a booking link, website, or in chatBots and forms.</li>
            <li className="my-5">Maintain momentum from a live engagement by inviting visitors to
            schedule a follow-up directly from the chat window.</li>
            <li className="my-5">Reduce no-shows
            with email and SMS reminders, and optional cancel and reschedule</li>
            links.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 items-center my-10">
        <div>
          <h1 className="text-6xl font-bold">
            Efficient scheduling for{" "}
            <span className="text-primary">teams and panels </span>
          </h1>
          <p className="mt-5">
            <li className="my-5">Combine staff availability to give visitors more choice or split
            meetings equally across a team.</li>
           <li className="my-5"> Offer one-on-one or panel meetings and let customers add guests.</li>
            <li className="my-5">If the unexpected arises, reassign a meeting to another host instead
            of canceling.</li>
            <li className="my-5">Monitor and improve team performance with ScheduPlannr analytics.</li>
          </p>
        </div>
        <div className="">
          <img
            src="https://cdn.dribbble.com/users/795597/screenshots/3574014/social_network__3_.gif"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default ScheduleMeetingDetails;
