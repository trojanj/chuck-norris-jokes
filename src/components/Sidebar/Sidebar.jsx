import React from 'react';
import JokeCard from '../JokeCard/JokeCard';
import cls from './Sidebar.module.css';
import Backdrop from '../UI/Backdrop/Backdrop';

export default props => {
  const classes = props.showFavourite ? [cls.Sidebar, cls.show] : [cls.Sidebar];
  return (
    <>
      {props.showFavourite && <Backdrop onClick={props.handleFavouriteClick}/>}
      <aside className={classes.join(' ')}>
        <h3>Favourite</h3>
        {props.state.favouriteJokes.slice().reverse().map(joke => <JokeCard
          isFavourite
          key={joke.id}
          joke={joke}
          addFavouriteJoke={props.addFavouriteJoke}
          removeFavouriteJoke={props.removeFavouriteJoke}
        />)}
      </aside>
    </>
  )
}
