import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function CountryDetails() {

  const { alpha3Code } = useParams();

  //console.log("code: ", alpha3Code);
  const [ countryDetail, setCountryDetail ] = useState(null);
  const [ flagCountry, setFlagCountry ] = useState(null);


  useEffect(() => {
    getDetails();

  }, [countryDetail])

  
  // useEffect(() => {
  //   getFlag();

  // }, [flagCountry])

  const getFlag = async () => {
    try {
      //console.log(responseFlag.config.url)
    }
    catch(err) {
      console.log(err)
    }
  }

  const getDetails = async () => {
    try {
      const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`);
      const responseFlag = await axios.get(`https://countryflagsapi.com/png/${alpha3Code}`); 
      setFlagCountry(responseFlag.config.url);

      //console.log(response.data);
      setCountryDetail(response.data);

    }
    catch(err) {
      console.log(err);
    }
  }
  if (countryDetail === null) {
    return <h3> ... Loading </h3>
  }

  return (
    <div>
      <img src={flagCountry} alt="image" />
      <h1> {countryDetail.name.common}</h1>
      <table class="table">
        <tr> 
          <td> Capital </td> 
          <td> {countryDetail.capital} </td>
        </tr>
        <tr> 
          <td> Area </td>
          <td> {countryDetail.area} km<sup>2</sup> </td>
        </tr>
        <tr> 
          <td> Borders </td>
          <td>
          {countryDetail.borders.map((eachBorder) => {

            return <li key={eachBorder}> <Link to={`/${eachBorder}`}> { eachBorder } </Link> </li>;
          })}
          </td>
        </tr>
        <tr> 
        </tr>

      </table>


    </div>
  )
}

export default CountryDetails