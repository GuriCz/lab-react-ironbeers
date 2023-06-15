import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

function BeersDetails() {
  const { beerID } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${beerID}`
        );
        setBeer(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBeer();
  }, [beerID]);

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <Navbar/>
    <div className='card'>
      <img src={beer.image_url} alt={beer.name} className='card-img'/>
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>First Brewed: {beer.first_brewed}</p>
      <p>Description: {beer.description}</p>
      <p>Attenuation Level: {beer.attenuation_level}</p>
      <p>Brewers Tips: {beer.brewers_tips}</p>
      <p>Contributed By: {beer.contributed_by}</p>
    </div>
    </div>
  );
}

export default BeersDetails;