import React, {useReducer} from 'react';
import {AppContext} from './AppContext';
import {appReducer} from './appReducer';
import axios from '../axios/axios-jokes';
import {GET_RANDOM_JOKE} from './types';

const msInOneHour = 36e5;

function countHoursAgo(updatedAt) {
  const difference = Date.now() - new Date(updatedAt).getTime();
  return Math.floor(difference / msInOneHour);
}

export default ({children}) => {
  const initialState = {
    loading: false,
    jokes: []
  }

  const [state, dispatch] = useReducer(appReducer, initialState);

  const getRandomJoke = async () => {
    const response = await axios.get('/jokes/random');
    response.data.hoursAgo = countHoursAgo(response.data.updated_at);
    dispatch({type: GET_RANDOM_JOKE, payload: response.data})
  }

  return (
    <AppContext.Provider value={{state, dispatch, getRandomJoke}}>
      {children}
    </AppContext.Provider>
  )
}
