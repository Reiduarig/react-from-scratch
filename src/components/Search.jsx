import { useState } from "react";

export function Search({ onSearch }) {
    const [value, setValue] = useState("");

    function handleChange(e) {
        setValue(e.target.value);
        if (onSearch) onSearch(e.target.value);
    }

    return (
        <div className="w-full">
            <label htmlFor="search" className="font-semibold text-slate-700 text-base">Buscar receta</label>
            <div className="mt-2 flex items-center gap-2 bg-slate-100 rounded-lg px-3 py-2 shadow-inner">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                <input
                    id="search"
                    type="text"
                    className="flex-1 bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
                    placeholder="Buscar por nombre, ingrediente, etc."
                    value={value}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}
