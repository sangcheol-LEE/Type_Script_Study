"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRandomNumber = void 0;
var MAX_AGE = 100;
var makeRandomNumber = function (max) {
    if (max === void 0) { max = MAX_AGE; }
    return Math.ceil((Math.random() * max));
};
exports.makeRandomNumber = makeRandomNumber;
//# sourceMappingURL=makeRandomNumber.js.map