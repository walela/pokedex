# Pokedex

Deployed link: https://pokedex-rosy-chi.vercel.app/

## About

This repository contains code for the Prepend [Frontend Coding Challenge](https://www.notion.so/The-Pok-mon-Frontend-Coding-Challenge-91e21b9bbc2b4d309f64449b9cedab9a).

Technologies used are:
- React.js and TypeScript via CRA
- Tailwind CSS for styling

## Thoughts
I quickly got the API working and displaying a summary of the pokemon but then spent too much 
time on the UI and making things neat. I also fought with TypeScript a lot and eventually resorted
to a whole lot of `any`s ;)

There is a whole lot of improvements I would make if I had extra time:
- Fill out and extend the types for both the components and data types to improve the type safety
- Place Pokemon details in their own separate page which is a better UX than modals
- Improve the `loading` and transition states for components with stuff like Spinners or CSS transitions
- Use a library like `SWR` to cache and dedupe requests to improve performance
- Replace CRA with `Next.js` SSG, since the API data is static for improved performance.
- Implement client-side search etc

Well, this was more challenging than I expected it to be, especially under the time constraints!
