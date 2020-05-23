import {GET_RANDOM_JOKE} from './types';

const handlers = {
  [GET_RANDOM_JOKE]: (state, {payload}) => ({...state, jokes: [...state.jokes, payload], loading: false}),
  DEFAULT: state => state
}

export const appReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
}