"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.pets = [];
    }
    /**
     * @returns string `firstname lastname`
     */
    User.prototype.getFullname = function () {
        return this.firstname + " " + this.lastname;
    };
    /**
     * Add a Pet in the user's Pets list
     * @param pet Pet to add to the list
     */
    User.prototype.addPet = function (pet) {
        this.pets.push(pet);
    };
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
    User.prototype.toJSON = function () {
        return {
            "firstname": this.firstname,
            "lastname": this.lastname,
            "pets": this.pets
        };
    };
    return User;
}());
exports.default = User;
