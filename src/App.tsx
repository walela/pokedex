import { useEffect, useState, useReducer } from 'react'
import getInitialPokemon from './api/services/getPokemon'
import Layout from './components/Layout'
import Pagination from './components/Pagination'
import PokemonCard from './components/PokemonCard'
import { IPokemonPreview } from './types'

export default function App() {
  const [pokemon, setPokemon] = useState<any>([])
  useEffect(() => {
    getInitialPokemon()
      .then((res) => {
        console.log(res)
        setPokemon(res)
      })
      .catch()
  }, [])

  return (
    <div>
      <Layout>
        <div className="w-full flex justify-center gap-4 flex-wrap mb-4">
          {pokemon.map((p: any) => (
            <div key={p.id}>
              <PokemonCard
                id={p.id}
                name={p.name}
                types={p.types}
                imageURL={p.imageURL}
              />
            </div>
          ))}
        </div>
        <Pagination />
      </Layout>
    </div>
  )
}
