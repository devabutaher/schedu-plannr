import CalendarComponent from "./Calendar";
import HeroTextSide from "./HeroTextSide";

const Hero = () => {
  return (
    <div className="relative max-lg:space-y-10">
      <HeroTextSide />
      <CalendarComponent />
    </div>
  );
};

export default Hero;
