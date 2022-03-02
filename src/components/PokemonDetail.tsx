import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useEffect } from 'react'
import { getPokemonDetail } from '../api/services/getPokemonDetail'

export default function PokemonDetail(props: any) {
  const [pokemonData, setPokemonData] = useState<any>([])
  useEffect(() => {
    getPokemonDetail(props.id)
      .then((res) => {
        setPokemonData(res)
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <Transition appear show={props.isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={props.closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-80 my-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-t-xl rounded-b-md">
              <div className="grid place-items-center border-b border-gray-100 bg-indigo-50">
                <img
                  src={pokemonData.imageURL}
                  alt={pokemonData.name}
                  width={192}
                  height={192}
                  loading="lazy"
                />
              </div>
              <div className="py-2">
                <h1 className="underline text-lg uppercase text-gray-700 font-medium text-center">
                  {' '}
                  {pokemonData.name}
                </h1>
              </div>
              <div className="py-1 px-6">
                <span className="text-indigo-700 font-medium uppercase">
                  Species:
                </span>
                <span className="text-gray-400 ml-12">
                  {' '}
                  {pokemonData.species}
                </span>
              </div>
              <div className="py-1 px-6">
                <span className="text-indigo-700 font-medium uppercase">
                  Types:
                </span>
                <span className="text-gray-400 ml-12">
                  {' '}
                  {pokemonData.types?.join(', ')}
                </span>
              </div>
              <div className="py-1 px-6">
                <span className="text-indigo-700 font-medium uppercase">
                  Weight:
                </span>
                <span className="text-gray-400 ml-12">
                  {' '}
                  {pokemonData.weight}
                </span>
              </div>
              <div className="py-1 px-6">
                <span className="text-indigo-700 font-medium uppercase">
                  Moves:
                </span>
                <span className="text-gray-400 ml-2">
                  {' '}
                  {pokemonData.moves?.slice(0, 10).join(', ')}
                </span>
                <span className="text-gray-400 ml-2">among others</span>
              </div>
              <div className="py-1 px-6 mb-4">
                <span className="text-indigo-700 font-medium uppercase">
                  Stats:
                </span>
                {pokemonData.stats?.map((stat: any) => (
                  <div className="flex justify-between flex-wrap">
                    <div className="text-gray-600">{stat.name}</div>
                    <div className="text-gray-400">{stat.stat}</div>
                  </div>
                ))}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
