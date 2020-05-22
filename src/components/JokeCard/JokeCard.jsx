import React from 'react';
import cls from './JokeCard.module.css';
import heartIcon from '../../icons/heart-icon.svg';
import filledHeartIcon from '../../icons/filled-heart-icon.svg';
import linkIcon from '../../icons/link-icon.svg';

export default (props) => {
  const classes = [cls.JokeCard];
  props.sidebarJokeCard ? classes.push(cls.SidebarJokeCard) : classes.push(cls.MainJokeCard);

  return (
    <div className={classes.join(' ')}>
      <div className={cls.heartIcon}>
        <img src={props.sidebarJokeCard ? filledHeartIcon : heartIcon} alt="Heart icon"/>
      </div>
      <div className={cls.content}>
        <small className={cls.linkId}>
          ID:&nbsp;
          <a href="/">
            XNaAxUduSw6zANDaIEab7A
            <img src={linkIcon} alt="Link icon" />
          </a>
        </small>
        <p className={cls.jokeText}>No one truly knows who's Chuck Norris' real father. No one is biologically strong enough for this. He must've conceived himself.</p>

        {props.sidebarJokeCard
          ? <div className={cls.details}>
              <small>Last update: 1923 hours ago</small>
            </div>
          : <div className={cls.details}>
              <small>Last update: 1923 hours ago</small>
              <div>celebrity</div>
            </div>
        }
      </div>
    </div>
  )
}

