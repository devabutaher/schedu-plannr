import React from "react";

const Membership = () => {
  return (
    <div className="flex justify-between mx-10">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <div className="md:w-1/2">
            <img
              src="https://finwave.co/images/gif/Why_Us-1.gif"
              className="rounded-lg"
              alt=""
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold">
              Interested to be our member???
            </h1>
            <p className="py-6 text-justify">
              As a member, you will be able to take an active role in our events
              and campaigns carried out throughout the year. Our upcoming
              activities are available to you on our calendar, social media and
              membership newsletters. We are always open to ideas via email.
              Become a member of Family Reproductive Health Association with
              just RM12 per annum and RM100 for lifetime membership. Register
              now to become a part of our family.
            </p>
            <button className="btn btn-primary">Click Here</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
