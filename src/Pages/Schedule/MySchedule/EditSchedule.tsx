import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

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

const EditSchedule = ({
  organization,
  name,
  link,
  location,
  title,
  description,
  phone,
  email,
  _id,
  refetch,
}: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>();

  const handleEdit = (data: UserSubmitForm) => {
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
    };

    fetch(`https://scheduplannr-server.vercel.app/createSchedule/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          refetch();
          toast.success("Info Updated Successfully");
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <label htmlFor="my-modal-3" className="modal">
        <label htmlFor="" className="modal-box w-11/12 max-w-5xl">
          <label
            htmlFor="my-modal-3"
            className="btn btn-md btn-circle absolute right-4 top-4"
          >
            ✕
          </label>
          <h1 className="text-center text-4xl py-10 font-semibold">
            Schedule <span className="text-primary">Information</span>
          </h1>
          <form
            onSubmit={handleSubmit(handleEdit)}
            className="max-w-screen-md grid sm:grid-cols-2 gap-8 mx-auto"
          >
            <div>
              <label
                htmlFor="name"
                className="inline-block text-sm sm:text-base mb-2"
              >
                Name
              </label>
              <input
                {...register("name", {
                  required: "Name is Required",
                })}
                defaultValue={name}
                id="name"
                name="name"
                className="w-full bg-transparent border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
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
                className="inline-block 0 text-sm sm:text-base mb-2"
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
                defaultValue={email}
                id="email"
                name="email"
                className="w-full bg-transparent border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
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
                className="inline-block text-sm sm:text-base mb-2"
              >
                Phone Number
              </label>
              <input
                {...register("phone", {
                  required: "Phone Number is Required",
                })}
                defaultValue={phone}
                id="phone"
                name="phone"
                type="text"
                className="w-full bg-transparent border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
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
                className="inline-block text-sm sm:text-base mb-2"
              >
                Organization Name
              </label>
              <input
                {...register("organization", {
                  required: "Organization Name is Required",
                })}
                defaultValue={organization}
                id="organization"
                name="organization"
                className="w-full bg-transparent border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
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
                className="inline-block text-sm sm:text-base mb-2"
              >
                Schedule Title
              </label>
              <input
                {...register("title", {
                  required: "Please Give A Schedule Title",
                })}
                defaultValue={title}
                id="title"
                name="title"
                className="w-full bg-transparent border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
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
                className="inline-block text-sm sm:text-base mb-2"
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
                  className="w-20"
                  src="https://img.icons8.com/clouds/2x/whatsapp.png"
                  alt=""
                />
              </div>
              <select
                {...register("location", {
                  required: "Please Select A Location",
                })}
                defaultValue={location}
                id="location"
                className="select w-full bg-transparent border ring focus:ring ring-sky-300 rounded transition duration-100 px-3 py-2"
              >
                <option className="text-xl bg-transparent" disabled>
                  Select Your Location
                </option>
                <option className="text-xl bg-transparent">Google Meet</option>
                <option className="text-xl bg-transparent">Skype</option>
                <option className="text-xl bg-transparent">Zoom</option>
                <option className="text-xl bg-transparent">
                  Microsoft Team
                </option>
                <option className="text-xl bg-transparent">
                  Google Hangouts
                </option>
                <option className="text-xl bg-transparent">WhatsApp</option>
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
                className="inline-block text-sm sm:text-base mb-2"
              >
                Schedule Link
              </label>
              <input
                {...register("link", {
                  required: "Please Give A Schedule Link",
                })}
                defaultValue={link}
                id="link"
                name="link"
                className="w-full bg-transparent border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
              />
              {errors.link && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.link.message}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="inline-block text-sm sm:text-base mb-2"
              >
                Description
              </label>
              <textarea
                {...register("description")}
                defaultValue={description}
                id="description"
                name="description"
                className="w-full h-40 bg-transparent border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
              ></textarea>
            </div>
            <div></div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 focus-visible:ring ring-sky-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                Update Schedule
              </button>
            </div>
          </form>
        </label>
      </label>
    </>
  );
};

export default EditSchedule;
