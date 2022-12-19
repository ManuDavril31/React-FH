import { getSaludo } from "../../base-pruebas/02-template-string";

describe("Pruebas en template-string", () => {
  test('get saludo debe de retorna "Hola Manuel" ', () => {
    const name = "Manuel";
    const message = getSaludo(name);
    expect(message).toBe(`Hola ${name}`);
  });
});
