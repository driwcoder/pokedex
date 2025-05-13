import { Pokemon, PokemonType } from '@/types/pokemon';
import TypeBadge from './TypeBadge';

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

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <img
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-xl font-bold text-gray-800 capitalize mb-2">
        {pokemon.name}
      </h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {pokemon.types.map((type: PokemonType) => (
          <span
            key={type.slot}
            className={`${
              typeColors[type.type.name]
            } px-3 py-1 rounded-full text-white text-xs font-medium`}
          >
            {type.type.name}
          </span>
        ))}
      </div>
      <div className="space-y-2">
        {pokemon.stats.map((stat) => (
          <div key={stat.stat.name} className="flex items-center justify-between">
            <span className="text-gray-600 text-sm capitalize">
              {stat.stat.name}
            </span>
            <span className="font-semibold">{stat.base_stat}</span>
          </div>
        ))}
      </div>
    </div>
  );
}