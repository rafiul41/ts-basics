const {compileVsRuntimeGetName} = require('./functions');

console.log(compileVsRuntimeGetName({firstName: 'Rafiul', lastName: 'Islam'}));
console.log(compileVsRuntimeGetName());
