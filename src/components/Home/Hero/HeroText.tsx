import { useTheme } from "@/hooks/useTheme";
import { useEffect } from "react";

const HeroText = () => {
  return (
    <div className="cursor-default">
      <h1 className="-tracking-widest">
        <BubbleText title="infrastructure for" style="text-primary" />
        <BubbleText
          title="everyone."
          style="text-white dark:text-black hero-text ml-4"
        />
      </h1>
    </div>
  );
};

export const BubbleText = ({
  title,
  style,
}: {
  title: string;
  style: string;
}) => {
  useEffect(() => {
    const spans = document.querySelectorAll(
      ".hover-text span"
    ) as NodeListOf<HTMLSpanElement>;

    spans.forEach((span) => {
      span.addEventListener("mouseenter", function (this: typeof span) {
        this.style.fontWeight = "900";

        const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
        const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "800";
        }
        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "800";
        }
      });

      span.addEventListener("mouseleave", function (this: typeof span) {
        this.style.fontWeight = "700";

        const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
        const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "700";
        }

        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "700";
        }
      });
    });
  }, []);

  return (
    <span
      className={`text-4xl min-[500px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl antialiased font-bold uppercase lg:text-[5.8rem] hover-text ${style}`}
    >
      <Text>{`${title}`}</Text>
    </span>
  );
};

const Text = ({ children }: { children: string }) => {
  const { theme } = useTheme();

  return (
    <>
      {children.split("").map((child, idx) => (
        <span
          style={{
            transition: "0.35s font-weight, 0.35s color",
            textShadow: `2px 2px 0px ${theme === "light" ? "black" : "white"}`,
          }}
          key={idx}
        >
          {child}
        </span>
      ))}
    </>
  );
};

export default HeroText;
