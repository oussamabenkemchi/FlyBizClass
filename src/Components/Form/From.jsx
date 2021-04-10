import React from "react";
import Select from "react-dropdown-select";

import { options } from "./options";
function From() {
  return (
    <form className="form">
      <div className="form__firstRow">
        <div className="firstRow__radio">
          <h3>Choose a way</h3>
          <div className="radiobuttons">
            <input type="radio" id="outward" name="trip" value="male" />
            <label for="outward">Outward</label>
            <input type="radio" id="roundTrip" name="trip" value="female" />
            <label for="roundTrtip">Round Trip</label>
          </div>
        </div>

        <Select
          options={options}
          values={["algiers", "paris", "beijing"]}
          onChange={(value) => console.log(value)}
        />
        <div className="firstRow__outRoute">
          <label for="cars">Outward route</label>
          <select id="outwardRoute" name="outwardRoute">
            <option value="algiers">Algiers</option>
            <option value="paris">Paris</option>
            <option value="beijing">Beijing</option>
            <option value="ouagadougou">Ouagadougou</option>
          </select>
        </div>
        <div className="firstRow__returnRoute">
          <label for="cars">Return route</label>
          <select id="returndRoute" name="returnRoute">
            <option value="algiers">Algiers</option>
            <option value="paris">Paris</option>
            <option value="beijing">Beijing</option>
            <option value="ouagadougou">Ouagadougou</option>
          </select>
        </div>
        <div className="depDate">
          <label for="departure">Departure Date</label>

          <input
            type="date"
            id="departure"
            name="departureDate"
            value="2018-07-22"
          />
        </div>
        <div className="returnDate">
          <label for="return">Departure Date</label>

          <input type="date" id="return" name="returnDate" value="2018-07-22" />
        </div>
      </div>
      <div className="form__secondRow"></div>
      <div className="form__ThirdRow"></div>
    </form>
  );
}

export default From;
