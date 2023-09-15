import React from "react";

const HouseDisplay = ({ houses }) => {
  return (
    <div>
      {houses.map((house, index) => {
        return (
          <div key={house.address + index}>
            <h2>{house.name}</h2>
            <p>{house.address}</p>
            <p>${house.price}</p>
            <p>{house.isSold.toString()}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HouseDisplay;
