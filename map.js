
var persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  
  
  function getFullName(item) {
    var fullname = [item.firstname,item.lastname].join(" ");
    return fullname;
  }
  
  function myFunction() {
    return (persons.map(getFullName));
  }
console.log(myFunction())
// var numbers = [65, 44, 12, 4];
// var newarray = numbers.map(myFunction)

// function myFunction(num) {
//   return num * 10;
// }
// console.log(newarray)