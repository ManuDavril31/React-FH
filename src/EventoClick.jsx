import React from "react";
import PropTypes from "prop-types";

export function EventoClick({ value }) {
  return (
    <>
      <h1>EventoClick</h1>
      <h2>{value}</h2>
      <button> + 1</button>
    </>
  );
}

EventoClick.propTypes = {
  value: PropTypes.number.isRequired,
};
