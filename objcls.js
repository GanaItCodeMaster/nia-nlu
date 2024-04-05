class vehicle {
    constructor(name, maker, model){
        this.name = name,
        this.maker = maker,
        this.model= model
    }
    getDetails(){
        return 'the name of the vehicleis', this.name;
    }
}
let bike1= new vehicle('royal', 'royal','2010')
let bike2 = new vehicle('harley','david','2010')
console.log(bike2.name)
console.log(bike1.getDetails())