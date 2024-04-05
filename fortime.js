var x=[{
    "time":"02:30 pm",
    "status":"booked",
    "date":"18/12/2019"
},
{
    "time":"8:30 pm",
    "status":"not-booked",
    "date":"19/12/2019"
},
{
    "time":"7:30 pm",
    "status":"booked",
    "date":"26/12/2019"
}]
var today = new Date();
var times = today.getHours() + ":" + today.getMinutes();
function get24hTime(str){
    str = String(str).toLowerCase().replace(/\s/g, '');
    var has_am = str.indexOf('am') >= 0;
    var has_pm = str.indexOf('pm') >= 0;
    // first strip off the am/pm, leave it either hour or hour:minute
    str = str.replace('am', '').replace('pm', '');
    // if hour, convert to hour:00
    if (str.indexOf(':') < 0) str = str + ':00';
    // now it's hour:minute
    // we add am/pm back if striped out before 
    if (has_am) str += ' am';
    if (has_pm) str += ' pm';
    // now its either hour:minute, or hour:minute am/pm
    // put it in a date object, it will convert to 24 hours format for us 
    var d = new Date("1/1/2011 " + str);
    // make hours and minutes double digits
    var doubleDigits = function(n){
        return (parseInt(n) < 10) ? "0" + n : String(n);
    };
    return doubleDigits(d.getHours()) + ':' + doubleDigits(d.getMinutes());
}
for(var i =0;i<x.length;i++){
    // console.log(convertTime12to24(x[i].time))
    x[i].time=get24hTime(x[i].time)
    // console.log(x[i].time)
    if(x[i].status ==="not-booked" && x[i].time > times ){
        console.log(x[i].time)
       
    }
}
  //  