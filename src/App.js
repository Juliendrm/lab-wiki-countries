import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Routes
import allCountries from './countries.json';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState(allCountries); // countries est le tableau d'objet du json, setCountries est la fonction qui  permet de re render sur le browser.

  useEffect(() => {
    // Here, we make the request with axios
    const config = {
      method: 'get',
      url: 'https://ih-countries-api.herokuapp.com/countries',
      headers: {},
    };

    axios(config)
      .then(function (response) {
        //console.log(JSON.stringify(response.data));
        setCountries(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countries} />
      <Routes>
        <Route
          element={
            <CountryDetails countries={countries} setCountries={setCountries} />
          }
          path="/:cca3"
        />
      </Routes>
    </div>
  );
}

export default App;
