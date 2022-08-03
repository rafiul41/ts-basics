import addNumber, { addStrings, takeMultipleParametersAsArray, compileVsRuntimeGetName } from './functions';

console.log(addStrings('hello ', 'world'));
console.log(addNumber(3, 1));
takeMultipleParametersAsArray('hello', 'world');
compileVsRuntimeGetName({firstName: 'Rafiul', lastName: 'Islam'});
