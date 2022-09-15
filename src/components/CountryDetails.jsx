import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryDetails = ({ countries, setCountries }) => {
  //Destructuration dans les parametres pour ne pas utiliser props et raccourcir le code.
  const styleCapital = { width: '30%' };

  let { cca3 } = useParams();

  const country = countries.find((element) => element.alpha3Code === cca3);
  const borders = (name) => {
    if (country.borders.length === 0) {
      return <li>No Borders</li>;
    } else {
      return country.borders.map((element) => {
        return (
          <li>
            <Link key={country} to={'/' + element}>
              {
                countries.find((border) => border.alpha3Code === element).name
                  .common
              }
            </Link>
          </li>
        );
      });
    }
  };

  //console.log(countries);
  const oneCountry = countries.find((element) => element.alpha3Code === cca3);
  //console.log(oneCountry);
  return (
    <div className="col-7">
      <h1>{oneCountry.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={styleCapital}>Capital</td>
            <td>{oneCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {oneCountry.area}km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>{borders(country.name.common)}</ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
