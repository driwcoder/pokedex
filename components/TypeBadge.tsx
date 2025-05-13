'use client';

import { PokemonTypeList } from '@/types/pokemon';

type TypeBadgeProps = {
  type: PokemonTypeList;
  onClick: (type: string) => void;
};

const typeColors: { [key: string]: string } = {
  normal: 'bg-gray-400',
  fire: 'bg-red-500',
  water: 'bg-blue-500',
  electric: 'bg-yellow-400',
  grass: 'bg-green-500',
  ice: 'bg-cyan-300',
  fighting: 'bg-orange-700',
  poison: 'bg-purple-500',
  ground: 'bg-yellow-600',
  flying: 'bg-indigo-300',
  psychic: 'bg-pink-500',
  bug: 'bg-lime-500',
  rock: 'bg-yellow-700',
  ghost: 'bg-indigo-700',
  dragon: 'bg-purple-600',
  dark: 'bg-gray-800',
  steel: 'bg-gray-500',
  fairy: 'bg-pink-300',
};

export default function TypeBadge({ type, onClick }: TypeBadgeProps) {
  return (
    <button
      onClick={() => onClick(type.name)}
      className={`${
        typeColors[type.name] || 'bg-gray-500'
      } px-4 py-2 rounded-full text-white text-sm font-medium capitalize hover:opacity-90 transition-opacity`}
    >
      {type.name}
    </button>
  );
}