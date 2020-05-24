import React, {useContext, useState} from 'react';
import cls from './App.module.css';
import JokeChoiceForm from './components/JokeChoiceForm/JokeChoiceForm';
import JokeCard from './components/JokeCard/JokeCard';
import Sidebar from './components/Sidebar/Sidebar';
import {AppContext} from './context/app/AppContext';
import Loader from './components/UI/Loader/Loader';
import menuIcon from './icons/menu-icon.svg';
import closeMenuIcon from './icons/close-menu-icon.svg';

const App = () => {
  const {
    state,
    getRandomJoke,
    getCategoryJoke,
    getSearchJoke,
    addFavouriteJoke,
    removeFavouriteJoke
  } = useContext(AppContext);
  const jokes = state.jokes;

  const [showFavourite, setShowFavourite] = useState(false);
  const srcIcon = showFavourite ? closeMenuIcon : menuIcon;

  const handleFavouriteClick = () => {
    setShowFavourite(prevState => !prevState)
  }

  return (
    <div className={cls.App}>
      <main className={cls.main}>
        <div className={cls.wrapper}>
          <p className={cls.task}>MSI 2020</p>
          <div className={cls.favourite} onClick={handleFavouriteClick}>
              <span>
                <img src={srcIcon} alt="Menu"/>
              </span>
            <h3>Favourite</h3>
          </div>
          <section className={cls.JokeChoiceSection}>
            <h1 className={cls.title}>Hey!</h1>
            <h2 className={cls.subtitle}>Let’s try to find a joke for you:</h2>
            <JokeChoiceForm
              state={state}
              getRandomJoke={getRandomJoke}
              getCategoryJoke={getCategoryJoke}
              getSearchJoke={getSearchJoke}
            />
          </section>
          <section className={cls.jokeCardsSection}>
            {state.loading && <div className={cls.alignCenter}><Loader/></div>}
            {jokes.slice().reverse().slice(0, 20).map(joke => (
              <JokeCard
                key={joke.id}
                state={state}
                joke={joke}
                addFavouriteJoke={addFavouriteJoke}
                removeFavouriteJoke={removeFavouriteJoke}/>
            ))}
          </section>
        </div>
      </main>
      <Sidebar
        state={state}
        addFavouriteJoke={addFavouriteJoke}
        removeFavouriteJoke={removeFavouriteJoke}
        showFavourite={showFavourite}
        handleFavouriteClick={handleFavouriteClick}
      />
    </div>
  );
}

export default App;
