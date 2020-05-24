import {ADD_FAVOURITE, GET_FAVOURITE_JOKES, REMOVE_FAVOURITE} from '../types';

const handlers = {
  [GET_FAVOURITE_JOKES]: (state, {payload}) => ({...state, favouriteJokes: payload}),
  [ADD_FAVOURITE]: (state, {payload}) => ({...state, favouriteJokes: payload}),
  [REMOVE_FAVOURITE]: (state, {payload}) => ({...state, favouriteJokes: payload})
}

export const favouriteReducer = (state, action) => {
  const handler = handlers[action.type];

  return handler(state, action)
}