//creating class
class bmi{
    //adding constructors
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }
   //creating the method
    calculateBMI() {
        let bmi = this.weight / (this.height ** 2);
        return bmi;
    }

}

let myBmi = new bmi (2, 90);
let calculateBMI = myBmi.calculateBMI();
console.log(calculateBMI);