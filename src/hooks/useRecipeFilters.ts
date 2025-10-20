import { useState, useMemo } from "react";
import { Recipe } from "../types";

export function useRecipeFilters(recipes: Recipe[] = []) {

    const [search, setSearch] = useState("");
    const [tagFilter, setTagFilter] = useState("");
    const [difficultyFilter, setDifficultyFilter] = useState("");

    // Asegurar que recipes sea siempre un array
    const safeRecipes = Array.isArray(recipes) ? recipes : [];

    // Obtener opciones únicas para los filtros
    const filterOptions = useMemo(() => ({
        tags: Array.from(new Set(safeRecipes.flatMap(r => r.tags))),
        difficulties: Array.from(new Set(safeRecipes.map(r => r.difficulty)))
    }), [safeRecipes]);

    // Aplicar filtros usando valores diferidos si está habilitado React 19
    const filteredRecipes = useMemo(() => {
        return safeRecipes.filter(recipe => {
            const searchTerm = search.trim().toLowerCase();
            const matchesSearch = !searchTerm || (
                recipe.name.toLowerCase().includes(searchTerm) ||
                recipe.cuisine.toLowerCase().includes(searchTerm) ||
                recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
                recipe.mealType.some(type => type.toLowerCase().includes(searchTerm)) ||
                recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm))
            );

            const matchesTag = !tagFilter || recipe.tags.includes(tagFilter);
            const matchesDifficulty = !difficultyFilter || recipe.difficulty === difficultyFilter;

            return matchesSearch && matchesTag && matchesDifficulty;
        });
    }, [safeRecipes, search, tagFilter, difficultyFilter]);

   
    // Funciones para limpiar filtros
    const clearAllFilters = (() => {
            setSearch("");
            setTagFilter("");
            setDifficultyFilter("");
        });
        
    const clearSearch = () => setSearch("");

    return {

        // Setters
        setSearch: setSearch,
        setTagFilter: setTagFilter,
        setDifficultyFilter: setDifficultyFilter,

        // Valores
        filteredRecipes,
        filterOptions,
        clearAllFilters,
        clearSearch,
        hasActiveFilters: Boolean(search || tagFilter || difficultyFilter),
        totalResults: filteredRecipes.length,
        totalRecipes: safeRecipes.length,
        tagFilter,
        difficultyFilter
    };
}