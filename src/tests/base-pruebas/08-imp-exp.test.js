import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe("Testeando el archivo 08-imp-exp", () => {
  test("Esperando que retorne un heroe si le pasamos un id valido", () => {
    const id = 1;
    const hero = getHeroeById(id);
    console.log(hero);
    //toEqual o toStrictEqual  por que estoy evaluando un objeto
    expect(hero).toEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });
  });

  test("Esperando que si le envio un id no valido retorne un undefine", () => {
    const id = 100;
    const hero = getHeroeById(id);

    //puede ser asi, que retorne un undefine
    expect(hero).toBe(undefined);
    //también asi
    expect(hero).toBeFalsy(); //toBeFalsy() que retorne un valo null,  es una forma de evaluar que sea falso, undefined o null
  });

  test("eperando que la funcion getHeroesByOwner() retorne un arreglo de largo 3 con los héroes de DC", () => {
    const owner = "DC";
    const heros = getHeroesByOwner(owner);
    expect(heros).toEqual(getHeroesByOwner(owner));
    expect(heros.length).toBe(3);
  });

  test("esperando que retorn un arreglo con los héroes de Malvel y largo 2", () => {
    const owner = "Marvel";
    const heros = getHeroesByOwner(owner);
    expect(heros).toEqual(getHeroesByOwner(owner));
    expect(heros.length).toBe(2);
  });
});
