import axios from '../axios'

export default async function getInitialPokemon(): Promise<any> {
  const response = axios.get('/pokemon?limit=16')

  return response
}
