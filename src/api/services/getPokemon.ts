import axios from '../axios'
import { IPokemonPreview } from '../../types'

export default async function getPokemon(
  limit: number = 16,
  offset: number = 0,
): Promise<any> {
  let pokemon = []
  const response = await axios.get(`/pokemon?limit=${limit}offset=${offset}`)
  console.log(response)
  for (const pokemonItem of response.data.results) {
    const pokemonDetailResponse = await axios.get(pokemonItem.url)
    pokemon.push(pokemonDetailResponse.data)
  }
  pokemon = pokemon.map((p) => {
    return {
      id: p.id,
      name: p.name,
      imageURL: p.sprites.front_default,
      types: p.types.map((type: any) => type.type.name),
    }
  })
  return { count: response.data.count, pokemon }
}
