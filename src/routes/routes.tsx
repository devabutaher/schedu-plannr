import Login from "@/components/Auth/Login/Login";
import Register from "@/components/Auth/Register/Register";
import Home from "@/components/Home/Home";
import MainLayout from "@/layouts/MainLayout";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
];
