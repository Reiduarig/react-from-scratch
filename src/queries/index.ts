export async function getRecipes() {
   
    try {

        const response = await fetch('https://dummyjson.com/recipes');
        
        if (!response.ok) {
            const errorData = await response.json();
            throw errorData;
        }

        const { recipes } = await response.json();

        return recipes;

    } catch (error) {

        console.error("Error fetching recipes:", error);

        throw error;
    
    }     
}
     
