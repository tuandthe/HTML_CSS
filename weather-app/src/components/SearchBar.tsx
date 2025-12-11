import React, { useState } from "react";

interface SearchBarProps {
    onSearch: (city: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {

    const [input, setInput] = useState('');

    const handleSearch = () => {        
        if (input.trim()) {
            onSearch(input);
            setInput('');
        }
    };
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }
    return (
        <div className="flex gap-2 w-full max-w-md">
            <input 
                type="text" 
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Nhập tên thành phố (VD: Hanoi)..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button 
                onClick={handleSearch}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
                Tìm kiếm
            </button>
        </div>
    );
}