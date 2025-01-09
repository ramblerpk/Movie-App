import {createContext, useState, useContext, useEffect} from "react"

const MovieContext = createContext()

export const useMoviesContext = () => useContext(MovieContext)

export const MoviesProvider = () => {}