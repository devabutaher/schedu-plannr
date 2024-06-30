import Content from "./Content/Content";
import Feature from "./Feature/Feature";
import FeatureScroll from "./FeatureScroll";
import Hero from "./Hero/Hero";
import { Review } from "./Review";

const Home = () => {
  return (
    <div className="my-10 space-y-16">
      <Hero />
      <FeatureScroll />
      <Feature />
      <Content />
      <Review />
    </div>
  );
};

export default Home;
