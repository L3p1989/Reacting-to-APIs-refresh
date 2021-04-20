import React from 'react';

const PeopleCard = props => {
    return (
        <div className="col-4">
            <div className="card shadow my-2">
                <h5 className="card-title">Name: {props.name}</h5>
                <p className="card-text">Gender: {props.gender}</p>
                <p className="card-text">Age: {props.age}</p>
                <p className="card-text">Eye Color: {props.eye}</p>
                <p className="card-text">Hair Color: {props.hair}</p>
                <a href={`https://ghibliapi.herokuapp.com/people/${props.id}`} target="_blank" rel="noreferrer noopener" className="btn btn-primary">More info</a>
            </div>
        </div>
    );
};

export default PeopleCard;