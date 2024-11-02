import { FC } from "react";

const RightSide: FC<{ directions: string[] }> = ({ directions }) => {
  return (
    <div className="w-full p-4 flex flex-col flex-1">
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
