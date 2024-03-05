import Feature from "./Feature/Feature";
import FeatureScroll from "./FeatureScroll";
import Hero from "./Hero/Hero";

const Home = () => {
  return (
    <div className="my-10 space-y-16">
      <Hero />
      <FeatureScroll />
      <Feature />
    </div>
  );
};

export default Home;
