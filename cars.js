class Vehicle{
   //constructors
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
  //
    Information(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}
//invoke vehicle method
let myVehicle = new Vehicle(`VW`, `Golf`, 2008);
let info = myVehicle.Information();

//calling parent class
class Cars extends Vehicle {
    
    
    constructor(make, model, year, doors){
    super(make, model, year);
    this.doors = doors;
    }

Information(){
   // takes all other info from parent class
    super.Information();
    console.log(`Doors: ${this.doors}`);
}



}

let myCar = new Cars(`VW`, `Golf`, 2008, 5)
myCar.Information();








