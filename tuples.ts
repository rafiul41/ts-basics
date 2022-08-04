type ThreeDCoordinate = [x: number, y: number, z: number];

function addCoordinate(p1: ThreeDCoordinate, p2: ThreeDCoordinate): ThreeDCoordinate {
  return [
    p1[0] + p2[0],
    p1[1] + p2[1],
    p1[2] + p2[2]
  ];
}

console.log(addCoordinate([1, 2, 3], [4, 5, 6]));