describe("Pruebas en <DemoTest />", () => {
  test("Esta pruba no debe de falla", () => {
    //AAA
    //1. INICIALIZACION
    const message1 = "Hola mundo";

    //2. ESTÍMULO
    const message2 = message1.trim();

    //3. OBSERVAR EL COMPORTAMIENTO ... ESPERADO
    //este código nos dice que si menssage 1 es igual a message2
    expect(message1).toBe(message2);
  });
});
