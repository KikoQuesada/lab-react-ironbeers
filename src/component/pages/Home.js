import React from 'react'
import BeerButton from './../buttons/BeerButton';
import logo from '../../assets/ajracsdqu5gmyfl6nai0.png'


function Home() {
    return (

        <div className="d-flex row text-center">
            <picture>
                <img className="logo" src={logo} alt="iron-hack" />
            </picture>
            <h1>Enjoy all the Ironhack Beers!</h1>
            <div className="d-flex justify-content-center">
                <BeerButton path='/beers' title="All Beers" />
                <BeerButton path="/random-beer" title="Random Beer" />
                <BeerButton path="/new-beer" title="New Beer" />
            </div>

        </div>
    )
}

export default Home;