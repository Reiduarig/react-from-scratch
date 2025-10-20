import { useState, use, Suspense } from "react"
import { PageWrapper } from "./components/PageWrapper"
import { Container } from "./components/Container"
import { Header } from "./components/Header"
import { Search } from "./components/Search"
import { FeaturedList } from "./components/FeaturedList"
import { FilterControls } from "./components/FilterControls"
import { RecipeStats } from "./components/RecipeStats"
import { RecipesList } from "./components/RecipesList"
import { NewRecipeForm } from "./components/NewRecipeForm"
import { useRecipeFilters } from "./hooks/useRecipeFilters";
import { type Recipe } from "./types";
import { getRecipes } from "./queries";
import { ErrorBoundary } from "react-error-boundary";

export function App() {
    return (
        <PageWrapper>
            <Container>
                <Header />
                 <ErrorBoundary fallback={({ error }) => (<div className="text-center text-red-500 mt-8">Error al cargar las recetas: {error}</div>)}>
                    <Suspense fallback={<div className="text-center text-2xl text-gray-950 py-8">Cargando recetas...</div>}>
                        <Main />
                    </Suspense>
                </ErrorBoundary>
            </Container>
        </PageWrapper>
    )
}

const recipesPromise = getRecipes();

function Main() {

    const apiRecipes = use(recipesPromise);
    const [showModal, setShowModal] = useState(false);
    const [recipes, setRecipes] = useState<Recipe[]>(apiRecipes);
       
    //Usar el custom hook para manejar filtros
    const {
        setSearch,
        setTagFilter,
        setDifficultyFilter,
        filteredRecipes,
        filterOptions,
        clearAllFilters,
        hasActiveFilters,
        totalResults,
        totalRecipes,
        tagFilter,
        difficultyFilter
    } = useRecipeFilters(recipes);

    function handleFeaturedListClick(recipe: Recipe) {
        setSearch(recipe.name);
    }


    return (
        <main>    
            <div className="mt-20">
                <div className="flex flex-col md:flex-row md:items-center gap-4 w-full">
                    <div className="flex-1">
                        <Search onSearch={setSearch} />
                    </div>
                    <FilterControls
                        tagFilter={tagFilter}
                        difficultyFilter={difficultyFilter}
                        onTagFilterChange={setTagFilter}
                        onDifficultyFilterChange={setDifficultyFilter}
                        onClearFilters={clearAllFilters}
                        filterOptions={filterOptions}
                        hasActiveFilters={hasActiveFilters}
                    />  
                </div>
            </div>
            {recipes.length > 0 && (
                <>
                    <div className="mt-4">
                        <FeaturedList recipes={recipes} onSelect={handleFeaturedListClick} />
                    </div>
                    
                    <div className="flex justify-between items-center my-8">
                        <div className="flex items-center gap-4">

                            <RecipeStats
                                totalResults={totalResults}
                                totalRecipes={totalRecipes}
                                hasActiveFilters={hasActiveFilters}
                            />
                           
                        </div>

                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded px-6 py-3 shadow transition-colors"
                            onClick={() => setShowModal(true)}
                        >
                            Agregar receta
                        </button>
                    </div>
                    <RecipesList recipes={filteredRecipes} />
                </>
            )}
            {!recipes.length && (
                <div className="text-center text-slate-500 mt-12">No hay recetas disponibles</div>
            )} 
               
            {showModal && (
            <>
                <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setShowModal(false)} />
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="relative w-full max-w-2xl">
                        <button
                            className="absolute top-2 right-2 text-2xl text-gray-400 hover:text-gray-700 z-10"
                            onClick={() => setShowModal(false)}
                            aria-label="Cerrar"
                        >
                            ×
                        </button>
                        <NewRecipeForm />
                    </div>
                </div>
            </>
            )} 
        </main>
    )
}