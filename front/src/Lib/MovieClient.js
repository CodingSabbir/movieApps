import {createClient} from '@sanity/client'

export const MovieClient = createClient({
    projectId:import.meta.env.VITE_PROJECT_ID ,
    dataset: 'production',
    useCdn: true, 
    apiVersion: '2023-11-17', 
    token: import.meta.env.VITE_MOVIE_TOKEN,
    ignoreBrowserTokenWarning: true
  })