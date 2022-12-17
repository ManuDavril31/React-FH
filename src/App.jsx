import React from "react";
import PropTypes from "prop-types";

export function App({ title, subTitle }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </>
  );
}

App.propTypes = {
  //isRequired tipo requerido
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};
