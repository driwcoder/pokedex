'use client';

import { useState, useEffect } from 'react';
import { Pokemon, PokemonTypeList } from '@/types/pokemon';
import PokemonCard from '@/components/PokemonCard';
import TypeBadge from '@/components/TypeBadge';
import SearchForm from '@/components/SearchForm';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [types, setTypes] = useState<PokemonTypeList[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/type');
        const data = await response.json();
        const filteredTypes = data.results.filter(
          (type: PokemonTypeList) => !['shadow', 'unknown'].includes(type.name)
        );
        setTypes(filteredTypes);
      } catch (error) {
        console.error('Error fetching types:', error);
      }
    };

    fetchTypes();
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm) return;

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`
      );
      const data = await response.json();
      setPokemonList([data]);
    } catch (error) {
      alert('Pokémon not found!');
    } finally {
      setIsLoading(false);
    }
  };

  const handleTypeClick = async (type: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const data = await response.json();
      
      const pokemonData = await Promise.all(
        data.pokemon.map(async (p: { pokemon: { url: string } }) => {
          const res = await fetch(p.pokemon.url);
          return res.json();
        })
      );
      
      setPokemonList(pokemonData);
    } catch (error) {
      console.error('Error fetching Pokémon by type:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Next.js Pokédex
        </h1>

        <SearchForm
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
        />

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {types.map((type) => (
            <TypeBadge
              key={type.name}
              type={type}
              onClick={handleTypeClick}
            />
          ))}
        </div>

        {isLoading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {pokemonList.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}