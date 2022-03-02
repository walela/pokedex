import { useEffect } from 'react'
import getInitialPokemon from './api/services/getInitialPokemon'
import Layout from './components/Layout'

export default function App() {
  useEffect(() => {
    getInitialPokemon().then(console.log, console.error)
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
