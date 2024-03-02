import { useState } from "react";
import Chip from "./Chip";
import MobileNavbar from "./MobileNavbar";
import ToggleTheme from "./ToggleTheme";

const tabs = ["Home", "Search", "About", "FAQ", "Blog"];

const Navbar = () => {
  const [selected, setSelected] = useState(tabs[0]);
  const [hover, setHover] = useState(tabs[0]);

  return (
    <nav className="flex items-center justify-between gap-4 mx-auto my-4 ">
      {/* brand */}
      <div className="w-[14rem]">
        <img src="/logo.png" alt="logo" className="w-full" />
      </div>

      {/* big screen navbar */}
      <div className="hidden lg:flex border-[2px] dark:border-white border-black bg-transparent rounded-full p-0.5 max-w-min mx-auto">
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
      </div>

      {/* login button */}
      <div className="hidden w-[14rem] lg:flex justify-end items-center gap-4">
        <ToggleTheme />
        <button className="px-6 py-2 text-sm font-semibold text-white uppercase rounded-full bg-sky-500 xl:text-base">
          Login
        </button>
      </div>

      {/* small screen navbar */}
      <MobileNavbar />
    </nav>
  );
};

export default Navbar;
