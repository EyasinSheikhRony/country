import React from "react";
import { v4 as uuidv4 } from "uuid";
import Country from "./Country";
// @ts-ignore
import style from "./countries.module.css";

const Countries = (props) => {
  return (
    <div className={style.countries}>
      {props.countries.map((country) => {
        const countryNew = { country, id: uuidv4() };
        return (
          <Country
            {...countryNew}
            key={countryNew.id}
            removeCountry={props.removeCountry}
          />
        );
      })}
    </div>
  );
};

export default Countries;
