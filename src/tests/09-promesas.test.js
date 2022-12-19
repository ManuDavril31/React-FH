import { getHeroeByIdAsync } from "../base-pruebas/09-promesas";

describe("test en el archivo 09-promesas", () => {
  test("getHeroeByIdAsync Debe de retornar un heroe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      //done() Hey esperate hasta que yo como promesa, tenga una respuesta. Voy hasta el final
      done();
    });
  });

  test("getHeroeByIdAsync Debe de retornar un error si heroe no existe", (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch((err) => {
      expect(err).toBe(`No se pudo encontrar el héroe ${id}`);

      //done() Hey esperate hasta que yo como promesa, tenga una respuesta. Voy hasta el final
      done();
    });
  });
});
