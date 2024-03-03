import CalendarComponent from "./Calendar";
import HeroText from "./HeroText";
import HeroTextSide from "./HeroTextSide";

const Hero = () => {
  return (
    <div className="relative max-lg:space-y-10">
      <div className="flex flex-col gap-10 min-[1290px]:gap-2 min-[1290px]:flex-row">
        <HeroTextSide />
        <CalendarComponent />
      </div>
      <div className="min-[1290px]:block hidden">
        <HeroText />
      </div>
    </div>
  );
};

export default Hero;
