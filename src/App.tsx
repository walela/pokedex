import { useEffect, useState, useReducer } from 'react'
import { usePagination } from 'react-use-pagination'
import getPokemon from './api/services/getPokemon'
import Layout from './components/Layout'
import PokemonCard from './components/PokemonCard'
import { IPokemonPreview } from './types'

interface PaginationProps {
  totalItems: number
}

export default function App() {
  const [count, setCount] = useState(0)
  const [pokemon, setPokemon] = useState<any>([])
  const {
    currentPage,
    totalPages,
    setPage,
    setNextPage,
    setPreviousPage,
  } = usePagination({
    totalItems: count,
    initialPage: 0,
    initialPageSize: 16,
  })

  useEffect(() => {
    getPokemon()
      .then((res) => {
        setCount(res.count)
        setPokemon(res.pokemon)
      })
      .catch()
  }, [])

  useEffect(() => {

  }, [currentPage])

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
        <div className="w-full mx-auto my-4 flex gap-3 justify-center items-center">
          <button className="btn-primary" onClick={setPreviousPage}>
            Previous
          </button>
          <span className="text-gray-700 font-medium">
            Current Page: {currentPage + 1} of {totalPages}
          </span>
          <button className="btn-primary" onClick={setNextPage}>
            Next
          </button>
        </div>
      </Layout>
    </div>
  )
}
