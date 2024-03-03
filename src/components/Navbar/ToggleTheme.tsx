import { useTheme } from "@/hooks/useTheme";
import { motion as m, useMotionValueEvent, useScroll } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const ToggleTheme = () => {
  const { setTheme } = useTheme();
  const { scrollY } = useScroll();
  const [scroll, setScroll] = useState<boolean>(
    scrollY.get() > 50 ? true : false
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  return (
    <m.div
      variants={{
        scrollBottom: {
          display: "inline-block",
        },
        scrollTop: {
          position: "fixed",
          zIndex: 999,
          left: 25,
          bottom: 25,
          rotate: 360,
        },
      }}
      animate={scroll ? "scrollTop" : "scrollBottom"}
    >
      <div className="flex items-center w-10 p-2 border rounded-full hover:bg-secondary">
        <div
          onClick={() => setTheme("dark")}
          className="absolute transition-all scale-100 rotate-0 cursor-pointer dark:rotate-180 dark:scale-0"
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
    </m.div>
  );
};

export default ToggleTheme;
