import Header from "@/components/Header";
import { RecipeType } from "@/types/recipe.type";
import recipeData from "@/components/recipe.json";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";

type Props = {
  params: { slug: string };
};

async function getData(slug: string): Promise<RecipeType> {
  const data: Record<string, RecipeType> = recipeData;
  return data[slug];
}

export default async function Recipe({ params }: Props) {
  const content = await getData(params.slug);

  return (
    <div>
      <Header imageURL={content.imageURL} name={content.name} />
      <div className="flex m-4 gap-4">
        <LeftSide {...content} />
        <RightSide directions={content.directions} />
      </div>
    </div>
  );
}
