import React from 'react';
import cls from './App.module.css';
import ChooseJoke from './components/JokeChoice/JokeChoice';
import JokeCard from './components/JokeCard/JokeCard';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <>
      <main className={cls.main}>
        <div className={cls.wrapper}>
          <p className={cls.taskLabel}>MSI 2020</p>
          <section className={cls.chooseJokeSection}>
            <h1 className={cls.title}>Hey!</h1>
            <h2 className={cls.subtitle}>Let’s try to find a joke for you:</h2>
            <ChooseJoke />
          </section>
          <section className="jokeCardsSection">
            <JokeCard />
          </section>
        </div>
      </main>
      <Sidebar />
    </>
  );
}

export default App;
