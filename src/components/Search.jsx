export function Search() {
    return (
        <div>
            <label htmlFor="search" className="font-medium">
                Search
            </label>
            <div className="mt-2 flex items-center gap-4">
                <input
                    id="search"
                    type="text"
                    className="flex-1 rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="search"
                />
                <button className="rounded bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600">
                    Go
                </button>
            </div>
        </div>
    )
}
