class ElectricalAppliance {
  constructor(name, power){
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }

  plugIn() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
  }


  unplug() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
  }
}


class Toster extends ElectricalAppliance {
  constructor (name, brand, power, body, numberОfBranches) {
    super(name, power);
    this.brand = brand;
    this.body = body;
    this.numberОfBranches = numberОfBranches;
    this.isPlugged = true;
  }
}


class Computer extends ElectricalAppliance {
  constructor(name, brand, power, screenDiagonal, functionality) {
    super(name, power);
    this.brand = brand;
    this.screenDiagonal = screenDiagonal;
    this.functionality = functionality;
    this.isPlugged = false;
  }
}


const homeToster = new Toster("Home toster", "Braun", 700, "plastic", 2);

const homePC = new Computer("Laptop", "Intel", 1600, "15.6 inches", "gaming computer");


homeToster.unplug();
homePC.plugIn();

console.log(homePC)
console.log(homeToster)