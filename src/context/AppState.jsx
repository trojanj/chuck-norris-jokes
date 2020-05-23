import React, {useEffect, useReducer} from 'react';
import {AppContext} from './AppContext';
import {appReducer} from './appReducer';
import axios from '../axios/axios-jokes';
import {GET_CATEGORIES, GET_CATEGORY_JOKE, GET_RANDOM_JOKE, GET_SEARCH_JOKE} from './types';

const msInOneHour = 36e5;

function countHoursAgo(updatedAt) {
  const difference = Date.now() - new Date(updatedAt).getTime();
  return Math.floor(difference / msInOneHour);
}

export default ({children}) => {
  const initialState = {
    loading: false,
    jokes: [],
    categories: []
  }

  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    getCategories();
  }, [])

  async function getCategories() {
    const response = await axios.get(`/jokes/categories`);
    dispatch({type: GET_CATEGORIES, payload: response.data})
  }

  const getRandomJoke = async () => {
    const response = await axios.get('/jokes/random');
    response.data.hoursAgo = countHoursAgo(response.data.updated_at);
    dispatch({type: GET_RANDOM_JOKE, payload: response.data})
  }

  const getCategoryJoke = async (category) => {
    const response = await axios.get(`/jokes/random?category=${category}`);
    response.data.hoursAgo = countHoursAgo(response.data.updated_at);
    dispatch({type: GET_CATEGORY_JOKE, payload: response.data})
  }

  const getSearchJoke = async (query) => {
    const response = await axios.get(`https://api.chucknorris.io/jokes/search?query=${query}`);
    response.data.result.forEach(joke => joke.hoursAgo = countHoursAgo(joke.updated_at));
    dispatch({type: GET_SEARCH_JOKE, payload: response.data.result})
  }

  return (
    <AppContext.Provider value={{state, dispatch, getRandomJoke, getCategoryJoke, getSearchJoke}}>
      {children}
    </AppContext.Provider>
  )
}
