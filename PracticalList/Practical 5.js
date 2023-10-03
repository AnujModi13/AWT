class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    displayDetails() {
      console.log(`Make: ${this.make}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, year, fuelType, mileage) {
      super(make, model, year);
      this.fuelType = fuelType;
      this.mileage = mileage;
    }
  
    displayDetails() {
      super.displayDetails();
      console.log(`Fuel Type: ${this.fuelType}`);
      console.log(`Mileage: ${this.mileage} miles per gallon`);
    }
  }
  
  class Motorcycle extends Vehicle {
    constructor(make, model, year, engineType, topSpeed) {
      super(make, model, year);
      this.engineType = engineType;
      this.topSpeed = topSpeed;
    }
  
    displayDetails() {
      super.displayDetails();
      console.log(`Engine Type: ${this.engineType}`);
      console.log(`Top Speed: ${this.topSpeed} mph`);
    }
  }
  
  // Example usage:
  
  const myCar = new Car("Ford", "Mustang classic", 1970 , "diesel", 200);
  myCar.displayDetails();
  
  const myMotorcycle = new Motorcycle("Toyota", "supra", 2018, "Gasoline", 160);
  myMotorcycle.displayDetails();
