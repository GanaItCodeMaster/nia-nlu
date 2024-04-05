var reg = new RegExp(/\d+/);
var input = "my number is 9087654";
var result = input.match(reg);
console.log(result[0])
if(result){
     if(result[0].length ==10){
         console.log("10 digit number")
     }
     else if(result[0].length < 10){
         console.log("less than 10 digits")
     }
     else{
         console.log("more than 10 digits")
     }
}