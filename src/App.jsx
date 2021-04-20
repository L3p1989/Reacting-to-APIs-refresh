import React, { useState, useEffect } from "react";
import FilmCard from "./components/FilmCard";
import PeopleCard from "./components/PeopleCard";

const App = () => {
  const [isFilms, setIsFilms] = useState(false);

  const [isPeople, setIsPeople] = useState(false);

  const [films, setFilms] = useState([]);

  const [people, setPeople] = useState([]);

  useEffect(() => {

    const getFilms = async () => {
      const res = await fetch("https://ghibliapi.herokuapp.com/films");
      const allFilms = await res.json();
      setFilms(allFilms);
    }

    getFilms();

    const getPeople = async () => {
      const res = await fetch("https://ghibliapi.herokuapp.com/people");
      const allPeople = await res.json();
      setPeople(allPeople);
    }

    getPeople();

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
          return <FilmCard key={film.id} title={film.title} text={film.description} />
        }) : null}
        {isPeople ? people.map(person => {
          return <PeopleCard key={person.id} name={person.name} gender={person.gender} age={person.age} eye={person.eye_color} hair={person.hair_color} id={person.id} />
        }) : null}
      </div>
    </div>
  );
};

export default App;