const RightSide = ({ directions }: { directions: string[] }) => {
  return (
    <div className="w-full p-4 flex flex-col">
      <h3>Directions</h3>
      <div className="flex flex-col">
        {directions.map((direction, index: number) => (
          <div key={index} className="text-left">{`${
            index + 1
          }. ${direction}`}</div>
        ))}
      </div>
    </div>
  );
};

export default RightSide;
