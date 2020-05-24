import React from 'react';
import JokeCard from '../JokeCard/JokeCard';
import cls from './Sidebar.module.css';

export default props => {
  return (
    <aside className={cls.Sidebar}>
      <h3>Favourite</h3>
      {props.state.favouriteJokes.slice().reverse().map(joke => <JokeCard
        isFavourite
        key={joke.id}
        joke={joke}
        addFavouriteJoke={props.addFavouriteJoke}
        removeFavouriteJoke={props.removeFavouriteJoke}
      />)}
    </aside>
  )
}
