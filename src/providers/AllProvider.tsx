import { PropsWithChildren } from "react";
import { ThemeProvider } from "./ThemeProvider";

const AllProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="schedu-theme">
      {children}
    </ThemeProvider>
  );
};

export default AllProvider;
