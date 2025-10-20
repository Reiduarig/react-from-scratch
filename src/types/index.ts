export type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: "Fácil" | "Media" | "Difícil";
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
};


export type FormErrors = {
  name?: string;
  image?: string;
  prepTimeMinutes?: string;
  cookTimeMinutes?: string;
  servings?: string;
  difficulty?: string;
  cuisine?: string;
  caloriesPerServing?: string;
  tags?: string;
  mealType?: string;
  ingredients?: string;
  instructions?: string;
};