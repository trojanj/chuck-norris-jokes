import React, {useContext} from 'react';
import JokeCard from '../JokeCard/JokeCard';
import cls from './Sidebar.module.css';
import {FavouriteContext} from '../../context/favourite/FavouriteContext';

export default () => {
  const {state} = useContext(FavouriteContext);

  return (
    <aside className={cls.Sidebar}>
      <h3>Favourite</h3>
      {state.favouriteJokes.slice().reverse().map(joke => <JokeCard isFavourite key={joke.id} joke={joke}/>)}
    </aside>
  )
}
