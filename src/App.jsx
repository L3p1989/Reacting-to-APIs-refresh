import React, { useState, useEffect } from "react";
import FilmCard from "./components/FilmCard";

const App = () => {
  const [isFilms, setIsFilms] = useState(false);

  const [isPeople, setIsPeople] = useState(false);

  const [films, setFilms] = useState([]);

  useEffect(() => {

    const getFilms = async () => {
      const res = await fetch("https://ghibliapi.herokuapp.com/films");
      const allFilms = await res.json();
      setFilms(allFilms);
    }

    getFilms();

  }, []);

  const renderFilms = () => {
    setIsFilms(true);
    setIsPeople(false);
  };

  const renderPeople = () => {
    setIsPeople(true);
    setIsFilms(false);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-3">
        <h1 className="text-center">
          <u>Studio Ghibli</u>
        </h1>
      </div>
      <div className="row justify-content-center mt-5">
        <button className="btn btn-primary btn-lg mr-5" onClick={renderFilms}>
          Films
        </button>
        <button className="btn btn-primary btn-lg ml-5" onClick={renderPeople}>
          People
        </button>
      </div>
      <div className="row justify-content-center mt-5">
        {isFilms ? films.map(film => {
          return <FilmCard key={`film-card-${film.id}`} title={film.title} text={film.description} />
        }) : null}
        {isPeople ? <p>People test</p> : null}
      </div>
    </div>
  );
};

export default App;