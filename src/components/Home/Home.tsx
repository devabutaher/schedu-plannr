import FeatureScroll from "./FeatureScroll";
import Hero from "./Hero/Hero";

const Home = () => {
  return (
    <div className="my-10 space-y-10">
      <Hero />
      <FeatureScroll />
    </div>
  );
};

export default Home;
