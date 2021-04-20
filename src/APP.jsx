import React from 'react';

const App = () => {
    return(
        <div className="container">
            <div className="row justify-content-center mt-3">
                <h1 className="text-center"><u>Studio Ghibli</u></h1>
            </div>
            <div className="row justify-content-center mt-5">
                <button className="btn btn-primary btn-lg mr-5">Films</button>
                <button className="btn btn-primary btn-lg ml-5">People</button>
            </div>
        </div>
    );
};

export default App;