import { ToastProvider } from "@/components/ui/toast";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "./ThemeProvider";

const AllProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="schedu-theme">
      <ToastProvider>{children}</ToastProvider>
    </ThemeProvider>
  );
};

export default AllProvider;
