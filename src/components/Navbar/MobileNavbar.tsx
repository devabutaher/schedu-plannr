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
              <Link key={nav.id} to={nav.path}>
                <Button
                  variant={"outline"}
                  className="w-full border-slate-300 dark:border-slate-700"
                >
                  {nav.name}
                </Button>
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
