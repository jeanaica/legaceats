import { RecipeType } from "@/types/recipe.type";
import { FC } from "react";

const LeftSide: FC<Partial<RecipeType>> = ({
  name,
  ingredients,
  prepTime,
  servings,
  notes,
}) => {
  return (
    <div className="flex flex-col">
      <div className="w-full flex-1">{name}</div>
      <div className="w-full flex flex-1">
        <div className="flex-1">{servings}</div>
        <div className="flex-1">{prepTime}</div>
      </div>
      <div className="w-full flex-5">
        {ingredients?.map((ingredient) => (
          <div className="pl-4" key={ingredient}>
            {ingredient}
          </div>
        ))}
      </div>
      <div className="w-2/3 self-end break-words border flex-1">{notes}</div>
    </div>
  );
};

export default LeftSide;
