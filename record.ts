const ids: Record<number, string> = {
  10: 'rafi',
  11: 'ifti'
};

// Below cannot be done since the ids object is inferred to have only 10 and 11 keys
// for storing record we need to add the Record type
// The following will only work if record type is added 

ids[13] = 'random';

console.log(ids);
