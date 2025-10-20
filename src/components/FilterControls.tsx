interface FilterControlsProps {
    tagFilter: string;
    difficultyFilter: string;
    onTagFilterChange: (value: string) => void;
    onDifficultyFilterChange: (value: string) => void;
    onClearFilters: () => void;
    filterOptions: {
        tags: string[];
        difficulties: string[];
    };
    hasActiveFilters: boolean;
}

export function FilterControls({
    tagFilter,
    difficultyFilter,
    onTagFilterChange,
    onDifficultyFilterChange,
    onClearFilters,
    filterOptions,
    hasActiveFilters
}: FilterControlsProps) {
    return (
        <>
            <div className="flex gap-2 items-center">
                <label className="font-semibold text-slate-700 mr-2">Etiqueta:</label>
                <select
                    value={tagFilter}
                    onChange={e => onTagFilterChange(e.target.value)}
                    className="border rounded px-3 py-1 text-sm bg-white shadow focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                    <option value="">Todas</option>
                    {filterOptions.tags.map(tag => (
                        <option key={tag} value={tag}>{tag}</option>
                    ))}
                </select>
            </div>
            
            <div className="flex gap-2 items-center">
                <label className="font-semibold text-slate-700 mr-2">Dificultad:</label>
                <select
                    value={difficultyFilter}
                    onChange={e => onDifficultyFilterChange(e.target.value)}
                    className="border rounded px-3 py-1 text-sm bg-white shadow focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                    <option value="">Todas</option>
                    {filterOptions.difficulties.map(dif => (
                        <option key={dif} value={dif}>{dif}</option>
                    ))}
                </select>
            </div>
            
            {hasActiveFilters && (
                <button
                    className="bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-full px-5 py-2 text-sm font-semibold shadow border border-slate-300 transition-colors"
                    onClick={onClearFilters}
                    title="Limpiar todos los filtros"
                >
                    Limpiar filtros
                </button>
            )}
        </>
    );
}