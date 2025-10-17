// src/data/recipes.js

const recipes = [
  {
    id: 1,
    name: "Classic Margherita Pizza",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella cheese",
      "Fresh basil leaves",
      "Olive oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat the oven to 475°F (245°C).",
      "Roll out the pizza dough and spread tomato sauce evenly.",
      "Top with slices of fresh mozzarella and fresh basil leaves.",
      "Drizzle with olive oil and season with salt and pepper.",
      "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
      "Slice and serve hot."
    ],
    prepTimeMinutes: 20,
    cookTimeMinutes: 15,
    servings: 4,
    difficulty: "Easy",
    cuisine: "Italian",
    caloriesPerServing: 300,
    tags: ["Pizza", "Italian"],
    userId: 45,
    image: "https://cdn.dummyjson.com/recipe-images/1.webp",
    rating: 4.6,
    reviewCount: 3,
    mealType: ["Dinner"]
  },
  {
    id: 2,
    name: "Chicken Tikka Masala",
    ingredients: [
      "Chicken breast",
      "Yogurt",
      "Tomato puree",
      "Onion",
      "Garlic",
      "Garam masala",
      "Cream"
    ],
    instructions: [
      "Marinate chicken in yogurt and spices.",
      "Grill or sauté chicken until cooked.",
      "Prepare sauce with onion, garlic, tomato puree, and cream.",
      "Combine chicken with sauce and simmer.",
      "Serve with rice or naan."
    ],
    prepTimeMinutes: 30,
    cookTimeMinutes: 25,
    servings: 4,
    difficulty: "Medium",
    cuisine: "Indian",
    caloriesPerServing: 420,
    tags: ["Chicken", "Indian"],
    userId: 12,
    image: "https://cdn.dummyjson.com/recipe-images/2.webp",
    rating: 4.8,
    reviewCount: 5,
    mealType: ["Dinner"]
  },
  {
    id: 3,
    name: "Vegan Buddha Bowl",
    ingredients: [
      "Quinoa",
      "Chickpeas",
      "Avocado",
      "Spinach",
      "Carrots",
      "Tahini sauce"
    ],
    instructions: [
      "Cook quinoa as per instructions.",
      "Roast chickpeas with spices.",
      "Arrange all ingredients in a bowl.",
      "Drizzle with tahini sauce and serve."
    ],
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    servings: 2,
    difficulty: "Easy",
    cuisine: "Fusion",
    caloriesPerServing: 350,
    tags: ["Vegan", "Healthy"],
    userId: 33,
    image: "https://cdn.dummyjson.com/recipe-images/3.webp",
    rating: 4.7,
    reviewCount: 4,
    mealType: ["Lunch", "Dinner"]
  },
  {
    id: 4,
    name: "Beef Tacos",
    ingredients: [
      "Ground beef",
      "Taco shells",
      "Lettuce",
      "Cheddar cheese",
      "Tomato",
      "Sour cream"
    ],
    instructions: [
      "Cook ground beef with taco seasoning.",
      "Fill taco shells with beef and toppings.",
      "Serve immediately."
    ],
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    servings: 3,
    difficulty: "Easy",
    cuisine: "Mexican",
    caloriesPerServing: 400,
    tags: ["Tacos", "Mexican"],
    userId: 21,
    image: "https://cdn.dummyjson.com/recipe-images/4.webp",
    rating: 4.5,
    reviewCount: 2,
    mealType: ["Dinner"]
  },
  {
    id: 5,
    name: "French Onion Soup",
    ingredients: [
      "Onions",
      "Beef broth",
      "Butter",
      "Gruyère cheese",
      "Baguette",
      "Thyme"
    ],
    instructions: [
      "Caramelize onions in butter.",
      "Add broth and thyme, simmer.",
      "Top with toasted baguette and cheese, broil until golden."
    ],
    prepTimeMinutes: 20,
    cookTimeMinutes: 40,
    servings: 4,
    difficulty: "Medium",
    cuisine: "French",
    caloriesPerServing: 320,
    tags: ["Soup", "French"],
    userId: 18,
    image: "https://cdn.dummyjson.com/recipe-images/5.webp",
    rating: 4.4,
    reviewCount: 3,
    mealType: ["Lunch", "Dinner"]
  },
  {
    id: 6,
    name: "Pancakes",
    ingredients: [
      "Flour",
      "Milk",
      "Eggs",
      "Baking powder",
      "Sugar",
      "Butter"
    ],
    instructions: [
      "Mix dry and wet ingredients separately, then combine.",
      "Pour batter onto hot griddle, cook until bubbles form, flip and cook other side.",
      "Serve with syrup or toppings of choice."
    ],
    prepTimeMinutes: 10,
    cookTimeMinutes: 10,
    servings: 4,
    difficulty: "Easy",
    cuisine: "American",
    caloriesPerServing: 250,
    tags: ["Breakfast", "American"],
    userId: 27,
    image: "https://cdn.dummyjson.com/recipe-images/6.webp",
    rating: 4.3,
    reviewCount: 6,
    mealType: ["Breakfast"]
  }
];

export default recipes;
