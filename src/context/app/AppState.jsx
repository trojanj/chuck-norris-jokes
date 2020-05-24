import React, {useEffect, useReducer} from 'react';
import {AppContext} from './AppContext';
import {appReducer} from './appReducer';
import axios from '../../axios/axios-jokes';
import {
  ADD_FAVOURITE,
  GET_CATEGORIES,
  GET_CATEGORY_JOKE,
  GET_FAVOURITE_JOKES,
  GET_RANDOM_JOKE,
  GET_SEARCH_JOKE,
  REMOVE_FAVOURITE,
  SET_LOADING
} from '../types';

const msInOneHour = 36e5;

function countHoursAgo(updatedAt) {
  const difference = Date.now() - new Date(updatedAt).getTime();
  return Math.floor(difference / msInOneHour);
}

export default ({children}) => {
  const initialState = {
    loading: false,
    jokes: [],
    categories: [],
    favouriteJokes: []
  }

  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    getCategories();
  }, [])

  useEffect(() => {
    const payload = JSON.parse(localStorage.getItem('favouriteJokes'));
    if (payload) {
      dispatch({type: GET_FAVOURITE_JOKES, payload});
    }
  }, [])

  async function getCategories() {
    const response = await axios.get(`/jokes/categories`);
    dispatch({type: GET_CATEGORIES, payload: response.data})
  }

  const setLoading = () => {
    dispatch({type: SET_LOADING})
  }

  const getRandomJoke = async () => {
    setLoading();
    const response = await axios.get('/jokes/random');
    response.data.hoursAgo = countHoursAgo(response.data.updated_at);
    dispatch({type: GET_RANDOM_JOKE, payload: response.data})
  }

  const getCategoryJoke = async (category) => {
    setLoading();
    const response = await axios.get(`/jokes/random?category=${category}`);
    response.data.hoursAgo = countHoursAgo(response.data.updated_at);
    dispatch({type: GET_CATEGORY_JOKE, payload: response.data})
  }

  const getSearchJoke = async (query) => {
    setLoading();
    const response = await axios.get(`https://api.chucknorris.io/jokes/search?query=${query}`);
    response.data.result.forEach(joke => joke.hoursAgo = countHoursAgo(joke.updated_at));
    dispatch({type: GET_SEARCH_JOKE, payload: response.data.result})
  }

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
    <AppContext.Provider value={{state, getRandomJoke, getCategoryJoke, getSearchJoke, addFavouriteJoke, removeFavouriteJoke}}>
      {children}
    </AppContext.Provider>
  )
}
