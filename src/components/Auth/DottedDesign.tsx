import Dotted from "./Dotted";

const DottedDesign = () => {
  return (
    <div className="hidden space-y-10 lg:block">
      <Dotted />

      <div className="flex justify-center">
        <img src="/logo.png" alt="logo" className="" />
      </div>

      <Dotted />
    </div>
  );
};

export default DottedDesign;
