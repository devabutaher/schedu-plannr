import { Badge } from "../../ui/badge";
import HeroText, { BubbleText } from "./HeroText";

const HeroTextSide = () => {
  return (
    <div className="min-[1290px]:self-end space-y-6 min-[1290px]:w-[36rem]">
      <div className="inline-block">
        <div className="flex gap-1 p-2 rounded-full bg-secondary">
          <Badge className="bg-primary">New</Badge>
          <p className="text-sm antialiased font-medium">
            Best feature is now developed
          </p>
        </div>
      </div>

      <div className="min-[1290px]:block hidden">
        <TextWithButton />
      </div>

      <h1 className="cursor-default -tracking-widest">
        <BubbleText title="Scheduling" style="text-primary" />
      </h1>
      <div className="min-[1290px]:hidden inline">
        <HeroText />
      </div>

      <div className="min-[1290px]:hidden block">
        <TextWithButton />
      </div>
    </div>
  );
};

const TextWithButton = () => {
  return (
    <div className="space-y-6">
      <p className="text-lg sm:text-xl antialiased min-[1290px]:leading-8 sm:w-[30rem]">
        Meet{" "}
        <span className="font-medium">
          Schedu<span className="text-sky-500">Plannr</span>
        </span>
        , the event-juggling scheduler for everyone. Focus on meeting, not
        making meetings. Free for individuals.
      </p>
      <button className="px-6 py-2 font-medium bg-sky-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] dark:shadow-[3px_3px_0px_white] hover:shadow-none dark:hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        Get Started
      </button>
    </div>
  );
};

export default HeroTextSide;
