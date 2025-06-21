import ThemeToggle from "./theme.toggle";
import Image from "next/image";
import SearchHeader from "./search.header";

export default function Header() {


    return (
        <header className="w-full px-6 py-4 flex justify-between items-center bg-[var(--background)] text-[var(--foreground)] max-w-6xl mx-auto gap-4">
            <Image
                src="https://d2jfx0w9sp915a.cloudfront.net/541f795d750542d7e5c9e6fe3e68344a"
                alt="Logo"
                width={70}
                height={70}
                className="rounded-full"
            />
            <SearchHeader />
            <ThemeToggle />
        </header>
    );
}
