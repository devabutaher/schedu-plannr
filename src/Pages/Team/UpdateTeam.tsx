import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

type UserSubmitForm = {
  name: string;
  email: string;
  name1: string;
  name2: string;
  name3: string;
  name4: string;
  email1: string;
  email2: string;
  email3: string;
  email4: string;
  description: string;
  _id: Number;
};

const UpdateTeam = ({
  name,
  name1,
  name2,
  name3,
  name4,
  email,
  email1,
  email2,
  email3,
  email4,
  description,
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
        const name1 = data.name1;
        const name2 = data.name2;
        const name3 = data.name3;
        const name4 = data.name4;
        const email1 = data.email1;
        const email2 = data.email2;
        const email3 = data.email3;
        const email4 = data.email4;
        const description = data.description;

        const info = {
            name,
            email,
            name1,
            email1,
            name2,
            email2,
            name3,
            email3,
            name4,
            email4,
            description
        };

        fetch(`http://localhost:5000/team/${_id}`, {
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
                    toast.success("Team Updated Successfully");
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
            Update Your <span className="text-primary">Team/Organization</span>
          </h1>

          <form
            onSubmit={handleSubmit(handleEdit)}
            className="max-w-screen-md grid sm:grid-cols-2 gap-8 mx-auto"
          >
            <div>
              <label htmlFor="name" className="inline-block text-sm mb-2">
                Team Name
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
              <label htmlFor="email" className="inline-block  text-sm  mb-2">
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
                className="w-full bg-transparent  border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="name1">Member 1 Name</label>
              <input
                {...register("name1", {
                  required: "Name is Required",
                })}
                defaultValue={name1}
                id="name1"
                name="name1"
                className="w-full bg-transparent  border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
                placeholder="Name"
              />
              {errors.name1 && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.name1.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email1">Member 1 Email</label>
              <input
                {...register("email1", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid Email Address",
                  },
                })}
                defaultValue={email1}
                id="email1"
                name="email1"
                className="w-full bg-transparent border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
                placeholder="Email"
              />
              {errors.email1 && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.email1.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="name2">Member 2 Name</label>
              <input
                {...register("name2", {
                  required: "Name is Required",
                })}
                defaultValue={name2}
                id="name2"
                name="name2"
                className="w-full bg-transparent  border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
                placeholder="Name"
              />
              {errors.name2 && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.name2.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email2">Member 2 Email</label>
              <input
                {...register("email2", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid Email Address",
                  },
                })}
                defaultValue={email2}
                id="email2"
                name="email2"
                className="w-full bg-transparent border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
                placeholder="Email"
              />
              {errors.email2 && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.email2.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="name3">Member 3 Name</label>
              <input
                {...register("name3", {
                  required: "Name is Required",
                })}
                defaultValue={name3}
                id="name3"
                name="name3"
                className="w-full bg-transparent  border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
                placeholder="Name"
              />
              {errors.name3 && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.name3.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email3">Member 3 Email</label>
              <input
                {...register("email3", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid Email Address",
                  },
                })}
                defaultValue={email3}
                id="email3"
                name="email3"
                className="w-full bg-transparent border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
                placeholder="Email"
              />
              {errors.email3 && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.email3.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="name4">Member 4 Name</label>
              <input
                {...register("name4", {
                  required: "Name is Required",
                })}
                defaultValue={name4}
                id="name4"
                name="name4"
                className="w-full bg-transparent border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
                placeholder="Name"
              />
              {errors.name4 && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.name4.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email4">Member 4 Email</label>
              <input
                {...register("email4", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid Email Address",
                  },
                })}
                defaultValue={email4}
                id="email4"
                name="email4"
                className="w-full bg-transparent  border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
                placeholder="Email"
              />
              {errors.email4 && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.email4.message}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="inline-block  text-sm  mb-2"
              >
                Description
              </label>
              <textarea
                {...register("description")}
                defaultValue={description}
                id="description"
                name="description"
                className="w-full h-28 border bg-transparent focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
              ></textarea>
            </div>
            <div></div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 focus-visible:ring ring-sky-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                Update Team
              </button>
            </div>
          </form>
        </label>
      </label>
    </>
  );
};

export default UpdateTeam;
