import React, {useContext, useState} from 'react';
import cls from './JokeChoiceForm.module.css';
import {AppContext} from '../../context/AppContext';

export default () => {
  const [selectedOption, setSelectedOption] = useState('random');

  const {getRandomJoke} = useContext(AppContext);

  const handleOptionChange = event => {
    switch (event.target.value) {
      case "random":
        setSelectedOption("random");
        break;
      case "fromCategory":
        setSelectedOption("fromCategory");
        break;
      case "search":
        setSelectedOption("search");
        break;
    }
  }

  const handleFormSubmit = event => {
    event.preventDefault()
  }

  const handleButtonSubmit = async () => {
    switch (selectedOption) {
      case "random":
        getRandomJoke();
        break;
      // case "fromCategory":
      //   const categoryJoke = await axios.get(`/jokes/random?category=${category}`);
      //   break;
      // case "search":
      //   const searchJokes = await axios.get(`https://api.chucknorris.io/jokes/search?query=${query}`);
      //   break;
    }
  }

  return (
    <form className={cls.JokeChoiceForm} onSubmit={handleFormSubmit}>
      <label>
        <input
          type="radio"
          name="jokeChoice"
          value="random"
          checked={selectedOption === "random"}
          onChange={handleOptionChange}
        />
        <span className={cls.design}></span>
        <span>Random</span>
      </label>
      <label>
        <input
          type="radio"
          name="jokeChoice"
          value="fromCategory"
          checked={selectedOption === "fromCategory"}
          onChange={handleOptionChange}
        />
        <span className={cls.design}></span>
        <span>From categories</span>
      </label>
      {
        selectedOption === "fromCategory" && <ul className={cls.jokeCategories}>
          <li className={cls.jokeCategory}>animal</li>
          <li className={cls.jokeCategory}>career</li>
          <li className={cls.jokeCategory}>celebrity</li>
          <li className={cls.jokeCategory}>dev</li>
        </ul>
      }
      <label>
        <input
          type="radio"
          name="jokeChoice"
          value="search"
          checked={selectedOption === "search"}
          onChange={handleOptionChange}
        />
        <span className={cls.design}></span>
        <span>Search</span>
      </label>
      {
        selectedOption === "search" && <input
          type="search"
          placeholder="Free text search..."
          className={cls.search}
        />
      }
      <button
        className={cls.btn}
        type="submit"
        onClick={handleButtonSubmit}
      >Get a joke</button>
    </form>
  )
}
