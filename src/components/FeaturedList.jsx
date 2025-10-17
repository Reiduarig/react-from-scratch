import recipes from "../data/recipes";

export function FeaturedList({ onSelect }) {
    // Top 3 recetas mejor valoradas
    const top = [...recipes].sort((a, b) => b.rating - a.rating).slice(0, 3);
    return (
        <section className="w-full">
            <h2 className="font-extrabold text-xl text-slate-800 mb-3 flex items-center gap-2">
                <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                Recetas destacadas
            </h2>
            <div className="flex gap-6 overflow-x-auto pb-2 hide-scrollbar">
                {top.map(r => (
                    <div
                        key={r.id}
                        className="min-w-[260px] max-w-xs bg-white rounded-2xl shadow-lg flex flex-col items-center p-4 transition hover:scale-105 cursor-pointer border border-transparent hover:border-pink-200"
                        onClick={() => onSelect && onSelect(r)}
                        tabIndex={0}
                        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onSelect && onSelect(r)}
                        title={`Ver ${r.name}`}
                    >
                        <div className="w-28 h-28 rounded-xl overflow-hidden mb-3 shadow">
                            <img src={r.image} alt={r.name} className="object-cover w-full h-full" />
                        </div>
                        <div className="text-center">
                            <div className="font-bold text-base text-slate-700 mb-1 truncate">{r.name}</div>
                            <div className="flex items-center justify-center gap-1 text-sm text-yellow-500 font-semibold">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                                {r.rating}
                            </div>
                            <div className="text-xs text-slate-400 mt-1">{r.cuisine}</div>
                        </div>
                        <button
                            className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-4 py-1 rounded-full font-semibold text-sm shadow"
                        >Ver receta</button>
                    </div>
                ))}
            </div>
            <style>{`.hide-scrollbar::-webkit-scrollbar{display:none}`}</style>
        </section>
    );
}


