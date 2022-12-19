import React from "react";
import ReactDOM from "react-dom/client";
// import { EventoClick } from "./EventoClick";
// import { App } from "./App";
import { CounterApp } from "./CounterApp";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App title="PropTypes" subTitle="Soy un subtitulo" /> */}
    <CounterApp value={12358} />
    {/* <EventoClick value={20} /> */}
  </React.StrictMode>
);
