import { useEffect, useState, useReducer, useCallback } from 'react'
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
  const [offset, setOffset] = useState<any>(0)

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
    getPokemon(16, offset)
      .then((res) => {
        setPokemon(res.pokemon)
      })
      .catch()
  }, [offset])

  const setNext = () => {
    setNextPage()
    setOffset(offset + 16)
  }

  const setPrevious = () => {
    setPreviousPage()
    setOffset(offset - 16)
  }

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
          <button className="btn-primary" onClick={setPrevious}>
            Previous
          </button>
          <span className="text-gray-700 font-medium">
            Current Page: {currentPage + 1} of {totalPages}
          </span>
          <button className="btn-primary" onClick={setNext}>
            Next
          </button>
        </div>
      </Layout>
    </div>
  )
}
