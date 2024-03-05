import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

const FeatureCard = () => {
  return (
    <div className="">
      <TiltCard />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      className="relative w-full h-[40rem] rounded-2xl bg-gradient-to-br from-sky-300 to-sky-600"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute bg-white shadow-xl inset-4 rounded-xl"
      >
        <div className="border-b-4 border-dashed h-[22rem] sm:h-[25rem] border-sky-500"></div>
        <div className="flex flex-col gap-4 p-4 text-slate-900">
          <h1 className="text-3xl font-medium sm:text-4xl">
            Connect all your calendars
          </h1>
          <p className="w-full sm:text-xl line-clamp-none md:line-clamp-3">
            <span className="font-medium">
              Schedu<span className="text-sky-500">Plannr</span>
            </span>{" "}
            checks for conflicts across all of your calendars and only offers
            times that are open. Never get double booked again.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
