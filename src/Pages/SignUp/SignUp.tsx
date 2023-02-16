import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/Contexts/AuthProvider/AuthProvider";
import GoogleSignIn from "../../GoogleSignIn/GoogleSignIn";
import useToken from "../../hooks/useToken/useToken";

type UserSubmitForm = {
  displayName: string;
  email: string;
  password: string;
  image: string;
  gender: string;
  firstName: string;
  lastName: string;
  currentAddress: string;
  permanentAddress: string;
  birthDate: string;
  contactNumber: string;
  role: string;
};
interface dataProps {
  image: string;
  email: string;
  password: string;
  displayName: string;
  gender: string;
  firstName: string;
  lastName: string;
  currentAddress: string;
  permanentAddress: string;
  birthDate: string;
  contactNumber: string;
  role: string;
}

const SignUp = () => {
  const { RegisterUser }: any = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>();

  const [firebaseError, setFirebaseError] = useState<any>("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const [createdUserEmail, setCreatedUserEmail] = useState<any>("");
  const [token] = useToken(createdUserEmail);

  if (token) {
    navigate(from, { replace: true });
  }

  const handleRegister = (data: dataProps) => {
    RegisterUser(data.email, data.password, data.displayName)
      .then((result: any) => {
        const email = data?.email;
        const name = data?.displayName;
        const lastName = "";
        const currentAddress = "";
        const permanentAddress = "";
        const contactNumber = "";
        const gender = "";
        const role = "";
        const birthDate = "";
        const image = "";
        toast.success("Sign Up Successfully");

        saveUserToDatabase(
          email,
          name,
          lastName,
          currentAddress,
          permanentAddress,
          contactNumber,
          role,
          gender,
          birthDate,
          image
        );
        console.log();
      })
      .catch((err: any) => {
        setFirebaseError(err.message);
        console.log(err);
      });
  };

  const saveUserToDatabase = (
    email: string,
    name: string,
    lastName: string,
    currentAddress: string,
    permanentAddress: string,
    contactNumber: string,
    gender: string,
    birthDate: string,
    image: string,
    role: string
  ) => {
    const user = {
      email,
      name,
      lastName,
      currentAddress,
      permanentAddress,
      contactNumber,
      gender,
      role,
      birthDate,
      image,
    };
    fetch(`https://scheduplannr-server.vercel.app/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCreatedUserEmail(email);
      });
  };

  return (
    <>
      <div className="flex justify-center py-20">
        <div className="rounded-3xl border bg-transparent w-[30rem] flex flex-col gap-12 p-12">
          <h3 className="text-2xl font-semibold text-primary text-center">
            Register To Your Account
          </h3>
          <GoogleSignIn />
          <form
            onSubmit={handleSubmit(handleRegister)}
            className="flex flex-col gap-8"
          >
            {firebaseError && (
              <p className="text-sm text-red-600 -mt-4">{firebaseError}</p>
            )}
            <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 focus-within:before:!scale-x-100 before:transition before:duration-300">
              <input
                {...register("displayName", {
                  required: "Name is Required",
                })}
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent pb-3  border-b border-gray-300 outline-none transition p-2"
              />
            </div>
            {errors.displayName && (
              <p className="text-sm text-red-600 -mt-4">
                {errors.displayName.message}
              </p>
            )}

            <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 focus-within:before:!scale-x-100 before:transition before:duration-300">
              <input
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid Email Address",
                  },
                })}
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent pb-3  border-b border-gray-300 outline-none transition p-2"
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-600 -mt-4">
                {errors.email.message}
              </p>
            )}

            <div className="flex flex-col gap-4">
              <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 focus-within:before:!scale-x-100 before:transition before:duration-300">
                <input
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 8,
                      message: "Password Must Be 8 Characters",
                    },
                  })}
                  type="password"
                  placeholder="Your Password"
                  className="w-full bg-transparent pb-3  border-b border-gray-300 outline-none transition p-2"
                />
              </div>
              {errors.password && (
                <p className="text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-4 items-start">
              <button
                type="submit"
                className="w-full rounded-full bg-sky-500 text-white h-11 flex items-center justify-center px-6 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800"
              >
                <span className="text-base font-semibold">Register</span>
              </button>
              <Link to="/login" className="py-4">
                <span className="text-sm tracking-wide text-sky-600">
                  Already Have An Account?
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;