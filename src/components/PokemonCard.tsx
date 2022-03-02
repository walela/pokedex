import { useState } from "react"
import PokemonDetail from "./PokemonDetail"

interface PokemonCardProps {
  id: number
  name: string
  imageURL: string
  types: string[]
}
export default function PokemonCard({
  id,
  name,
  types,
  imageURL,
}: PokemonCardProps) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div className="rounded px-4 cursor-pointer py-2 flex flex-col justify-center shadow bg-gray-100 mb-2 hover:shadow-md" onClick={openModal}>
      <img src={imageURL} alt={name} width={192} height={192} loading="lazy" />
      <div className="text-center text-gray-800 text-xl uppercase py-4">
        <span>{id}. </span>
        {name}
      </div>
      <div className="flex gap-2 w-full px-2 mx-auto mb-4">
        {types.map((type) => (
          <span
            key={type}
            className="even:bg-red-300 odd:bg-indigo-300
          text-gray-600 rounded px-4 py-1 cursor-pointer text-sm"
          >
            {type}
          </span>
        ))}
      </div>
      <PokemonDetail isOpen={isOpen} closeModal={closeModal} id={id}/>
    </div>
  )
}
