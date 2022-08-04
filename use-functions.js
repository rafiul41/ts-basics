const {compileVsRuntimeGetName, compileVsRuntimeGetNameMoreChecking} = require('./functions');

console.log(compileVsRuntimeGetName({firstName: 'Rafiul', lastName: 'Islam'}));
// console.log(compileVsRuntimeGetName());

console.log(compileVsRuntimeGetNameMoreChecking());
