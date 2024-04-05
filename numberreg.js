// var regex = /[\+]?\d{10}|\(\d{3}\)\s?-\d{6}/
// var re = new RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
let input = " is jhjh 984321";
// filter symbols which can separate phone number dights
input = input.split(" ").join("").split("-").join("");
let phoneNumber = input.match(/\d{10,}/)[0];
console.log(typeof(phoneNumber))
// let strings = ['my numberis 0987654321', 'my number 8 is 9087654321', 'my number 8 is 9087654321123', 'my number 8 is 9087654']
// let strings ="navsp34@gmail.com is my mail id"
// var numbresult = strings.match(re);
// console.log(numbresult)

// strings.forEach(str => {
//  let output = str.match(regex)
//  if(output){
//    console.log('number is valid', output[0])
//    return
//  }
//     console.log('number is not valid', output)
// })