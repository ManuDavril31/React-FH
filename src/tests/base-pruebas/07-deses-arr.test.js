import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe("archivo: 07-deses-arr", () => {
  test("Se espera que se retorne un array donde en su posición 0 sea de tipo String y en su posición 1 sea de tipo Number ", () => {
    const [letter, numbers] = retornaArreglo();

    //Aqui estamos comprobando que retorne ABC y 123
    //toBe comprueba el tipo de dato tambien
    /*
    expect(letter).toBe("ABC");
    expect(numbers).toBe("123");
    */

    /* 
    Aqui comprobamos que retorne siempre en su posicion 0 un strin y en sunposición 1 un number
    */

    //comprobamos el tipo de retorno con typeof
    expect(typeof letter).toStrictEqual(expect.any(String));
    expect(typeof numbers).toBe("number");
  });
});
