import React from 'react';
import cls from './JokeCard.module.css';
import heartIcon from '../../icons/heart-icon.svg';
import filledHeartIcon from '../../icons/filled-heart-icon.svg';
import linkIcon from '../../icons/link-icon.svg';

export default props => {
  const {sidebarJokeCard, categories, id, hoursAgo, value} = props;

  const classes = [cls.JokeCard];
  sidebarJokeCard ? classes.push(cls.SidebarJokeCard) : classes.push(cls.MainJokeCard);

  return (
    <div className={classes.join(' ')}>
      <div className={cls.heartIcon}>
        <img src={sidebarJokeCard ? filledHeartIcon : heartIcon} alt="Heart icon"/>
      </div>
      <div className={cls.content}>
        <small className={cls.linkId}>
          ID:&nbsp;
          <a href={`https://api.chucknorris.io/jokes/${id}`}>
            {id}
            <img src={linkIcon} alt="Link icon" />
          </a>
        </small>
        <p className={cls.jokeText}>{value}</p>

        {
          sidebarJokeCard
          ? <div className={cls.details}>
              <small>Last update: {hoursAgo} hours ago</small>
            </div>
          : <div className={cls.details}>
              <small>Last update: {hoursAgo} hours ago</small>
              {categories[0] && <div>{categories}</div>}
            </div>
        }
      </div>
    </div>
  )
}

