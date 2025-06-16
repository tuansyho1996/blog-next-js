import ThemeToggle from "./theme.toggle";


export default function Header() {


    return (
        <header className="w-full px-6 py-4 flex justify-between items-center bg-[var(--background)] text-[var(--foreground)] shadow">
            <h1 className="text-xl font-bold">My Website</h1>
            <ThemeToggle />
        </header>
    );
}
