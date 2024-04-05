function person(firstName, lastName){
    this.firstName = firstName;
    this.lastName= lastName;
}
let person1= new person('mukul','lara')
let person2= new person("nvn","cooper")
console.log(person1.firstName)
console.log(person2.lastName)