import { useEffect } from "react";

const BorderedText = () => {
  return (
    <span className="ml-4 cursor-default">
      <BubbleText />
    </span>
  );
};

const BubbleText = () => {
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
          leftNeighbor.style.fontWeight = "700";
        }
        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "700";
        }
      });

      span.addEventListener("mouseleave", function (this: typeof span) {
        this.style.fontWeight = "600";

        const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
        const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "600";
        }

        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "600";
        }
      });
    });
  }, []);

  return (
    <span className="text-5xl antialiased text-white lg:uppercase dark:text-black hero-text lg:text-8xl hover-text">
      <Text>everyone.</Text>
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

export default BorderedText;
