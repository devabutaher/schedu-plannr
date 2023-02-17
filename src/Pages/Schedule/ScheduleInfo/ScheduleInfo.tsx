import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../components/Contexts/AuthProvider/AuthProvider";
import Loading from "../../../Shared/Loading/Loading";

type UserSubmitForm = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  title: string;
  location: string;
  link: string;
  description: string;
};

const ScheduleInfo = ({ value, slot, slotPm }: any) => {
  const { user }: any = useContext(AuthContext);
  const navigate = useNavigate();
  const { data: weeklyAvailability, isLoading, refetch } = useQuery({
    queryKey: ["weeklyAvailability", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/weeklySchedule?email=${user?.email}`);
      const data = res.json();
      return data;
    }
  })
  const [getAvailability, setGetAvailability] = useState<any>([weeklyAvailability]);

  const handleAvailability = (id: any) => {
    fetch(`http://localhost:5000/weeklySchedule/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setGetAvailability(data);
        }
      });


  }
  console.log(getAvailability?.day);

  if (weeklyAvailability) {
    console.log(weeklyAvailability);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>();

  const handleInfo = (data: UserSubmitForm) => {
    const name = data.name;
    const email = data.email;
    const phone = data.phone;
    const organization = data.organization;
    const title = data.title;
    const location = data.location;
    const link = data.link;
    const description = data.description;

    const info = {
      name,
      email,
      phone,
      organization,
      title,
      location,
      link,
      description,
      value,
      slot,
      slotPm,
    };

    fetch("https://scheduplannr-server.vercel.app/createSchedule", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Schedule Created Successfully");
          navigate("/dashboard/mySchedule");
        } else {
          toast.error("Schedule Created Failed");
        }
      })
      .catch((error) => console.error(error));

    fetch("http://localhost:5000/scheduleCreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data.acknowledged);
          // toast.success("Schedule Created Successfully");
          // navigate("/dashboard/mySchedule");
        } else {
          // toast.error("Schedule Created Failed");
        }
      })
      .catch((error) => console.error(error));
  };

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <>
      <div className="py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <h1 className="text-center text-4xl py-10 font-semibold">
            Schedule <span className="text-primary">Information</span>
          </h1>

          <form
            onSubmit={handleSubmit(handleInfo)}
            className="max-w-screen-md grid sm:grid-cols-2 gap-8 mx-auto"
          >
            <div>
              <label
                htmlFor="name"
                className="inline-block  text-sm sm:text-base mb-2"
              >
                Name
              </label>
              <input
                {...register("name", {
                  required: "Name is Required",
                })}
                value={user?.displayName}
                id="name"
                name="name"
                className="w-full bg-transparent  border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
              />
              {errors.name && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="inline-block  text-sm sm:text-base mb-2"
              >
                Email
              </label>
              <input
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid Email Address",
                  },
                })}
                value={user?.email}
                id="email"
                name="email"
                className="w-full bg-transparent  border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="inline-block  text-sm sm:text-base mb-2"
              >
                Phone Number
              </label>
              <input
                {...register("phone", {
                  required: "Phone Number is Required",
                })}
                id="phone"
                name="phone"
                type="text"
                className="w-full bg-transparent  border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
              />
              {errors.phone && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="organization"
                className="inline-block  text-sm sm:text-base mb-2"
              >
                Organization Name
              </label>
              <input
                {...register("organization", {
                  required: "Organization Name is Required",
                })}
                id="organization"
                name="organization"
                className="w-full bg-transparent  border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
              />
              {errors.organization && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.organization.message}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="title"
                className="inline-block  text-sm sm:text-base mb-2"
              >
                Schedule Title
              </label>
              <input
                {...register("title", {
                  required: "Please Give A Schedule Title",
                })}
                id="title"
                name="title"
                className="w-full bg-transparent  border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
              />
              {errors.title && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="location"
                className="inline-block  text-sm sm:text-base mb-2"
              >
                Schedule Location
              </label>
              <div className="flex justify-between items-center gap-4 flex-wrap py-2">
                <img
                  className="w-20"
                  src="https://img.icons8.com/clouds/2x/google-meet.png"
                  alt=""
                />
                <img
                  className="w-20"
                  src="https://img.icons8.com/bubbles/2x/skype.png"
                  alt=""
                />
                <img
                  className="w-20"
                  src="https://img.icons8.com/clouds/2x/zoom.png"
                  alt=""
                />
                <img
                  className="w-20"
                  src="https://img.icons8.com/clouds/2x/microsoft-teams-2019.png"
                  alt=""
                />
                <img
                  className="w-20"
                  src="https://img.icons8.com/bubbles/512/hangout.png"
                  alt=""
                />
                <img
                  className="w-20 hidden md:block"
                  src="https://img.icons8.com/clouds/2x/whatsapp.png"
                  alt=""
                />
              </div>
              <select
                {...register("location", {
                  required: "Please Select A Location",
                })}
                id="location"
                className="select w-full bg-transparent  border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
              >
                <option className="text-xl" disabled>
                  Select Your Location
                </option>
                <option className="text-xl">Google Meet</option>
                <option className="text-xl">Skype</option>
                <option className="text-xl">Zoom</option>
                <option className="text-xl">Microsoft Team</option>
                <option className="text-xl">Google Hangouts</option>
                <option className="text-xl">WhatsApp</option>
              </select>
              {errors.location && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.location.message}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="link"
                className="inline-block  text-sm sm:text-base mb-2"
              >
                Schedule Link
              </label>
              <input
                {...register("link", {
                  required: "Please Give A Schedule Link",
                })}
                id="link"
                name="link"
                className="w-full bg-transparent  border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
              />
              {errors.link && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.link.message}
                </p>
              )}
              <br />
              <div className="dropdown dropdown-hover mt-16">
                <label tabIndex={0} className="btn bg-gray-200 text-gray-800 hover:bg-gray-200 rounded outline-none m-1 w-[768px]"> Use an existing schedule</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow-2xl bg-gray-100 w-full">
                  {
                    weeklyAvailability?.map((weekAvailability: any) => <li onClick={() => handleAvailability(weekAvailability._id)}
                      className="text-xl cursor-pointer hover:bg-primary hover:text-white">{weekAvailability.title}</li>

                    )
                  }
                </ul>
              </div>

              {/* </select> */}
              <div className="w-full flex mt-10 rounded-lg border border-gray-300">
                <div className=" w-6/12 py-5 border-r-2 border-gray-300">
                  <h3 className="text-lg font-bold m-5">Weekly Hours</h3>
                  <div className="flex items-center px-5 ">
                    <div className="grid col-span-1 text-2xl font-bold mr-16">
                      {getAvailability &&
                        getAvailability?.day?.map((v: any) => <span className="mb-5">{v.label}</span>)
                      }
                    </div>
                    <div className="grid col-span-1 text-2xl">




                      {getAvailability &&
                        getAvailability?.day?.map((v: any) => <span className="mb-5">{
                          v.value?.a ?
                            <span className="mb-5">{v.value?.a} – {v.value?.b} </span>
                            :
                            <span className="mb-5">Unavailable</span>
                        }</span>)
                      }
                    </div>
                  </div>
                </div>
                <div className=" w-6/12">
                  <h2 className="text-xl font-bold my-12 ml-5">DATE OVERRIDES</h2>
                  <p className="text-center text-lg text-gray-500"> To override your hours on specific dates, update your schedule under Availability</p>
                </div>
              </div>
            </div>




            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="inline-block  text-sm sm:text-base mb-2"
              >
                Description
              </label>
              <textarea
                {...register("description")}
                defaultValue="Thanks for joining the meeting on time"
                id="description"
                name="description"
                className="w-full h-40 bg-transparent  border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
              ></textarea>
            </div>
            <div></div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 focus-visible:ring ring-sky-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                Create Schedule
              </button>
            </div>
          </form>
        </div>
      </div >
    </>
  );
};

export default ScheduleInfo;
