import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="max-w-5xl mx-auto pb-8">
      <h1 className="text-6xl font-semibold underline text-indigo-700 text-center pt-4 pb-8">
        Pokedex
      </h1>
      {children}
    </div>
  )
}
