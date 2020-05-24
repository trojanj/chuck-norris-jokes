import React, {useState} from 'react';
import cls from './JokeChoiceForm.module.css';

export default ({state, getRandomJoke, getCategoryJoke, getSearchJoke}) => {
  const [selectedOption, setSelectedOption] = useState('random');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [query, setQuery] = useState('');

  const handleOptionChange = event => {
    switch (event.target.value) {
      case "random":
        setSelectedOption("random");
        break;
      case "fromCategory":
        selectedCategory && setSelectedCategory('');
        setSelectedOption("fromCategory");
        break;
      case "search":
        query && setQuery('');
        setSelectedOption("search");
        break;
    }
  }

  const handleFormSubmit = event => {
    event.preventDefault()
  }

  const handleButtonSubmit = () => {
    switch (selectedOption) {
      case "random":
        getRandomJoke();
        break;
      case "fromCategory":
        selectedCategory && getCategoryJoke(selectedCategory);
        break;
      case "search":
        query && getSearchJoke(query);
        break;
    }
  }

  const handleCategoryClick = event => {
    const li = event.target.closest('li');
    const ul = document.querySelector(`.${cls.jokeCategories}`);

    if (li && ul.contains(li)) {
      if (selectedCategory && li.innerText.toLowerCase() !== selectedCategory) {
        ul.querySelector(`.${cls.active}`).classList.remove(cls.active);
      }

      if (selectedCategory && li.innerText.toLowerCase() === selectedCategory) {
        li.classList.remove(cls.active);
        setSelectedCategory('');
        return
      }
      li.classList.toggle(cls.active);
      setSelectedCategory(event.target.innerText.toLowerCase());
    }
  }

  const handleSearchChange = event => {
    setQuery(event.target.value)
  }

  const handleSearchKeyDown = event => {
    if (event.key === 'Enter' && query) {
      getSearchJoke(query);
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
        selectedOption === "fromCategory" && (
          <ul className={cls.jokeCategories} onClick={handleCategoryClick}>
            {state.categories.map((category, ind) => {
              return <li
                key={ind}
                className={cls.jokeCategory}
              >{category}</li>
            })}
          </ul>
        )
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
          value={query}
          onChange={handleSearchChange}
          onKeyDown={handleSearchKeyDown}
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
