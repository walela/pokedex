import { useEffect, useState } from 'react'
import { usePagination } from 'react-use-pagination'
import getPokemon from './api/services/getPokemon'
import Layout from './components/Layout'
import PokemonCard from './components/PokemonCard'

import { RevolvingDot } from 'react-loader-spinner'

export default function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [pokemon, setPokemon] = useState<any>([])
  const [offset, setOffset] = useState<any>(0)

  const {
    currentPage,
    totalPages,
    setNextPage,
    setPreviousPage,
  } = usePagination({
    totalItems: count,
    initialPage: 0,
    initialPageSize: 16,
  })

  useEffect(() => {
    setLoading(true)
    getPokemon()
      .then((res) => {
        setCount(res.count)
        setPokemon(res.pokemon)
      })
      .then(() => setLoading(false))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    setLoading(true)
    getPokemon(16, offset)
      .then((res) => {
        setPokemon(res.pokemon)
      })
      .then(() => setLoading(false))
      .catch((err) => console.log(err))
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
    <Layout>
      <div className="w-full flex flex-col justify-center gap-4 flex-wrap mb-4">
        {loading ? (
          <div className="w-3/4  mx-auto flex justify-center py-12 items-center">
            <RevolvingDot
              radius={5}
              width={120}
              height={120}
              color="rgb(57, 67, 202)"
            />
          </div>
        ) : (
          <div className="w-full flex justify-center gap-4 flex-wrap mb-4">
            {pokemon.map((p: any) => {
              return (
                <div key={p.id}>
                  <PokemonCard
                    id={p.id}
                    name={p.name}
                    types={p.types}
                    imageURL={p.imageURL}
                  />
                </div>
              )
            })}
          </div>
        )}
        <div className="w-full mx-auto my-4 flex gap-3 justify-center items-center">
          <button
            className="btn-primary inline w-32"
            onClick={() => setOffset(0)}
          >
            Home{' '}
          </button>
          <button
            className="btn-primary"
            onClick={setPrevious}
            disabled={offset === 0}
          >
            Previous
          </button>
          <span className="text-gray-700 font-medium">
            Current Page: {currentPage + 1} of {totalPages}
          </span>
          <button className="btn-primary" onClick={setNext}>
            Next
          </button>
        </div>
      </div>
    </Layout>
  )
}
