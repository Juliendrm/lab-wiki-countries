import React from 'react';
import { Link } from 'react-router-dom';
import '../App';

const CountriesList = ({ countries }) => {
  const style = { maxHeight: '90vh', overflow: 'scroll' };
  //console.log(countries);

  if (!countries.length) return <p>loading...</p>;

  return (
    <div className="col-5" style={style}>
      <div className="list-group">
        {countries.map((element) => {
          return (
            <Link
              key={element.alpha3Code}
              className="list-group-item list-group-item-action"
              to={`/${element.alpha3Code}`}
            >
              {element.alpha2Code} : {element.name.official}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesList;
