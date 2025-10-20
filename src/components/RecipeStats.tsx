interface RecipeStatsProps {
    totalResults: number;
    totalRecipes: number;
    hasActiveFilters: boolean;
}

export function RecipeStats({ totalResults, totalRecipes, hasActiveFilters }: RecipeStatsProps) {
    return (
        <div className="text-sm text-slate-600">
            <span className="font-medium">{totalResults}</span> receta{totalResults !== 1 ? 's' : ''} 
            {hasActiveFilters && (
                <>
                    {' '}de <span className="font-medium">{totalRecipes}</span> total
                    <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                        Filtradas
                    </span>
                </>
            )}
        </div>
    );
}