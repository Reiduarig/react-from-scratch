export function NewPuppyForm() {
    return (
        <form className="mt-8">
            <h2 className="font-medium">Add a New Puppy</h2>
            <div className="mt-2">
                <label className="block">
                    Name:
                    <input type="text" className="mt-1 block w-full border border-gray-300 rounded p-2" />
                </label>
                <label className="block mt-2">
                    Age:
                    <input type="number" className="mt-1 block w-full border border-gray-300 rounded p-2" />
                </label>
                <button type="submit" className="mt-4 bg-blue-500 text-white rounded p-2">Add Puppy</button>
            </div>
        </form>
    )
}
