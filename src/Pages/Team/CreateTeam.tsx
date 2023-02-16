import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/Contexts/AuthProvider/AuthProvider";

interface dataProps {
  name: string;
  email: string;
  description: string;
  name1: string;
  email1: string;
  name2: string;
  email2: string;
  name3: string;
  email3: string;
  name4: string;
  email4: string;
}

const CreateTeam = () => {
  const { user }: any = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<dataProps>();

  const handleAdd = (data: dataProps) => {
    saveToDatabase(
      data.name,
      data.email,
      data.name1,
      data.email1,
      data.name2,
      data.email2,
      data.name3,
      data.email3,
      data.name4,
      data.email4,
      data.description
    );
  };

  const saveToDatabase = (
    name: string,
    email: string,
    name1: string,
    email1: string,
    name2: string,
    email2: string,
    name3: string,
    email3: string,
    name4: string,
    email4: string,
    description: string
  ) => {
    const TeamData = {
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
      description,
    };
    fetch(`https://scheduplannr-server.vercel.app/team`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(TeamData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/dashboard/team");
        toast.success("Team Created Successful");
      });
  };

  return (
    <>
      <div className="my-10 pl-10">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <h1 className="text-center text-4xl py-10 font-semibold">
            Create Your <span className="text-primary">Team/Organization</span>
          </h1>

          <form
            onSubmit={handleSubmit(handleAdd)}
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
              <label htmlFor="name1">Member 1 Name</label>
              <input
                {...register("name1", {
                  required: "Name is Required",
                })}
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
                defaultValue="Respectfully About Meeting"
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
                Create Team
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateTeam;
