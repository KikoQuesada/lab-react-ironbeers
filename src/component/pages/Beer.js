import React from 'react';
import Navbar from '../../component/navbar/Navbar';
import BeerDetail from '../beers/beer-detail/BeerDetail';




function Beer({ match }) {
    const beerId = match.params.id;
    return (
        <div>
            <Navbar />
            <div className="container">
                <BeerDetail id={beerId} />
            </div>
        </div>
    );
}

export default Beer;