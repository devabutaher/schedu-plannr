import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineDelete, AiOutlineSave } from "react-icons/ai";
import { useQuery } from "react-query";
import useTitle from "../../hooks/useTitle/useTitle";

type UserSubmitForm = {
  sunStart: string;
  sunEnd: string;
};

const Availability = () => {
  const [sun, setSun] = useState(true);
  const [mon, setMon] = useState(true);
  const [tue, setTue] = useState(true);
  const [wed, setWed] = useState(true);
  const [thu, setThu] = useState(true);
  const [fri, setFri] = useState(true);
  const [sat, setSat] = useState(true);
  useTitle("Availability");
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["availability"],
    queryFn: async () => {
      const res = await fetch(
        `https://scheduplannr-server.vercel.app/availability`
      );
      const data = res.json();
      return data;
    },
  });

  const handleStatus = (e: any) => {
    const checked = e.target.checked;
    if (!checked) {
    }
  };

  const { register, handleSubmit } = useForm<UserSubmitForm>();

  const handleInfo = (e: any) => {
    // const start_time = e.target.start_time.value
    // const end_time = e.target.end_time.value

    console.log(e.target.start_time);
    // console.log(end_time)
  };

  return (
    <div className="py-8">
      <h1 className="text-center text-4xl pb-8 font-semibold">
        Set Your <span className="text-primary">Weekly</span> Hours
      </h1>

      <form onSubmit={handleSubmit(handleInfo)}>
        {data.map((e: any, i: number) => {
          const { day, start_time, end_time, status, _id } = e;
          return (
            <div className="flex align-center gap-8 py-4">
              <div className="w-28 flex gap-4 items-center">
                <input
                  onClick={handleStatus}
                  type="checkbox"
                  defaultChecked={true}
                  className="checkbox checkbox-primary"
                />
                <span className="text-3xl">{day}</span>
              </div>

              {status === "available" ? (
                <div className="flex items-center gap-4 w-[26rem]">
                  <div className="tooltip" data-tip="Start Time">
                    <input
                      onChange={handleInfo}
                      name="start_time"
                      type="time"
                      defaultValue={start_time}
                      className="input input-bordered input-primary w-full max-w-xs text-2xl"
                    />
                  </div>

                  <div className="border w-8 border-primary"></div>

                  <div className="tooltip" data-tip="End Time">
                    <input
                      onChange={handleInfo}
                      name="end_time"
                      type="time"
                      defaultValue={end_time}
                      className="input input-bordered input-primary w-full max-w-xs text-2xl"
                    />
                  </div>
                </div>
              ) : (
                <div className="w-[26rem] flex justify-center items-center py-2">
                  <p className="text-2xl">Unavailable</p>
                </div>
              )}

              <div className="flex gap-6 items-center justify-end w-40">
                <button
                  className="text-gray-500 hover:text-black tooltip"
                  data-tip="Save"
                >
                  <AiOutlineSave size={"2rem"} />
                </button>

                <button
                  className="text-gray-500 hover:text-black tooltip"
                  data-tip="Delete"
                >
                  <AiOutlineDelete size={"2rem"} />
                </button>
              </div>
            </div>
          );
        })}
        <div className="flex justify-center py-4">
          <button type="submit" className="btn text-white">
            Submit Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Availability;
