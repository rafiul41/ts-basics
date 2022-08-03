"use strict";
exports.__esModule = true;
exports.compileVsRuntimeGetName = exports.takeMultipleParametersAsArray = exports.addStrings = void 0;
function addNumber(a, b) {
    return a + b;
}
// Below is the syntax for exporting in TS
// Not like module.exports = {} as in Node JS
exports["default"] = addNumber;
// Other than default export we can also export like this
var addStrings = function (a, b) {
    return a + b;
};
exports.addStrings = addStrings;
// the parameter is called rest parameter as it takes multiple strings and forms them into a single array
var takeMultipleParametersAsArray = function () {
    var parameters = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parameters[_i] = arguments[_i];
    }
    console.log(parameters);
};
exports.takeMultipleParametersAsArray = takeMultipleParametersAsArray;
var compileVsRuntimeGetName = function (info) {
    return "".concat(info.firstName, " ").concat(info.lastName);
};
exports.compileVsRuntimeGetName = compileVsRuntimeGetName;
