import JSONable from "./JSONable"
import Pet from "./Pet"

export default class User implements JSONable {
  id?: any
  firstname: string
  lastname: string
  pets: string[]
  constructor(firstname: string, lastname: string) {
    this.firstname = firstname
    this.lastname = lastname
    this.pets = []
  }

  /**
   * @returns string `firstname lastname`
   */
  getFullname(): string {
    return this.firstname+" "+this.lastname
  }

  /**
   * Add a Pet in the user's Pets list
   * @param pet Pet to add to the list
   */
  addPet(pet: string) {
    this.pets.push(pet);
  }

  /**
   * 
   * @returns a JSON representation of the current User
   * @example
   * ```json
   * {
   *    firstname: "Nicolas",
   *    lastname: "Espiau",
   *    pets: [
   *      {
   *        vetId: 100322,
   *        name: "Pastèque",
   *        kind: "dog",
   *        age: "2"
   *      }
   *    ]
   * }
   * ```*/
  toJSON(): object {
    return {
      "firstname": this.firstname,
      "lastname": this.lastname,
      "pets": this.pets
      };
  }
}