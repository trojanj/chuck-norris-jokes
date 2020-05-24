import React, {useEffect, useReducer} from 'react';
import {favouriteReducer} from './favouriteReducer';
import {FavouriteContext} from './FavouriteContext';
import {ADD_FAVOURITE, GET_FAVOURITE_JOKES, REMOVE_FAVOURITE} from '../types';

export default ({children}) => {
  const initialState = {
    favouriteJokes: []
  }

  const [state, dispatch] = useReducer(favouriteReducer, initialState);

  useEffect(() => {
    const payload = JSON.parse(localStorage.getItem('favouriteJokes'));
    if (payload) {
      dispatch({type: GET_FAVOURITE_JOKES, payload});
    }
  }, [])

  const addFavouriteJoke = joke => {
    const payload = [...state.favouriteJokes.slice(), joke];
    dispatch({type: ADD_FAVOURITE, payload});
    localStorage.setItem('favouriteJokes', JSON.stringify(payload));
  }

  const removeFavouriteJoke = id => {
    const newFavouriteJokes = state.favouriteJokes.filter(joke => joke.id !== id);
    dispatch({type: REMOVE_FAVOURITE, payload: newFavouriteJokes});
    localStorage.setItem('favouriteJokes', JSON.stringify(newFavouriteJokes));
  }

  return (
    <FavouriteContext.Provider value={{state, addFavouriteJoke, removeFavouriteJoke}}>
      {children}
    </FavouriteContext.Provider>
  )
}
