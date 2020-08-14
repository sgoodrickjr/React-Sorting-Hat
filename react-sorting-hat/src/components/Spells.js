import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Spell() {
  // NOTE: The value given to setState() must be of the same type as your value is expected to be
  const [spells, setSpells] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios
      .get(`https://www.potterapi.com/v1/spells`, {
        params: {
          key: "$2a$10$1sdw09jOfZCj0ChmG9I2g.Q1uMT30My2M/aNAqc.aV3JTyNxb4f2m"
        }
      })
      .then(response => {
        const data = response.data;
        const result = data.filter(character =>
          // spell is the name of the data I am tryiing to display from the given endpoint
          // try taking the .toLowerCase out for each part and see what happens when you search. You can search but doesn't find the spells as accurately.
          character.spell.toLowerCase().includes(query.toLowerCase())
        );
        setSpells(result);
      });
  }, [query]);
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div className="spells">
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
      <div className="spell">
        {spells.map(spell => {
          return (
            <div className="spell-list " key={spell._id}>
              <h2>
                <span aria-label="sparkles" role="img">
                  ✨
                </span>
                {spell.spell}
              </h2>
              <h3>Type of Spell: {spell.type}</h3>
              <h3 className="capital">{spell.effect}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
