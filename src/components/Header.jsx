export function Header() {
    return (
        <header className="mb-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-800">React From Scratch</h1>
                <p className="text-gray-600">By <a className="underline" href="#">Quique</a></p>
            </div>
            <div className="mt-6">
                <h1 className="text-lg font-bold">Introduction</h1>
                <p className="text-slate-600">A simple React setup from scratch using Vite and Tailwind CSS.</p>
            </div>
        </header>
    )
}