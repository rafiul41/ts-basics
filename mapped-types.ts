// This type indicates that there must be a name property
// And there can be flexible properties where the key is string
// and the key value is string or number
type FlexibleDogInfo = {
  name: string;
  [key: string]: string | number;
};

const dogInfo: FlexibleDogInfo = {
  name: 'Mini',
  age: 12,
  breed: 'mutt'
};

// This Listener Type takes T as a generic and makes all the properties optional and type to a function
// Template literal is used to change the property names
type ListenerType<T> = {
  [property in keyof T as `on${Capitalize<string & property>}Change`]?: (
    value: string
  ) => void;
};

function listenToObjectProperties<T>(obj: T, listeners: ListenerType<T>) {
  throw 'Needs to be implemented';
}

interface DogInfo {
  name: string;
  age: number;
}

// As we know from above ListenerType takes T as generic type and turns its property into functions
// Hover on the type below and see it in action !!
type DogInfoListeners = ListenerType<DogInfo>;

// Aso VSCode will also give suggestions when writing the function name
// start typing 'on' after the comma on a new line to see it in action
listenToObjectProperties(dogInfo, {
  onAgeChange: (newVal: string) => {},
});
