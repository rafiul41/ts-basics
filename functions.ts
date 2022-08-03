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

export const compileVsRuntimeGetName = (info: Info): string => {
  return `${info.firstName} ${info.lastName}`;
}