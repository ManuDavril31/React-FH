import { render } from "@testing-library/react";
import { App } from "../App";

describe("Pruebas en <App />", () => {
  test("debe de hacer match con el snapshot", () => {
    const title = "Soy un titulo";
    const subtitle = "Soy un subtitulo";
    render(<App title={title} subTitle={subtitle} />);
  });
});
