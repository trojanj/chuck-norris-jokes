import React, {useContext} from 'react';
import cls from './JokeCard.module.css';
import heartIcon from '../../icons/heart-icon.svg';
import filledHeartIcon from '../../icons/filled-heart-icon.svg';
import linkIcon from '../../icons/link-icon.svg';
import {FavouriteContext} from '../../context/favourite/FavouriteContext';

export default props => {
  const {categories, id, hoursAgo, value} = props.joke;
  const {state, addFavouriteJoke, removeFavouriteJoke} = useContext(FavouriteContext);

  const classes = [cls.JokeCard];
  props.isFavourite ? classes.push(cls.FavouriteJokeCard) : classes.push(cls.MainJokeCard);

  const srcHeart = props.isFavourite || state.favouriteJokes.find(joke => joke === props.joke) ? filledHeartIcon : heartIcon;

  const handleFavouriteClick = () => {
    if (state.favouriteJokes.find(joke => joke === props.joke)) {
      removeFavouriteJoke(id);
      return;
    }
    addFavouriteJoke(props.joke);
  }

  return (
    <div className={classes.join(' ')}>
      <div className={cls.heartIcon}>
        <img
          src={srcHeart}
          alt="Heart icon"
          onClick={handleFavouriteClick}
        />
      </div>
      <div className={cls.content}>
        <small className={cls.linkId}>
          ID:&nbsp;
          <a href={`https://api.chucknorris.io/jokes/${id}`}>
            {id}
            <img src={linkIcon} alt="Link icon"/>
          </a>
        </small>
        <p className={cls.jokeText}>{value}</p>
        <div className={cls.details}>
          <small>Last update: {hoursAgo} hours ago</small>
          {categories[0] && <div>{categories}</div>}
        </div>
      </div>
    </div>
  )
}

