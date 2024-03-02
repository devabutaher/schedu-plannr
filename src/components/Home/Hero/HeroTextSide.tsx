import { Badge } from "../../ui/badge";
import HeroText from "./HeroText";

const HeroTextSide = () => {
  return (
    <div className="lg:pt-[12rem] space-y-6">
      <div className="inline-block">
        <div className="flex gap-1 p-2 rounded-full bg-secondary">
          <Badge className="bg-primary">New</Badge>
          <p className="text-sm antialiased font-medium">
            Best feature is now developed
          </p>
        </div>
      </div>
      <p className="text-xl antialiased leading-8 lg:w-[30rem]">
        Meet Schedu
        <span className="text-sky-500">Plannr</span>, the event-juggling
        scheduler for everyone. Focus on meeting, not making meetings. Free for
        individuals.
      </p>

      <HeroText />
    </div>
  );
};

export default HeroTextSide;
