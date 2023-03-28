/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

const Search = (props) => {
  let [searchCountry, setSearchCountry] = useState("");

  let handleChange = (e) => {
    setSearchCountry(e.target.value);
  };

  useEffect(() => {
    props.onSearch(searchCountry);
  }, [searchCountry]);

  return (
    <div>
      <input
        className="flex mx-auto outline-none border py-1 px-2 rounded-md mt-2 mb-6 justify-center"
        type="text"
        placeholder="Search Country..."
        value={searchCountry}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
