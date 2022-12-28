"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testMakePerson = exports.makePerson = void 0;
var makePerson = function (name, age) {
    return {
        name: name,
        age: age
    };
};
exports.makePerson = makePerson;
var testMakePerson = function () {
    console.log((0, exports.makePerson)("상철", 27), (0, exports.makePerson)("이안", 33));
};
exports.testMakePerson = testMakePerson;
//# sourceMappingURL=makePerson.js.map