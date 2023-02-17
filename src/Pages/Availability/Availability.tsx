import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiOutlineDelete, AiOutlineSave } from "react-icons/ai";
import { useQuery } from "react-query";
import { AuthContext } from "../../components/Contexts/AuthProvider/AuthProvider";
import Loading from "../../Shared/Loading/Loading";

type UserSubmitForm = {
  title: string;

  sunStart: any;
  sunEnd: any;
  sunEndd: any;

  monStart: string;
  monEnd: string;
  monEndd: string;

  tueStart: string;
  tueEnd: string;
  tueEndd: string;

  wedStart: string;
  wedEnd: string;
  wedEndd: string;

  thuStart: string;
  thuEnd: string;
  thuEndd: string;

  friStart: string;
  friEnd: string;
  friEndd: string;

  satStart: string;
  satEnd: string;
  satEndd: string;
};

const Availability = () => {
  const { user, loading }: any = useContext(AuthContext);
  const [availabilityList, setAvailabilityList] = useState([]);
  const [startTime, setStartTime] = useState("12:00");
  const [endTime, setEndTime] = useState("19:00");

  useEffect(() => {
    fetch("/available.json")
      .then((res) => res.json())
      .then((data) => setAvailabilityList(data));
  }, []);

  const [sun, setSun] = useState(true);
  const [mon, setMon] = useState(true);
  const [tue, setTue] = useState(true);
  const [wed, setWed] = useState(true);
  const [thu, setThu] = useState(true);
  const [fri, setfri] = useState(true);
  const [sat, setSat] = useState(true);

  const sunStatus = (e: any) => {
    const a = e.target.checked;
    setSun(a);
  };
  const monStatus = (e: any) => {
    const a = e.target.checked;
    setMon(a);
  };
  const tueStatus = (e: any) => {
    const a = e.target.checked;
    setTue(a);
  };
  const wedStatus = (e: any) => {
    const a = e.target.checked;
    setWed(a);
  };
  const thuStatus = (e: any) => {
    const a = e.target.checked;
    setThu(a);
  };
  const friStatus = (e: any) => {
    const a = e.target.checked;
    setfri(a);
  };
  const satStatus = (e: any) => {
    const a = e.target.checked;
    setSat(a);
  };

  const { register, handleSubmit } = useForm<UserSubmitForm>();
  const handleInfo = (data: any) => {
    let sunday;
    if (sun) {
      sunday = { a: data.sunStart, b: data.sunEnd };
    } else {
      sunday = { unavailable: data.sunEndd };
    }

    let monday;
    if (mon) {
      monday = { a: data.monStart, b: data.monEnd };
    } else {
      monday = { unavailable: data.monEndd };
    }

    let tuesday;
    if (tue) {
      tuesday = { a: data.tueStart, b: data.tueEnd };
    } else {
      tuesday = { unavailable: data.tueEndd };
    }

    let wednesday;
    if (wed) {
      wednesday = { a: data.wedStart, b: data.wedEnd };
    } else {
      wednesday = { unavailable: data.wedEndd };
    }

    let thursday;
    if (thu) {
      thursday = { a: data.thuStart, b: data.thuEnd };
    } else {
      thursday = { unavailable: data.thuEndd };
    }

    let friday;
    if (fri) {
      friday = { a: data.friStart, b: data.friEnd };
    } else {
      friday = { unavailable: data.friEndd };
    }

    let saturday;
    if (sat) {
      saturday = { a: data.satStart, b: data.satEnd };
    } else {
      saturday = { unavailable: data.satEndd };
    }
    const a = {
      value: sunday,
      label: "sun",
    };
    const b = {
      value: monday,
      label: "mon",
    };
    const c = {
      value: tuesday,
      label: "tue",
    };
    const d = {
      value: wednesday,
      label: "wed",
    };
    const e = {
      value: thursday,
      label: "thu",
    };
    const f = {
      value: friday,
      label: "fri",
    };
    const g = {
      value: saturday,
      label: "sat",
    };

    const createWeeklySchedule = {
      email: user?.email,
      title: data.title,
      day: [a, b, c, d, e, f, g],
    };

    fetch("http://localhost:5000/availability", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(createWeeklySchedule),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          toast.success("Successfully Created");
        }
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  // refetch();
  return (
    <div className="py-8">
      <h1 className="text-center text-4xl pb-8 font-semibold">
        Set Your <span className="text-primary">Weekly</span> Hours
      </h1>

      <form onSubmit={handleSubmit(handleInfo)}>
        <h2 className="text-2xl font-bold mt-5">Schedule Name</h2>
        <input
          {...register("title")}
          type="text"
          className="mt-2 mb-7 bg-transparent border border-primary w-full py-3 px-2 placeholder:text-xl text-xl focus:outline-primary rounded-xl"
          placeholder="Give your schedule a name"
        />

        {/* Sun */}
        <div>
          <div className="flex align-center gap-8 py-4">
            <div className="w-28 flex gap-4 items-center">
              <input
                onChange={sunStatus}
                type="checkbox"
                checked={sun}
                className="checkbox checkbox-primary"
              />
              <span className="text-3xl">Sun</span>
            </div>

            <div className="flex items-center justify-center gap-4 w-[26rem]">
              {sun === true ? (
                <div className="flex gap-2 justify-center items-center">
                  <div className="tooltip" data-tip="Start Time">
                    <input
                      {...register("sunStart")}
                      type="time"
                      defaultValue="10:00"
                      className="input input-bordered input-primary w-full max-w-xs text-2xl"
                    />
                  </div>

                  <div className="border w-8 border-primary"></div>

                  <div className="tooltip" data-tip="End Time">
                    <input
                      {...register("sunEnd")}
                      type="time"
                      defaultValue="05:00"
                      className="input input-bordered input-primary w-full max-w-xs text-2xl"
                    />
                  </div>
                </div>
              ) : (
                <input
                  {...register("sunEndd")}
                  type="text"
                  defaultValue="unavailable"
                  className="text-3xl focus:outline-none"
                  readOnly
                />
              )}
            </div>
          </div>
        </div>

        {/* Mon */}
        <div>
          <div className="flex align-center gap-8 py-4">
            <div className="w-28 flex gap-4 items-center">
              <input
                onChange={monStatus}
                type="checkbox"
                checked={mon}
                className="checkbox checkbox-primary"
              />
              <span className="text-3xl">Mon</span>
            </div>

            <div className="flex items-center justify-center gap-4 w-[26rem]">
              {mon === true ? (
                <div className="flex gap-2 justify-center items-center">
                  <div className="tooltip" data-tip="Start Time">
                    <input
                      {...register("monStart")}
                      type="time"
                      defaultValue="10:00"
                      className="input input-bordered input-primary w-full max-w-xs text-2xl"
                    />
                  </div>

                  <div className="border w-8 border-primary"></div>

                  <div className="tooltip" data-tip="End Time">
                    <input
                      {...register("monEnd")}
                      type="time"
                      defaultValue="05:00"
                      className="input input-bordered input-primary w-full max-w-xs text-2xl"
                    />
                  </div>
                </div>
              ) : (
                <input
                  {...register("monEndd")}
                  type="text"
                  defaultValue="unavailable"
                  className="text-3xl focus:outline-none"
                  readOnly
                />
              )}
            </div>
          </div>
        </div>

        {/* Tue */}
        <div>
          <div className="flex align-center gap-8 py-4">
            <div className="w-28 flex gap-4 items-center">
              <input
                onChange={tueStatus}
                type="checkbox"
                checked={tue}
                className="checkbox checkbox-primary"
              />
              <span className="text-3xl">Tue</span>
            </div>

            <div className="flex items-center justify-center gap-4 w-[26rem]">
              {tue === true ? (
                <div className="flex gap-2 justify-center items-center">
                  <div className="tooltip" data-tip="Start Time">
                    <input
                      {...register("tueStart")}
                      type="time"
                      defaultValue="10:00"
                      className="input input-bordered input-primary w-full max-w-xs text-2xl"
                    />
                  </div>

                  <div className="border w-8 border-primary"></div>

                  <div className="tooltip" data-tip="End Time">
                    <input
                      {...register("tueEnd")}
                      type="time"
                      defaultValue="05:00"
                      className="input input-bordered input-primary w-full max-w-xs text-2xl"
                    />
                  </div>
                </div>
              ) : (
                <input
                  {...register("tueEndd")}
                  type="text"
                  defaultValue="unavailable"
                  className="text-3xl focus:outline-none"
                  readOnly
                />
              )}
            </div>
          </div>
        </div>

        {/* Wed */}
        <div>
          <div className="flex align-center gap-8 py-4">
            <div className="w-28 flex gap-4 items-center">
              <input
                onChange={wedStatus}
                type="checkbox"
                checked={wed}
                className="checkbox checkbox-primary"
              />
              <span className="text-3xl">Wed</span>
            </div>

            <div className="flex items-center justify-center gap-4 w-[26rem]">
              {wed === true ? (
                <div className="flex gap-2 justify-center items-center">
                  <div className="tooltip" data-tip="Start Time">
                    <input
                      {...register("wedStart")}
                      type="time"
                      defaultValue="10:00"
                      className="input input-bordered input-primary w-full max-w-xs text-2xl"
                    />
                  </div>

                  <div className="border w-8 border-primary"></div>

                  <div className="tooltip" data-tip="End Time">
                    <input
                      {...register("wedEnd")}
                      type="time"
                      defaultValue="05:00"
                      className="input input-bordered input-primary w-full max-w-xs text-2xl"
                    />
                  </div>
                </div>
              ) : (
                <input
                  {...register("wedEndd")}
                  type="text"
                  defaultValue="unavailable"
                  className="text-3xl focus:outline-none"
                  readOnly
                />
              )}
            </div>
          </div>
        </div>

        {/* Thu */}
        <div>
          <div className="flex align-center gap-8 py-4">
            <div className="w-28 flex gap-4 items-center">
              <input
                onChange={thuStatus}
                type="checkbox"
                checked={thu}
                className="checkbox checkbox-primary"
              />
              <span className="text-3xl">Thu</span>
            </div>

            <div className="flex items-center justify-center gap-4 w-[26rem]">
              {thu === true ? (
                <div className="flex gap-2 justify-center items-center">
                  <div className="tooltip" data-tip="Start Time">
                    <input
                      {...register("thuStart")}
                      type="time"
                      defaultValue="10:00"
                      className="input input-bordered input-primary w-full max-w-xs text-2xl"
                    />
                  </div>

                  <div className="border w-8 border-primary"></div>

                  <div className="tooltip" data-tip="End Time">
                    <input
                      // onChange={(e) => handleInfo(e, _id)}
                      {...register("thuEnd")}
                      type="time"
                      defaultValue="05:00"
                      className="input input-bordered input-primary w-full max-w-xs text-2xl"
                    />
                  </div>
                </div>
              ) : (
                <input
                  {...register("thuEndd")}
                  type="text"
                  defaultValue="unavailable"
                  className="text-3xl focus:outline-none"
                  readOnly
                />
              )}
            </div>
          </div>
        </div>

        {/* Fri */}
        <div>
          <div className="flex align-center gap-8 py-4">
            <div className="w-28 flex gap-4 items-center">
              <input
                onChange={friStatus}
                type="checkbox"
                checked={fri}
                className="checkbox checkbox-primary"
              />
              <span className="text-3xl">Fri</span>
            </div>

            <div className="flex items-center justify-center gap-4 w-[26rem]">
              {fri === true ? (
                <div className="flex gap-2 justify-center items-center">
                  <div className="tooltip" data-tip="Start Time">
                    <input
                      {...register("friStart")}
                      type="time"
                      defaultValue="10:00"
                      className="input input-bordered input-primary w-full max-w-xs text-2xl"
                    />
                  </div>

                  <div className="border w-8 border-primary"></div>

                  <div className="tooltip" data-tip="End Time">
                    <input
                      {...register("friEnd")}
                      type="time"
                      defaultValue="05:00"
                      className="input input-bordered input-primary w-full max-w-xs text-2xl"
                    />
                  </div>
                </div>
              ) : (
                <input
                  {...register("friEndd")}
                  type="text"
                  defaultValue="unavailable"
                  className="text-3xl focus:outline-none"
                  readOnly
                />
              )}
            </div>
          </div>
        </div>

        {/* Sat */}
        <div>
          <div className="flex align-center gap-8 py-4">
            <div className="w-28 flex gap-4 items-center">
              <input
                onChange={satStatus}
                type="checkbox"
                checked={sat}
                className="checkbox checkbox-primary"
              />
              <span className="text-3xl">Sat</span>
            </div>

            <div className="flex items-center justify-center gap-4 w-[26rem]">
              {sat === true ? (
                <div className="flex gap-2 justify-center items-center">
                  <div className="tooltip" data-tip="Start Time">
                    <input
                      {...register("satStart")}
                      type="time"
                      defaultValue="10:00"
                      className="input input-bordered input-primary w-full max-w-xs text-2xl"
                    />
                  </div>

                  <div className="border w-8 border-primary"></div>

                  <div className="tooltip" data-tip="End Time">
                    <input
                      {...register("satEnd")}
                      type="time"
                      defaultValue="05:00"
                      className="input input-bordered input-primary w-full max-w-xs text-2xl"
                    />
                  </div>
                </div>
              ) : (
                <input
                  {...register("satEndd")}
                  type="text"
                  defaultValue="unavailable"
                  className="text-3xl focus:outline-none"
                  readOnly
                />
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center py-4 mt-5">
          <button type="submit" className="btn px-10 text-lg">
            Submit Save
          </button>
        </div>
      </form>
    </div>
  );
};
export default Availability;
