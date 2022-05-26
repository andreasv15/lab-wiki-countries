import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

function CountriesList() {
    const [ countries, setCountries ] = useState(null);

    // console.log("countries: ", countries);
    // console.log("countriesArr: ", countriesArr);

    // se ejecuta cuando el componente CountriesList existe por primera vez
    useEffect(() => {
      getCountriesList();
    }, [])

    const getCountriesList = async () => {
      try {
        const response = await axios.get("https://ih-countries-api.herokuapp.com/countries");
        // console.log(response.data);
        response.data.sort((a,b) => a.name.common > b.name.common ? 1 : -1); // orden alfabetico
        setCountries(response.data);
      }
      catch(err) {
        console.log(err);
      }

    }

    if (countries === null) {
      return <h3> ... Loading </h3>
    }
  
  return (
    <div>
        <h1> Lista de países </h1>
        <ul className="list-group">
        {
          countries.map((eachCountry) => {
            return (
              <li className="list-group-item" key={eachCountry.alpha3Code}> <Link className="list-group-item" to={`/${eachCountry.alpha3Code}`}> {eachCountry.name.common} </Link> </li>
            )
          })
        }
        </ul>
    </div>
  )
}

export default CountriesList