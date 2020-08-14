import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.potterapi.com/v1/houses`, {
        params: {
          key: "$2a$10$1sdw09jOfZCj0ChmG9I2g.Q1uMT30My2M/aNAqc.aV3JTyNxb4f2m"
        }
      })
      .then(response => {
        const houses = response.data;
        console.log("harry potter houses", houses);
        setHouses(houses);
      });
  }, []);

  return (
    <div className="pages">
      <h1 className="center home-title">Welcome Wizards</h1>
      <h2 className="center">Our Four Noble Houses are:</h2>
      <div className="home">
        {houses.map(houses => {
          return (
            <div className="home-list" key={houses._id}>
              <h3>{houses.name}</h3>
              <p className="capital home-para">
                Your Head of house is: {houses.headOfHouse}
              </p>
              <p> House Colors are:</p>
              <ul className="values capital">
                <li>{houses.colors[0]}</li>
                <li>{houses.colors[1]}</li>
              </ul>
              <p className="capital home-para">Your House Values:</p>
              <ul className="values">
                <li>{houses.values[0]}</li>
                <li>{houses.values[1]}</li>
                <li>{houses.values[2]}</li>
                <li>{houses.values[3]}</li>
              </ul>

              <p className="capital home-para">
                House Mascot is: {houses.mascot}
              </p>
              <p className="capital home-para">
                House Ghost is: {houses.houseGhost}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
