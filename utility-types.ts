// RECORD
const ids: Record<number, string> = {
  10: 'rafi',
  11: 'ifti'
};

// Below cannot be done since the ids object is inferred to have only 10 and 11 keys
// for storing record we need to add the Record type
// The following will only work if record type is added 

ids[13] = 'random';

console.log(ids);

// PARTIAL
interface User {
  id: string;
  name: string;
  email?: string;
}

// Here all the properties in User will be optional but 
// The main advantage is that if we add a new property in User 
// It will automatically be added to the UserOptionals
type UserOptionals = Partial<User>;

// REQUIRED
// In User, email was optional but the Required utility type made it required
type RequiredUser = Required<User>;

// PICK
// Only picks the given properties and persists the optionality of the property as well
type UserNameAndEmail = Pick<User, 'name' | 'email'>

// OMIT
// Opposite of pick
type UserId = Omit<User, 'name' | 'email'>

const merge = (user: User, overrides: UserOptionals): User => {
  return {
    ...user,
    ...overrides
  }
}

console.log(merge({id: 'hello', name: 'world', email: '!'}, {email: 'hello@world.com'}));

// ** TYPE FROM FIELDS
// Lets say we want to map all the user to their ids
// For that the type of the map will be Record<string, User>

const users: User[] = [{
  id: 'hello',
  name: 'world'
}];

// But if type of id changes to number then the above record type is invalid
// Thus the following
type UserMap = Record<User['id'], Omit<User, 'id'>>;

const mapId = (users: User[]): UserMap => {
  return users.reduce((preRes: UserMap, curr: User) => {
    const {id, ...other} = curr;
    preRes.id = other;
    return preRes;
  }, {});
}

console.log(mapId(users));

// READONLY
// If we want all the fields to be readonly and thus cannot alter any field value
type ReadOnlyUser = Readonly<User>;