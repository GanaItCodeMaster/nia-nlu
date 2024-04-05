var x=[{
    "time":"2:30 am",
    "status":"booked",
    "date":"18/12/2019"
},
{
    "time":"4:30 pm",
    "status":"not-booked",
    "date":"19/12/2019"
},
{
    "time":"3:30",
    "status":"booked",
    "date":"26/12/2019"
}]
var today = new Date(); 
// var times = today.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")
function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  
  console.log(formatAMPM(new Date));
// console.log(times)
var dd = today.getDate(); 
var mm = today.getMonth() + 1; 
var yyyy = today.getFullYear(); 
if (dd < 10) { 
    dd = '0' + dd; 
} 
if (mm < 10) { 
    mm = '0' + mm; 
} 
var today = dd + '/' + mm + '/' + yyyy; 
for(var i=0;i<x.length;i++){
 if(x[i].date<today){
     x[i].date = today;
     x[i].status="not-booked";
 }
//  console.log(x[i].date +" "+x[i].status)
}
for(var i =0;i<x.length;i++){
    if(x[i].status ==="not-booked"){
        // console.log(x[i].time)
        // if(x[i].time> times)
        // {
        //     console.log(x[i].time)
        // }
    }
}
   