function addNumber(a: number, b: number): number {
  return a + b;
}

// Below is the syntax for exporting in TS
// Not like module.exports = {} as in Node JS
export default addNumber;

// Other than default export we can also export like this
export const addStrings = (a: string, b: string): string => {
  return a + b;
};

// the parameter is called rest parameter as it takes multiple strings and forms them into a single array
export const takeMultipleParametersAsArray = (...parameters: string[]) => {
  console.log(parameters);
}

interface Info {
  firstName: string;
  lastName: string;
}

// Below code will not work when undefined is sent as argument after converting it to JS 
// as during runtime typechecking is done and error shown as undefined
export const compileVsRuntimeGetName = (info: Info): string => {
  return `${info.firstName} ${info.lastName}`;
}


// The undefined case is handled below 
export const compileVsRuntimeGetNameMoreChecking = (info: Info): string => {
  return `${info?.firstName ?? 'firstName'} ${info?.lastName ?? 'lastName'}`;
}