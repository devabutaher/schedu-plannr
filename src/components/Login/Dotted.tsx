const Dotted = () => {
  return (
    <div className="grid grid-cols-4 gap-16 place-items-center">
      {Array.from({ length: 8 }, (_, index) => (
        <div key={index} className="bg-gray-600 rounded-full size-10" />
      ))}
    </div>
  );
};

export default Dotted;
