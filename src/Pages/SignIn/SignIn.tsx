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
};
interface dataProps {
  email: string;
  password: string;
}

const SignIn = () => {
  const { logInUser, resetPassword, auth }: any =
    useContext(AuthContext);

  const [createdUserEmail, setCreatedUserEmail] = useState<any>("");
  const [token] = useToken(createdUserEmail);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>();
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogIn = (data: dataProps) => {
    logInUser(data.email, data.password)
      .then((result: any) => {
        const user = result.user;
        toast.success("Sign In Successfully");
        setCreatedUserEmail(user.email);
      })
      .catch((err: string) => {
        console.log(err);
      });
  };

  const handleForgotPassword = (data: any) => {
    resetPassword(auth, data.email)
      .then((result: any) => {
        toast.success("Check Your Email");
        console.log(result.user);
      })
      .catch((err: string) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex justify-center py-20">
        <div className="rounded-3xl border bg-transparent w-[30rem] flex flex-col gap-12 p-12">
          <h3 className="text-2xl text-primary font-semibold text-center">
            LogIn To Your Account
          </h3>

  
          <GoogleSignIn />

          <form
            onSubmit={handleSubmit(handleLogIn)}
            className="flex flex-col gap-8"
          >
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
              <button
                onClick={handleForgotPassword}
                className="-mr-4 px-4 self-end"
              >
                <span className="text-sm tracking-wide text-sky-600 dark:text-sky-400">
                  Forgot password ?
                </span>
              </button>
            </div>

            <div className="flex flex-col gap-4 items-start">
              <button
                type="submit"
                className="w-full rounded-full bg-sky-500 text-white h-11 flex items-center justify-center px-6 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800"
              >
                <span className="text-base font-semibold">Log In</span>
              </button>
              <Link to="/signUp" className="py-4">
                <span className="text-sm tracking-wide text-sky-600">
                  Create New Account?
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;