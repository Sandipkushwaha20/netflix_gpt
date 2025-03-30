import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';

const usePopularMovies = () => {
  // Fetch data from TMDB API and update store
  const dispatch = useDispatch();
  const getNowPalyingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results))
  };

  useEffect(() =>{
    getNowPalyingMovies();
  }, [])


}

export default usePopularMovies
