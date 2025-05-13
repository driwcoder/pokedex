'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

type SearchFormProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  handleSearch: (e: React.FormEvent) => void;
};

export default function SearchForm({
  searchTerm,
  setSearchTerm,
  handleSearch,
}: SearchFormProps) {
  return (
    <form onSubmit={handleSearch} className="flex gap-4 items-center max-w-2xl mx-auto mb-8">
      <div className="relative flex-1">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Pokémon..."
          className="w-full pl-4 pr-10 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-red-500 transition-colors"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors"
        >
          <MagnifyingGlassIcon className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}