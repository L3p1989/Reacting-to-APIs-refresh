import React from "react";

const FilmCard = (props) => {
  return (
    <div className="row">
      <div className="card">
        <img src="" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">Test Title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="" className="btn btn-primary">
            Test
          </a>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;