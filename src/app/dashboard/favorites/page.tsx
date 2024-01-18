import { FavoritePokemons, PokemonsGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import  Image from 'next/image'
import { IoHeartOutline } from "react-icons/io5";


export const metadata =  {
    title:'Favoritos',
    description:'Pokemon seleccionados como favoritos'
}

export default async function PokemonsPages() {


  return (
    <div className="flex flex-col">
        <span className="text-5xl my-2">Pokémons Favoritos </span>
        <FavoritePokemons/>
    </div>
  )
}

