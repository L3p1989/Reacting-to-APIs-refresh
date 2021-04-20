import React from "react";

const FilmCard = props => {
    return (
        <div className="col-4">
            <div className="card shadow my-2">
                <div className="card-body">
                    <h5 className="card-title"><u>{props.title}</u></h5>
                    <p className="card-text">{props.text}</p>
                </div>
            </div>
        </div>
    );
};

export default FilmCard;
