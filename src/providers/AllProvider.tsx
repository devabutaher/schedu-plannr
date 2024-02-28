import { PropsWithChildren } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "../routes/routes";
import { ThemeProvider } from "./ThemeProvider";

const AllProvider = ({ children }: PropsWithChildren) => {
  const router = createBrowserRouter(routes);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="schedu-theme">
      <RouterProvider router={router} />
      {children}
    </ThemeProvider>
  );
};

export default AllProvider;
