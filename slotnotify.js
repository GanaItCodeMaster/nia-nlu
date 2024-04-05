var today= new Date();
var dd = today.getDate(); 
var mm = today.getMonth() + 1; 
var yyyy = today.getFullYear(); 
if (dd < 10) { 
    dd = '0' + dd; 
} 
if (mm < 10) { 
    mm = '0' + mm; 
} 
var today = yyyy + '/' + mm + '/' + dd; 
// console.log(typeof(today));
// 2019/12/27
var input ="2019/12/23"
	
var todayy = new Date(); 
  var times = todayy.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")
 
console.log((times))
var time = "11:30 AM";
if(time === "10:00 AM"){
    var tme ="09:30 AM"
    // console.log(tme)
}else if(time === "11:30 AM"){
    var tme = "12:03 PM"
}
if(input === today && tme ===times){
    console.log(true)
}else{
    console.log(false)
}
// if(input === today && time === "10:00 AM"){
//     console.log(true)
// }
// else{
//     console.log(false)
// }