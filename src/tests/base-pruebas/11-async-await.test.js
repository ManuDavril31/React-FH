import { getImagen } from "../../base-pruebas/11-async-await";

describe("test archivo 11-async-await", () => {
  test("getImagen debe retornar URL de la imagen", async () => {
    const url = await getImagen();

    // expect(url).toBe("string");
  });
});
