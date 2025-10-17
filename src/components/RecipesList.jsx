import { useState } from "react";

export function RecipesList({ recipes }) {
    const [selected, setSelected] = useState(null);
    if (!recipes.length) {
        return <div className="text-center text-slate-400 mt-12">No se encontraron recetas.</div>;
    }
    return (
        <>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} onClick={() => setSelected(recipe)} />
                ))}
            </ul>
            {/* Drawer lateral */}
            {selected && (
                <>
                    <div className="fixed inset-0 bg-black/30 z-40" onClick={() => setSelected(null)} />
                    <aside className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto animate-slidein flex flex-col">
                        <button
                            className="self-end m-4 text-3xl text-slate-400 hover:text-slate-700"
                            onClick={() => setSelected(null)}
                            aria-label="Cerrar"
                        >
                            ×
                        </button>
                        <div className="px-8 pb-8 flex flex-col gap-4">
                            <img src={selected.image} alt={selected.name} className="w-full h-56 object-cover rounded-xl shadow mb-4" />
                            <h2 className="text-2xl font-extrabold text-slate-800 mb-1">{selected.name}</h2>
                            <div className="flex flex-wrap gap-2 text-xs text-slate-500 mb-2">
                                <span>Prep: {selected.prepTimeMinutes} min</span>
                                <span>Cook: {selected.cookTimeMinutes} min</span>
                                <span>Cal: {selected.caloriesPerServing}</span>
                                <span>Porciones: {selected.servings}</span>
                                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">{selected.difficulty}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-yellow-500">★ {selected.rating}</span>
                                <span className="text-slate-400">({selected.reviewCount} reseñas)</span>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-1">
                                {selected.tags.map(tag => (
                                    <span key={tag} className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs">{tag}</span>
                                ))}
                            </div>
                            <div className="mt-4">
                                <strong className="block mb-1 text-slate-700">Ingredientes:</strong>
                                <ul className="list-disc list-inside ml-2 text-slate-700">
                                    {selected.ingredients.map((ing, i) => (
                                        <li key={i}>{ing}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-4">
                                <strong className="block mb-1 text-slate-700">Instrucciones:</strong>
                                <ol className="list-decimal list-inside ml-2 text-slate-700">
                                    {selected.instructions.map((step, i) => (
                                        <li key={i}>{step}</li>
                                    ))}
                                </ol>
                            </div>
                            <div className="mt-4 text-slate-500 text-xs">Cocina: {selected.cuisine} | Tipo: {selected.mealType.join(", ")}</div>
                        </div>
                    </aside>
                    <style>{`@keyframes slidein{from{transform:translateX(100%);}to{transform:translateX(0);}}.animate-slidein{animation:slidein .25s cubic-bezier(.4,0,.2,1);}`}</style>
                </>
            )}
        </>
    );
}

function RecipeCard({ recipe, onClick }) {
    return (
        <li
            key={recipe.id}
            className="overflow-clip rounded-lg bg-white shadow-md ring-black/5 hover:translate-y-2 transition-transform cursor-pointer"
            onClick={onClick}
            tabIndex={0}
            onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onClick()}
            title={`Ver detalles de ${recipe.name}`}
        >
            <img
                className="aspect-square object-cover w-full"
                alt={recipe.name}
                src={recipe.image}
            />
            <div className="p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">{recipe.name}</h3>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">{recipe.difficulty}</span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                    <span>Prep: {recipe.prepTimeMinutes} min</span>
                    <span>Cook: {recipe.cookTimeMinutes} min</span>
                    <span>Cal: {recipe.caloriesPerServing}</span>
                    <span>Porciones: {recipe.servings}</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                    <span className="text-yellow-500">★ {recipe.rating}</span>
                    <span className="text-slate-400">({recipe.reviewCount} reseñas)</span>
                </div>
                <div className="flex flex-wrap gap-1 mt-1">
                    {recipe.tags.map(tag => (
                        <span key={tag} className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs">{tag}</span>
                    ))}
                </div>
            </div>
        </li>
    );
}
