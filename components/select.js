import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loadData } from "../actions";

export default ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0].value);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setSelectedOption(e.target.value);
    dispatch(loadData(e.target.value));
  };
  return (
    <select value={selectedOption} onChange={changeHandler}>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
};
