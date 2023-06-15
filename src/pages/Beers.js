import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from "react"     
import axios from "axios"
import { Link } from 'react-router-dom';
    

function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(() =>{
    axios
    .get("https://ih-beers-api2.herokuapp.com/beers")
    .then((response) =>{
      console.log(response);
      setBeers(response.data)
    });
  }, []);
  return (
    <div>
        <Navbar />
        <h1>BEEEEEEEEEEEEEEEEEEERS</h1>
        {beers.map((beers)=>(
        <div key={beers._id} className='card'>
        <h3>{beers.name}</h3>
        <img src={beers.image_url} className='card-img' alt="normal drink" />
        <p>{beers.tagline}</p>
        <p>lil description:{beers.description}</p>
        <p>{beers.contributed_by}</p>
        <Link to={`/beers/${beers._id}`}>Show me the deets</Link>
        </div>
        ))}
    </div>
  )
}

export default Beers