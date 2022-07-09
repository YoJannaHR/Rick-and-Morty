import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Location = ({ location, searchValue, searchLocation,setSearchValue }) => {
  return (
    <div >
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={searchLocation}>Search</button>
      <div className="head">
      <h2> Type: {location?.type}</h2>
      <h2> Name: {location?.name}</h2>
      <h2> Dimension: {location?.dimension}</h2>
      <h2>Residentes: {location?.residents?.length}</h2>
      </div>

    </div>
  );
};

export default Location;
