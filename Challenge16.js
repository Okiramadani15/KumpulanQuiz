class Tyre {
  constructor(brand,size) {
    this.brand = brand;
    this.size = size;
  }
}

class Car extends Tyre {
  constructor(brand,size,variant,door,seat,year,warranty) {
    super(brand,size);
    this.variant=variant;
    this.door = door;
    this.seat = seat;
    this.year = year;
    this.warranty = warranty;
    this.sn = Car.generateSerialNumber();
  }

  static generateSerialNumber() {
    const serialNumberLength = 36;
    const characters = "okiauto0987654321car123456789";
    let serialNumber = "";
    for (let i = 0; i < serialNumberLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      serialNumber += characters[randomIndex];
    }
    return serialNumber;
  }
}

class Agya extends Car {}

class Rush extends Car {}

class CarFactory {
  constructor() {
    this.cars = [];
  }

  static random() {
    return Math.floor(Math.random() * 9);
  }

  produce(year) {
    for (let i = 0; i < CarFactory.random(); i++) {
      this.cars.push(new Agya('dunlop',15,'Agya',4,5,year,3));
    }
    for (let i = 0; i < CarFactory.random(); i++) {
      this.cars.push(new Rush('brigestone',17,'Rush',5,7,year,1));
    }
  }

  guaranteeSimulation(year) {
    console.log("Hasil produksi:");
    this.cars.forEach((content, i) => {
      console.log(`
      no.${i + 1}
      varian    : ${content.variant}
      sn        : ${content.sn.toLowerCase()}
      door      : ${content.door}
      seat      : ${content.seat} 
      tyre      : ${content.brand} ${content.size} inch
      year      : ${content.year}
      warranty  : ${content.warranty}
      
        ---Status warranty on ${year} this guarantee status---
        ${year - content.year < content.warranty ? "active" : "expired"}`);
    });
  }
}

const toyota = new CarFactory();
toyota.produce(2020);
toyota.produce(2022);
toyota.guaranteeSimulation(2025);