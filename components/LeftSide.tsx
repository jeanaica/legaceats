import { RecipeType } from "@/types/recipe.type";

const LeftSide = ({
  name,
  ingredients,
  prepTime,
  servings,
  notes,
}: Partial<RecipeType>) => {
  return (
    <div className="flex flex-col">
      <div className="w-full">{name}</div>
      <div className="w-full">{notes}</div>
    </div>
  );
};

export default LeftSide;
