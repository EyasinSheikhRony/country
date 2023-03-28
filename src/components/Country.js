import React from "react";

const Country = (props) => {
  let { name, flags, capital, population, area } = props.country;

  let handleRemoveCountry = (name) => {
    props.removeCountry(name);
  };

  return (
    <div className="">
      <div className="p-4 shadow-lg rounded-lg w-72 mx-auto items-center text-center text-xl">
        <img
          className="items-center justify-center h-44 "
          src={flags.png}
          alt={name.common}
        />
        <h3 className="mt-2 font-bold">Name : {name.common}</h3>
        <h3 className="mt-2 font-bold">Population : {population}</h3>
        <h3 className="mt-2 font-bold">Capital : {capital}</h3>
        <h3 className="mt-2 font-bold">Area : {area}</h3>
        <button
          className="px-4 py-2 mt-2 bg-black text-white hover:bg-red-600 rounded-xl"
          onClick={() => {
            handleRemoveCountry(name.common);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Country;
