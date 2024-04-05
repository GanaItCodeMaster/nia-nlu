
  var today = new Date(); 
  var times = today.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")
 
// console.log(JSON.stringify(times)) 
console.log(typeof(times))  
var time ="4:30 pm";
// console.log(JSON.stringify(time))
if(times > time){
    console.log("true")
}
else{
    console.log("false")
}