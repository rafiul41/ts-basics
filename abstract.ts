// If we want to create a class that cannot be instantiated on its own
// Here the getSpecialAttack, getter name are the commonality between the 
// sub classes that will extend this abstract class and the sub classes 
// can implement the abstract methods according to their need
abstract class StreetFighter {
  fight() {
    console.log(`Attack with ${this.getSpecialAttack()}`);
  }

  abstract getSpecialAttack(): string;
  abstract get name(): string;
}

class Ryu extends StreetFighter {
  getSpecialAttack(): string {
    return 'Haduken';
  }
  get name(): string {
    return 'Ryu';
  }
}

class ChunLi extends StreetFighter {
  getSpecialAttack(): string {
    return 'Lightning kicks';
  }
  get name(): string {
    return 'Chun-Li';
  }
}

const ryu = new Ryu();
ryu.fight();

const chunli = new ChunLi();
chunli.fight();



