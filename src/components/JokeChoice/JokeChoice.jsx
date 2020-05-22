import React from 'react';
import cls from './JokeChoice.module.css';

export default () => {
  return (
    <div className={cls.JokeChoice}>
      <label>
        <input type="radio" name="jokeChoice" />
        <span className={cls.design}></span>
        <span>Random</span>
      </label>
      <label>
        <input type="radio" name="jokeChoice" />
        <span className={cls.design}></span>
        <span>From categories</span>
      </label>
      <ul className={cls.jokeCategories}>
        <li className={cls.jokeCategory}>animal</li>
        <li className={cls.jokeCategory}>career</li>
        <li className={cls.jokeCategory}>celebrity</li>
        <li className={cls.jokeCategory}>dev</li>
      </ul>
      <label>
        <input type="radio" name="jokeChoice" />
        <span className={cls.design}></span>
        <span>Search</span>
      </label>
      <input type="search" placeholder="Free text search..." className={cls.search} />
      <button className={cls.btn}>Get a joke</button>
    </div>
  )
}
