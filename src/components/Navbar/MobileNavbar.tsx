import { navbarData } from "@/data/navbarData";
import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import MenuButton from "./MenuButton";

const MobileNavbar = () => {
  const [active, setActive] = useState(false);
  const { setTheme } = useTheme();

  return (
    <div className="lg:hidden">
      <Sheet open={active} onOpenChange={setActive}>
        <SheetTrigger>
          <MenuButton active={active} />
        </SheetTrigger>
        <SheetContent side={"left"} className="flex flex-col gap-10">
          <SheetHeader>
            <div className="max-w-[14rem]">
              <img src="/logo.png" alt="logo" className="w-full" />
            </div>
          </SheetHeader>

          <div className="flex flex-col gap-4">
            {navbarData.map((nav) => (
              <Link
                key={nav.id}
                to={nav.path}
                className="relative inline-flex items-center px-8 py-3 overflow-hidden transition-all border border-dashed rounded text-primary group focus:outline-none active:scale-95 active:bg-border"
              >
                <span className="absolute transition-all -end-full group-hover:end-4">
                  <svg
                    className="size-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>

                <span className="text-sm font-medium transition-all group-hover:me-4">
                  {nav.name}
                </span>
              </Link>
            ))}
          </div>

          <SheetFooter>
            <div className="flex justify-end gap-4">
              <Link to={"/login"}>
                <Button
                  variant={"outline"}
                  className="w-full border-slate-300 dark:border-slate-700"
                >
                  Login
                </Button>
              </Link>
              <div className={`flex items-center w-10 p-2 border rounded-full`}>
                <div
                  onClick={() => setTheme("dark")}
                  className="absolute transition-all scale-100 rotate-0 cursor-pointer dark:rotate-180 dark:scale-0 "
                >
                  <Moon size={"1.4rem"} />
                </div>
                <div
                  onClick={() => setTheme("light")}
                  className="transition-all scale-0 rotate-0 cursor-pointer dark:scale-100 dark:rotate-180"
                >
                  <Sun size={"1.4rem"} />
                </div>
                <span className="sr-only">Toggle theme</span>
              </div>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
