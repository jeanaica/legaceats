export type RecipeType = {
  id: string;
  slug?: string;
  ingredients: string[];
  prepTime: string;
  servings: number;
  notes: string;
  directions: string[];
  name: string;
  imageURL: string;
};
