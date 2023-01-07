function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}


ElectricalAppliance.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
}


ElectricalAppliance.prototype.unplug = function() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
}


function Toster(name, brand, power, body, numberОfBranches) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.body = body;
    this.numberОfBranches = numberОfBranches;
    this.isPlugged = true;
}

Toster.prototype = new ElectricalAppliance();


function Computer(name, brand, power, screenDiagonal, functionality) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.screenDiagonal = screenDiagonal;
    this.functionality = functionality;
    this.isPlugged = false;
}

Computer.prototype = new ElectricalAppliance();


const homeToster = new Toster ("Home toster", "Braun", 700, "plastic", 2);

const homePC = new Computer("Laptop", "Intel", 1600, "15.6 inches", "gaming computer");


homeToster.unplug();
homePC.plugIn();


console.log(homePC)
console.log(homeToster)
