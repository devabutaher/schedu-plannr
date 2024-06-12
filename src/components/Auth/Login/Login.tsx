import DottedDesign from "../DottedDesign";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="max-w-xl py-10 mx-auto overflow-hidden lg:max-w-6xl">
      <div className="grid gap-16 p-8 mx-auto dark:bg-slate-900 bg-slate-200 lg:p-16 lg:grid-cols-2 rounded-2xl">
        <DottedDesign />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
