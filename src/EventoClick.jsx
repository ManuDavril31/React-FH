import React, { useState } from "react";
import PropTypes from "prop-types";

export function EventoClick({ value }) {
  const [counter, setCounter] = useState(value);

  const handleAdd = (e) => {
    // setCounter(counter + 1);
    setCounter((c) => c + 1);
  };

  const handleSubstract = () => {
    setCounter((c) => c - 1);
  };

  const handleReset = () => {
    setCounter(value);
  };
  return (
    <>
      <h1>EventoClick</h1>
      <h2> {counter} </h2>
      <button onClick={handleAdd}> + 1 </button>
      <button onClick={handleSubstract}> - 1 </button>
      <button onClick={handleReset}> Reset </button>
    </>
  );
}

EventoClick.propTypes = {
  value: PropTypes.number.isRequired,
};
