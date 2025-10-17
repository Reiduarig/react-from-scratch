export function PageWrapper({ children }) {
    return (
        <div className="min-h-dvh bg-gradient-to-br from-blue-100 via-pink-100 to-violet-200 to-[70vh]">
            {children}
        </div>
    )
}