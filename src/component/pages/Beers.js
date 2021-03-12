
import React from 'react';
import BeerList from './../beers/beer-list/BeerList';


function Beers() {
    return (
        <div className="container text-center">
            <h1 className="mt-5 mb-5">Beer List</h1>
            {<BeerList />}
        </div>
    );
}

export default Beers;