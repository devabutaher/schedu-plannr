import FeatureCard from "./FeatureCard";

const Feature = () => {
  return (
    <div>
      <div className="mb-16">
        <h1 className="mx-auto antialiased font-bold text-center md:text-6xl lg:text-8xl max-w-[60rem] -tracking-wide">
          Everything you need in a scheduling app
        </h1>
      </div>

      <div className="grid gap-8 mb-8 lg:grid-cols-2">
        <FeatureCard />
        <FeatureCard />
      </div>
      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </div>
  );
};

export default Feature;
