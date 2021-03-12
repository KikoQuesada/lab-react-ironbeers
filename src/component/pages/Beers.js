
import React from 'react';
import BeerList from './../beers/beer-list/BeerList';
import Navbar from '../../component/navbar/Navbar';


function Beers() {
    return (
        <div>
            <Navbar />
            <div className="container text-center">
                <h1 className="mt-5 mb-5">Beer List</h1>
                {<BeerList />}
            </div>
        </div>

    );
}

export default Beers;