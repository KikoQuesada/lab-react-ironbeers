import React from 'react';


function Beer({ id, image_url, name, tagline, description, contributed_by }) {
    return (
        <div className="beerCard">
            <div className="inner-card">
                <div className="img-wrapper">
                    <img className="w-25" src={image_url} alt={name} />
                </div>
                <div className="content">
                    <h2>{name}</h2>
                    <h5>{tagline}</h5>
                    <em>by {contributed_by}</em>
                </div>
                <div className="btn-wrapper">
                    <button className="view-btn mt-3">View</button>
                </div>
            </div>
        </div>
    );
}

export default Beer;