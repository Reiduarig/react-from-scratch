import { PageWrapper } from "./components/PageWrapper"
import { Container } from "./components/Container"
import { Header } from "./components/Header"
import { Search } from "./components/Search"
import { FeaturedList } from "./components/FeaturedList"

import { RecipesList } from "./components/RecipesList"
import { NewRecipeForm } from "./components/NewRecipeForm"
import { useState } from "react"
import recipesData from "./data/recipes";


export function App() {
    return (
        <PageWrapper>
            <Container>
                <Header />
                <Main />
            </Container>
        </PageWrapper>
    )
}

function Main() {
    const [showModal, setShowModal] = useState(false);
    const [search, setSearch] = useState("");
    const [tagFilter, setTagFilter] = useState("");
    const [difficultyFilter, setDifficultyFilter] = useState("");

    // Obtener tags únicos
    const allTags = Array.from(new Set(recipesData.flatMap(r => r.tags)));
    // Obtener dificultades únicas
    const allDifficulties = Array.from(new Set(recipesData.map(r => r.difficulty)));

    // Filtrado combinado
    const filtered = recipesData.filter(r => {
        const q = search.trim().toLowerCase();
        const matchesSearch = !q || (
            r.name.toLowerCase().includes(q) ||
            r.cuisine.toLowerCase().includes(q) ||
            r.tags.some(tag => tag.toLowerCase().includes(q)) ||
            r.mealType.some(type => type.toLowerCase().includes(q)) ||
            r.ingredients.some(ing => ing.toLowerCase().includes(q))
        );
        const matchesTag = !tagFilter || r.tags.includes(tagFilter);
        const matchesDifficulty = !difficultyFilter || r.difficulty === difficultyFilter;
        return matchesSearch && matchesTag && matchesDifficulty;
    });

    function handleFeaturedListClick(recipe) {
        setSearch(recipe.name);
    }

    function handleClearSearch() {
        setSearch("");
        setTagFilter("");
        setDifficultyFilter("");
    }

    return (
        <main>
            <div className="mt-20">
                <div className="flex flex-col md:flex-row md:items-center gap-4 w-full">
                    <div className="flex-1">
                        <Search onSearch={setSearch} />
                    </div>
                    <div className="flex gap-2 items-center">
                        <label className="font-semibold text-slate-700 mr-2">Etiqueta:</label>
                        <select
                            value={tagFilter}
                            onChange={e => setTagFilter(e.target.value)}
                            className="border rounded px-3 py-1 text-sm bg-white shadow"
                        >
                            <option value="">Todas</option>
                            {allTags.map(tag => (
                                <option key={tag} value={tag}>{tag}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex gap-2 items-center">
                        <label className="font-semibold text-slate-700 mr-2">Dificultad:</label>
                        <select
                            value={difficultyFilter}
                            onChange={e => setDifficultyFilter(e.target.value)}
                            className="border rounded px-3 py-1 text-sm bg-white shadow"
                        >
                            <option value="">Todas</option>
                            {allDifficulties.map(dif => (
                                <option key={dif} value={dif}>{dif}</option>
                            ))}
                        </select>
                    </div>
                    {(search || tagFilter || difficultyFilter) && (
                        <button
                            className="bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-full px-5 py-2 text-sm font-semibold shadow border border-slate-300"
                            onClick={handleClearSearch}
                        >
                            Limpiar filtros
                        </button>
                    )}
                </div>
            </div>
            <div className="mt-4">
                <FeaturedList onSelect={handleFeaturedListClick} />
            </div>
            
            <div className="flex justify-end my-8">
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded px-6 py-3 shadow transition-colors"
                    onClick={() => setShowModal(true)}
                >
                    Agregar receta
                </button>
            </div>
            <RecipesList recipes={filtered} />
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