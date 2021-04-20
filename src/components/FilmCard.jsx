import React from "react";

const FilmCard = (props) => {
  return (
    <div className="col-4">
      <div className="card shadow my-2">
        <div className="card-body">
          <h5 className="card-title">
            <u>Test Title</u>
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button className="btn btn-primary">Test</button>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
