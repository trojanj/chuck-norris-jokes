import React, {useContext} from 'react';
import cls from './App.module.css';
import JokeChoiceForm from './components/JokeChoiceForm/JokeChoiceForm';
import JokeCard from './components/JokeCard/JokeCard';
import Sidebar from './components/Sidebar/Sidebar';
import {AppContext} from './context/app/AppContext';
import Loader from './components/UI/Loader';

const App = () => {
  const {state} = useContext(AppContext);
  const jokes = state.jokes;

  return (
    <>
      <main className={cls.main}>
        <div className={cls.wrapper}>
          <p className={cls.task}>MSI 2020</p>
          <section className={cls.JokeChoiceSection}>
            <h1 className={cls.title}>Hey!</h1>
            <h2 className={cls.subtitle}>Let’s try to find a joke for you:</h2>
            <JokeChoiceForm/>
          </section>
          <section className={cls.jokeCardsSection}>
            {state.loading && <div className={cls.alignCenter}><Loader/></div>}
            {jokes.slice().reverse().slice(0, 20).map(joke => (
              <JokeCard key={joke.id} joke={joke}/>
            ))}
          </section>
        </div>
      </main>
      <Sidebar />
    </>
  );
}

export default App;
