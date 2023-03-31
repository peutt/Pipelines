import JSONable from "./JSONable"

export default class Pet implements JSONable {
  id?: any
  vetId: Number
  name: string
  kind: string
  birthDate: Date
  constructor(vetId: Number, name: string, kind: string, birthDate: Date) {
    this.vetId = vetId
    this.name = name
    this.kind = kind || ""
    this.birthDate = birthDate
  }

  /**
   * @returns Number the current pet's age calculated from its birthDate
   */
  getAge(): number {
    const today = new Date();
    let age = today.getFullYear() - this.birthDate.getFullYear();
    const m = today.getMonth() - this.birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < this.birthDate.getDate())) {
      age--;
    }

    return age;
  }

  /**
   * @returns string `name (vetId): kind, age`
   * @example "Pastèque (123456): dog, 2"
   */
  describe(): string {
    return this.name+" ("+this.vetId+"): "+this.kind+", "+this.getAge()
  }

  /**
   * 
   * @returns a JSON representation of the current Pet
   * @example
   * ```json
   * {
   *    name: "Pastèque",
   *    kind: "dog",
   *    age: 2
   * }
   * ```
   */toJSON(): Object {
    return {
      "name": this.name,
      "kind": this.kind,
      "age": this.getAge()
      };
  }
}