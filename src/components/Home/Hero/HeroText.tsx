import { useEffect } from "react";
import BorderedText from "./BorderedText";

const HeroText = () => {
  return (
    <div className="cursor-default">
      <h1 className="-tracking-widest">
        <BubbleText title={"Scheduling"} />
      </h1>
      <h1 className="-tracking-widest">
        <BubbleText title={"infrastructure for"} />
        <BorderedText />
      </h1>
    </div>
  );
};

const BubbleText = ({ title }: { title: string }) => {
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
    <span className="text-5xl antialiased font-bold lg:uppercase lg:text-8xl text-primary hover-text">
      <Text>{`${title}`}</Text>
    </span>
  );
};

const Text = ({ children }: { children: string }) => {
  return (
    <>
      {children.split("").map((child, idx) => (
        <span
          style={{
            transition: "0.35s font-weight, 0.35s color",
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
