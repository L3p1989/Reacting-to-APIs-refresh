import React, { useState } from "react";
import FilmCard from "./components/FilmCard";

const App = () => {
  const [isFilm, setIsFilm] = useState(false);

  const [isPeople, setIsPeople] = useState(false);

  const renderFilms = () => {
    setIsFilm(true);
    setIsPeople(false);
  };

  const renderPeople = () => {
    setIsPeople(true);
    setIsFilm(false);
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
        {isFilm ? <FilmCard /> : null}
        {isPeople ? <p>People test</p> : null}
      </div>
    </div>
  );
};

export default App;
