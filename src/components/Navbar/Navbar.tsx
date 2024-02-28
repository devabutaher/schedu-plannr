import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import MenuButton from "./MenuButton";

const tabs = ["Home", "Search", "About", "FAQ", "Blog"];

const Navbar = () => {
  const [selected, setSelected] = useState(tabs[0]);
  const [hover, setHover] = useState(tabs[0]);
  const { setTheme } = useTheme();

  return (
    <div className="flex items-center justify-between gap-8 px-4 mx-auto max-w-screen-2xl">
      {/* brand */}
      <div>
        <h1 className="text-3xl font-bold uppercase">
          Schedu<span className="text-sky-500">Plannr</span>
        </h1>
      </div>

      {/* big screen navbar */}
      <div className="hidden md:flex border-[3px] dark:border-white border-black bg-transparent rounded-full p-0.5 max-w-min mx-auto my-4">
        {tabs.map((tab) => (
          <Chip
            text={tab}
            selected={selected === tab}
            setSelected={setSelected}
            hover={hover === tab}
            setHover={setHover}
            key={tab}
          />
        ))}

        <div className="relative flex items-center pl-4 pr-10">
          <div
            onClick={() => setTheme("dark")}
            className="absolute transition-all scale-100 rotate-0 cursor-pointer dark:rotate-180 dark:scale-0"
          >
            <Moon size={"1.6rem"} />
          </div>
          <div
            onClick={() => setTheme("light")}
            className="absolute transition-all scale-0 rotate-0 cursor-pointer dark:scale-100 dark:rotate-180"
          >
            <Sun size={"1.6rem"} />
          </div>
          <span className="sr-only">Toggle theme</span>
        </div>
      </div>

      {/* login button */}
      <div className="hidden pr-4 md:block">
        <button className="px-8 py-3 text-xl font-semibold text-white uppercase bg-black rounded-full dark:bg-white dark:text-black">
          Login
        </button>
      </div>

      {/* small screen navbar */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuButton />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

const Chip = ({
  text,
  selected,
  setSelected,
  hover,
  setHover,
}: {
  text: string;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
  hover: boolean;
  setHover: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <motion.button
      onHoverStart={() => setHover(text)}
      onHoverEnd={() => setHover("")}
      onClick={() => setSelected(text)}
      className="relative px-8 py-3 text-lg font-semibold text-white transition-colors rounded-full"
    >
      <span className="relative z-10 uppercase mix-blend-difference">
        {text}
      </span>
      <span className="sr-only">{text}</span>
      {(selected || hover) && (
        <motion.span
          layoutId="underline"
          transition={{ type: "tween" }}
          className="absolute inset-0 z-0 bg-black rounded-full dark:bg-white"
        ></motion.span>
      )}
    </motion.button>
  );
};

export default Navbar;
