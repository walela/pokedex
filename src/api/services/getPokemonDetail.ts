import axios from '../axios'

export const getPokemonDetail = async (
  identifier: number | string,
): Promise<any> => {
  const { data } = await axios.get(`/pokemon/${identifier}`)
  console.log(data)

  let pokemonDetail = {
    species: data.species.name,
    imageURL: data.sprites.front_default,
    id: data.id,
    name: data.name,
    types: data.types.map((type: any) => type.type.name),
    weight: data.weight,
    moves: data.moves.map((move: any) => move.move.name),
    stats: data.stats.map(({ stat, base_stat }: any) => ({
      name: stat.name,
      stat: base_stat,
    })),
  }
  console.log(pokemonDetail)

  return pokemonDetail
}
