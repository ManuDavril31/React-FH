import { usContext } from "../../base-pruebas/06-deses-obj";

describe("06-deses-obj", () => {
  test("usContext debe de retornar un objeto", () => {
    const clave = 12315;
    const edad = 32;
    const user = usContext({ clave, edad });

    expect(user).toStrictEqual({
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    });
  });
});
