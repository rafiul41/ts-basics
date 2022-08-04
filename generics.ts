function simpleState<T>(initialState: T): [() => T, (arg: T) => void] {
  let val: T = initialState;
  return [
    () => val,
    (updatedVal) => {
      val = updatedVal;
    }
  ];
}

let [strGetter, strSetter] = simpleState('initialVal');
console.log(strGetter());
strSetter('updatedVal');
console.log(strGetter());

let [numbGetter, numbSetter] = simpleState(1);
console.log(numbGetter());
numbSetter(2);
console.log(numbGetter());

// Overriding of the generic type can be done as follows
let [getter, setter] = simpleState<string | number>('initialVal');
console.log(getter());
setter(1);
console.log(getter());

// We can make a function, class, interface etc generic and can also pass a generic while using them

// Following is an example of making an interface generic

interface Base {
  createdBy: string
}

interface Person<T> {
  name: string;
  meta: T;
}

// Type can be merged with the and keyword
// Here it means properties of both Person and Base should exist.
// Thus we can form type logics as we require with the logical operators - &, | ...
const person1: Person<string> & Base = {
  createdBy: 'admin',
  name: 'rafi',
  meta: 'meta Information'
};

console.log(person1);

interface Example {
  func1: (arg: string) => string;
}


// keyOf Keyword in TS
// extends keyof reads as --> type is a key of parentType
/**
 * 
 * @param arr - Array of items with type DataType
 * @param key - the value of this key will be plucked from array items
 * @returns - Since it will return array of the value of the specific key thus return type is DataType[keyType][]
 */
function pluck<DataType, KeyType extends keyof DataType>(
  arr: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return arr.map((items) => items[key]);
}

const dogs = [{
  name: 'mimi',
  age: 12
}, {
  name: 'BG',
  age: 11
}];

console.log(pluck(dogs, "name"));
console.log(pluck(dogs, "age"));


