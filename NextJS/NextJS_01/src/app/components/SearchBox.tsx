'use client';
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export function SearchBox() {
    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        router.push(`/search?query=${encodeURIComponent(query)}`);
    }
    return (
        <form onSubmit={handleSearch}>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Search..."
            />
            <button type="submit">Search</button>
        </form>
    );
}