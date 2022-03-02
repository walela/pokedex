interface image {
 sprites: any
 
}
export interface IPokemonPreview {
  id: number
  name: string
  imageURL: image
  types: string[]
}
