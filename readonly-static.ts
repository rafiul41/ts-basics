// class dog {
//   public name: string = 'defaultName';
//   public age: number = 'defaultName';
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// A more simpler and newer approach for the above way is below
// The fields are instantiated in the constructor
class Dog {
  // while defining property of classes in constructor access modifier must be given
  constructor(public readonly name: string, public age: number) {}
}

let shena = new Dog('Shena', 12);

// Cannot do the below as name is readonly
// Thus after instantiation this field cannot be changed
// shena.name = 'hello';

// Lets say we want a singleton dog list in our system
class DogList {
  private dogs: Dog[] = [];
  // Making the instance static because it is the property of the class/ template not the instance
  static instance: DogList = new DogList();

  // Making the constructor private because no one can create a new dog list instance
  private constructor() {}

  // We can access dogs property in 2 ways like below
  // Way 1 -- using this keyword
  public getDogs() {
    return this.dogs;
  }

  // Way 2 -- Using the instance of the Class itself
  static addDogs(dog: Dog) {
    // There can be no this keyword in static methods
    // as this can be accessed from anywhere
    DogList.instance.dogs.push(dog);
  }
}

const toAdd = new Dog('hello', 12);
// No need to create an instance of the class for calling static methods
// static methods can be called directly from the class like below.
DogList.addDogs(toAdd);

// the following non-static method is used from the initially created instance
console.log(DogList.instance.getDogs());
