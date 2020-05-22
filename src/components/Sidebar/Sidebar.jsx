import React from 'react';
import JokeCard from '../JokeCard/JokeCard';
import cls from './Sidebar.module.css';

export default () => {
  return (
    <aside className={cls.Sidebar}>
      <h3>Favourite</h3>
      <JokeCard sidebarJokeCard/>
    </aside>
  )
}
