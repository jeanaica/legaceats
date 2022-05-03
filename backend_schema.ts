export type Ingredients = {
  measurement: string;
  name: string;
  substitute: {
    measurement: string;
    name: string;
  };
};

export type Step = {
  instruction: string;
  description: string;
  image: Array<string>;
};

export type Recipe = {
  name: string;
  description: string;
  author: string;
  image: string;
  ingredients: Array<Ingredients>;
  steps: Array<Step>;
  tips: Array<string>;
  prep_time: string;
  cook_time: string;
  total_time: string;
  servings: string;
  date_created: string;
  date_updated: string;
  is_active: string;
  rating: {
    "5": number;
    "4": number;
    "3": number;
    "2": number;
    "1": number;
  };
  rating_verbose: [
    {
      user: string;
      rating: string;
    }
  ];
};
