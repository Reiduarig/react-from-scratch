export function Header() {
    return (
        <header className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-pink-400 via-blue-400 to-violet-400 rounded-xl p-3 shadow-lg">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M17.95 17.95l-1.414-1.414M6.05 6.05L4.636 7.464" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight leading-tight drop-shadow-sm">React Recipes</h1>
                        <p className="text-slate-500 text-base mt-1">By <a className="font-semibold text-blue-600 hover:underline" href="#">Quique</a></p>
                    </div>
                </div>
                <div className="flex flex-col items-start md:items-end">
                    <span className="inline-block bg-pink-100 text-pink-700 font-semibold px-4 py-1 rounded-full text-xs mb-2 tracking-wide">Proyecto Vite + Tailwind</span>
                    <span className="text-slate-400 text-xs">Modern React App UI</span>
                </div>
            </div>
        </header>
    )
}