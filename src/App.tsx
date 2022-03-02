import { useEffect, useState, useReducer } from 'react'
import getInitialPokemon from './api/services/getPokemon'
import Layout from './components/Layout'

export default function App() {
  const [pokemon, setPokemon] = useState([])
  useEffect(() => {
    getInitialPokemon()
      .then((res) => {
        console.log(res)
        // setPokemon(data.results)
      })
      .catch()
  }, [])

  return (
    <div>
      <Layout>
        <h1 className="text-3xl text-red-500 font-bold underline">
          Hello World!
        </h1>
      </Layout>
    </div>
  )
}
