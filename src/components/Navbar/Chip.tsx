import { motion } from "framer-motion";

const Chip = ({
  text,
  selected,
  setSelected,
  hover,
  setHover,
}: {
  text: string;
  selected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  hover: boolean;
  setHover: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <motion.button
      onHoverStart={() => setHover(text)}
      onHoverEnd={() => setHover("")}
      onClick={() => setSelected(text)}
      className="relative px-6 py-2 text-sm font-semibold text-white transition-colors rounded-full xl:text-base"
    >
      <span className="relative z-10 uppercase select-none mix-blend-difference">
        {text}
      </span>
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

export default Chip;
