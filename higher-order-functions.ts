type MutateFunc = (numb: number) => number;

// Below function takes function as parameter
function mutateArray(
  arr: number[],
  mutateFunc: MutateFunc
): number[] {
  // return arr.map(numb => mutateFunc(numb));
  // All the arguments in the parent function gets taken by the inside function as arguments
  // So depending on the use case it is better to write like above sometimes
  // like for ['1', '2', '3'].map(parseInt) -- what is the problem?
  // Above can be written as a short form as below !!!
  return arr.map(mutateFunc);
}

console.log(mutateArray([1, 2, 3], (x) => x * 10));

// Below function returns a function
function createAdderFunc(numb: number): MutateFunc {
  return (x: number) => x + numb;
}

// Function currying
const addTwo = createAdderFunc(2);

console.log(addTwo(7));
