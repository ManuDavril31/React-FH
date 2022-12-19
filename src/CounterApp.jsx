import React from "react";
import PropTypes from "prop-types";
import { getImagen } from "./base-pruebas/11-async-await";

export function CounterApp({ value }) {
  getImagen();

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
