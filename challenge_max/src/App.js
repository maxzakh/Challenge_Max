import * as React from 'react';

import countries from './data/countries.json';
import cnProvinces from './data/cnProvinces.json';
import usStates from './data/usStates.json';
import mxStates from './data/mxStates.json';
import locations from './data/locations.json';


const App = () => {
  const [value, setValue] = React.useState('state');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Dropdown
        label="Drop down for states"
        onChange={handleChange}
      />

      <p>the selected state is {value}</p>
    </div>
  );
};

const Dropdown = ({ label, value, onChange }) => {
  return (
    <div>
      <div>
        <label>
          {label}
          <select value={value} onChange={onChange}>
            {countries.map((option) => (
              <option value={option.NAME}>{option.NAME}</option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <label>
          {label}
          <select value={value} onChange={onChange}>
            {cnProvinces.map((option) => (
              <option value={option.ABBR}>{option.ABBR}</option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <label>
          {label}
          <select value={value} onChange={onChange}>
            {usStates.map((option) => (
              <option value={option.ABBR}>{option.ABBR}</option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <label>
          {label}
          <select value={value} onChange={onChange}>
            {mxStates.map((option) => (
              <option value={option.ABBR}>{option.ABBR}</option>
            ))}
          </select>
        </label>
      </div>

      <div>
        {locations.map((option) => (
          <option value={option.openCloseTimes}>{option.openCloseTimes.map((option) =>
            <option>{option.dayOfWeek}{option.openTime} - {option.closeTime}</option>
          )}</option>
        ))}
      </div>
    </div>
  );
};

export default App;