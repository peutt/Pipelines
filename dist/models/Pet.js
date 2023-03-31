"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pet = /** @class */ (function () {
    function Pet(vetId, name, kind, birthDate) {
        this.vetId = vetId;
        this.name = name;
        this.kind = kind || "";
        this.birthDate = birthDate;
    }
    /**
     * @returns Number the current pet's age calculated from its birthDate
     */
    Pet.prototype.getAge = function () {
        var today = new Date();
        var age = today.getFullYear() - this.birthDate.getFullYear();
        var m = today.getMonth() - this.birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < this.birthDate.getDate())) {
            age--;
        }
        return age;
    };
    /**
     * @returns string `name (vetId): kind, age`
     * @example "Pastèque (123456): dog, 2"
     */
    Pet.prototype.describe = function () {
        return this.name + " (" + this.vetId + "): " + this.kind + ", " + this.getAge();
    };
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
     */ Pet.prototype.toJSON = function () {
        return {
            "name": this.name,
            "kind": this.kind,
            "age": this.getAge()
        };
    };
    return Pet;
}());
exports.default = Pet;
