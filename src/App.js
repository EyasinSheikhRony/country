import React, { useState, useEffect } from "react";
import Countries from "../src/components/Countries";

const url = "https://restcountries.com/v3.1/all";

const App = () => {
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);

  const fatchData = async (url) => {
    setLoding(true);
    try {
      const data = await (await fetch(url)).json();
      setCountries(data);
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

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Country App</h1>
      {loding && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2> }
      {countries && <Countries countries={countries} />}
    </div>
  );
};

export default App;
