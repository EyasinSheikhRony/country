import React from "react";
import { v4 as uuidv4 } from "uuid";
import Country from "./Country";

const Countries = (props) => {
  return (
    <div>
      {props.countries.map((country) => {
        const countryNew = { country, id: uuidv4() };
        return <Country {...countryNew} key={countryNew.id} />;
      })}
    </div>
  );
};

export default Countries;
