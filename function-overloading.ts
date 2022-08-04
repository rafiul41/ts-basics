interface Coordinate {
  x: number,
  y: number
}

function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;

function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  if(typeof arg1 === 'object') {
    return {...(arg1 as Coordinate)};
  } else {
    return {
      x: arg1 as number,
      y: arg2 as number
    }
  }
}
