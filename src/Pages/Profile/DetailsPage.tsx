import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared//Loading/Loading";
interface dataProps {
  name: string;
  email: string;
  lastName: string;
  currentAddress: string;
  permanentAddress: string;
  image: any;
  contactNumber: string;
  gender: string;
  birthDate: string;
  profession: string;
  about: string;
}
const DetailsPage = ({ singleUser }: any) => {
  const { email } = singleUser;
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<dataProps>();

  const imageHostKey = "8b90eb0929bfebb0ad08213a1dc74625";

  const handleAdd = (data: dataProps) => {
    saveToDatabase(
      data.name,
      data.email,
      data.lastName,
      data.currentAddress,
      data.permanentAddress,
      data.contactNumber,
      data.gender,
      data.birthDate,
      data.image,
      data.profession,
      data.about
    );
  };

  const saveToDatabase = (
    name: string,
    email: string,
    lastName: string,
    currentAddress: string,
    permanentAddress: string,
    contactNumber: string,
    gender: string,
    birthDate: string,
    image: any,
    profession: string,
    about: string
  ) => {
    setIsLoading(true);
    const images = image[0];
    const formData = new FormData();
    formData.append("image", images);
    fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);
        if (imgData.success) {
          const userData = {
            name,
            email,
            lastName,
            currentAddress,
            permanentAddress,
            contactNumber,
            gender,
            birthDate,
            image: imgData.data.url,
            profession,
            about,
          };

          fetch(`http://localhost:5000/user/${email}`, {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(userData),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                console.log(data);
                navigate("/dashboard/profile");
                setIsLoading(false);
                toast.success("Profile Update Successful");
              }
            });
        }
      });
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="my-10 pl-10">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <h1 className="text-center text-4xl py-10 font-semibold">
            Update Your <span className="text-primary">Profile</span>
          </h1>

          <form
            onSubmit={handleSubmit(handleAdd)}
            className="max-w-screen-md grid sm:grid-cols-2 gap-8 mx-auto"
          >
            <div>
              <label htmlFor="name">First Name</label>
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
              <label htmlFor="lastName">Last Name</label>
              <input
                {...register("lastName", {
                  required: "Last name is required",
                })}
                id="lastName"
                name="lastName"
                className="w-full bg-transparent border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
                placeholder="Last Name"
              />
              {errors.lastName && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="inline-block text-sm sm:text-base mb-2"
              >
                Your Email
              </label>
              <input
                {...register("email", {
                  required: true,
                })}
                defaultValue={email}
                readOnly
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
              <label htmlFor="currentAddress">Your Current Address</label>
              <input
                {...register("currentAddress", {
                  required: "Current address is Require",
                })}
                id="currentAddress"
                name="currentAddress"
                className="w-full bg-transparent border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
                placeholder="Address"
              />
              {errors.currentAddress && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.currentAddress.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="permanentAddress">Your Permanent Address</label>
              <input
                {...register("permanentAddress", {
                  required: "Permanent address is Required",
                })}
                id="permanentAddress"
                name="permanentAddress"
                className="w-full bg-transparent border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
                placeholder="Address"
              />
              {errors.permanentAddress && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.permanentAddress.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contactNumber">Contact Number</label>
              <input
                {...register("contactNumber", {
                  required: true,
                })}
                id="contactNumber"
                name="contactNumber"
                className="w-full bg-transparent border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
                placeholder="Number"
              />
              {errors.contactNumber && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.contactNumber.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="profession">Your Profession</label>
              <input
                {...register("profession", {
                  required: "Profession is required",
                })}
                id="profession"
                name="profession"
                className="w-full bg-transparent border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
                placeholder="Profession"
              />
              {errors.profession && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.profession.message}
                </p>
              )}
            </div>

            <div className="form-control">
              <label htmlFor="about">About</label>
              <textarea
                {...register("about", {
                  required: "About is required",
                })}
                id="about"
                name="about"
                className="textarea textarea-bordered textarea-xs w-full max-w-xs"
                placeholder="Describe here, about your profession!"
              />
              {errors.about && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.about.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="gender">Gender</label>
              <select
                {...register("gender")}
                className="select input-bordered w-full max-w-xs"
              >
                <option disabled>Please Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
              {errors.gender && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.gender.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="birthDate">Birth & Date</label>
              <input
                {...register("birthDate", {
                  required: true,
                })}
                type="date"
                id="birthDate"
                name="birthDate"
                className="w-full bg-transparent border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
                placeholder="Email"
              />
              {errors.birthDate && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.birthDate.message}
                </p>
              )}
            </div>
            <div>
              <div>
                <label htmlFor="img" className="block dark:text-gray-400">
                  Image
                </label>
                <input
                  {...register("image", {
                    required: true,
                  })}
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  placeholder="Enter Your img"
                  className="w-full px-4 py-3 rounded-md border-2 border-gray-300 bg-transparent  focus:dark:border-violet-300"
                />
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button type="submit" className="btn btn-primary text-white">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;