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
    ],
  },
];
