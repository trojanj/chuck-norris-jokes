import {GET_CATEGORIES, GET_CATEGORY_JOKE, GET_RANDOM_JOKE, GET_SEARCH_JOKE, SET_LOADING} from './types';

const handlers = {
  [GET_CATEGORIES]: (state, {payload}) => ({...state, categories: payload}),
  [GET_RANDOM_JOKE]: (state, {payload}) => ({...state, jokes: [...state.jokes, payload], loading: false}),
  [GET_CATEGORY_JOKE]: (state, {payload}) => ({...state, jokes: [...state.jokes, payload], loading: false}),
  [GET_SEARCH_JOKE]: (state, {payload}) => ({...state, jokes: [...state.jokes, ...payload], loading: false}),
  [SET_LOADING]: state => ({...state, loading: true})
}

export const appReducer = (state, action) => {
  const handler = handlers[action.type];

  return handler(state, action);
}