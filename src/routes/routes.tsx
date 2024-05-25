import Home from "@/components/Home/Home";
import Login from "@/components/Login/Login";
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
    ],
  },
];
