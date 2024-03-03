import { schedulingFeatureData } from "@/data/schedulingFeaturedata";
import {
  MotionValue,
  animate,
  motion as m,
  useMotionValue,
} from "framer-motion";
import { useEffect } from "react";
import { GoDotFill } from "react-icons/go";

const FeatureScroll = () => {
  const leftXTranslation = useMotionValue(0);
  const rightXTranslation = useMotionValue(0);

  useEffect(() => {
    const finalPosition = -schedulingFeatureData.length * 50;

    const controlsLeft = animate(leftXTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    const controlsRight = animate(rightXTranslation, [0, -finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return () => {
      controlsLeft.stop();
      controlsRight.stop();
    };
  }, [leftXTranslation, rightXTranslation]);

  return (
    <div className="relative flex flex-col py-8 divide-y-2 divide-dashed bg-primary overflow-hidden rounded-[3rem] h-[6rem] sm:h-[6.5rem]">
      <FeatureList style="top-0 left-0" xTranslation={leftXTranslation} />
      <FeatureList style="bottom-0 right-0" xTranslation={rightXTranslation} />
    </div>
  );
};

const FeatureList = ({
  style,
  xTranslation,
}: {
  style: string;
  xTranslation: MotionValue<number>;
}) => {
  return (
    <m.div
      style={{ x: xTranslation }}
      className={`absolute flex gap-4 py-2 ${style}`}
    >
      {[...schedulingFeatureData].map((title) => (
        <div className="flex items-center gap-1 text-background" key={title}>
          <GoDotFill size={20} />
          <h1 className="text-xl antialiased font-semibold sm:text-2xl whitespace-nowrap">
            {title}
          </h1>
        </div>
      ))}
    </m.div>
  );
};

export default FeatureScroll;
