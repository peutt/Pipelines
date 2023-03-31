import Pet from "../../src/models/Pet"
describe("Testing Pet class", () => {
  describe("Normal creation", () => {
    let cat;
    beforeAll(() => {
      cat = new Pet(0,'Donkey', 'cat', new Date())
    })
    test("should create a cat", () => {
      expect(cat).toBeInstanceOf(Pet)
    })
  })
  describe("JSON representation", () => {
    let pet;
    let json;
    beforeAll(() => {
      pet = new Pet(1,"Pastèque", "dog", new Date())
      json = pet.toJSON()
    })
    test("Generate JSON", () => {
      expect(json).toBeInstanceOf(Object)
    })
  })
})