// @ts-nocheck
import React, { useState, useEffect } from "react";
import Countries from "../src/components/Countries";
import Search from "./components/Search";

const url = "https://restcountries.com/v3.1/all";

const App = () => {
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filterCountry, setFilterCountry] = useState(countries);

  const fatchData = async (url) => {
    setLoding(true);
    try {
      const data = await (await fetch(url)).json();
      setCountries(data);
      setFilterCountry(data);
      setLoding(false);
      setError(null);
    } catch (error) {
      setLoding(false);
      setError(error);
    }
  };

  useEffect(() => {
    fatchData(url);
  }, []);

  let handleRemoveCountry = (name) => {
    let filter = filterCountry.filter(
      (country) => country.name.common !== name
    );
    setFilterCountry(filter);
  };

  let handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    let newCountries = countries.filter((country) => {
      let countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setFilterCountry(newCountries);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }} className="font-bold text-lg">
        Country App
      </h1>
      <Search onSearch={handleSearch} />
      {loding && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {countries && (
        <Countries
          countries={filterCountry}
          removeCountry={handleRemoveCountry}
        />
      )}
    </div>
  );
};

export default App;
