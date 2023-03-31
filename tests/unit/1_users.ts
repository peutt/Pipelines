import Pet from "../../src/models/Pet"
import User from "../../src/models/User"
import '@types/jest';
describe("Testing User class", () => {
  describe("Normal creation", () => function(){
    let user;
    beforeAll(() => {
      user = new User('John', 'Hammond')
    })
    test("should create a user", () => {
      expect(user).toBeInstanceOf(User)
    })
  })
  describe("Add/Get Pet", () => {
    let user;
    let pasteque;
    beforeAll(() => {
      user = new User('John', 'Hammond')
      pasteque = new Pet(0,"Pastèque", "dog", new Date())
    })
    describe("Add Pet", () => {
      beforeAll(() => {
        user.addPet(pasteque)
      })
      test("should add a pet", () => {
        expect(user.pets).toHaveLength(1)
      })
    })
  })
  describe("JSON representation", () => {
    test("WRITE ME", () => {
      expect(true).toBe(true)
    })
  })
})
