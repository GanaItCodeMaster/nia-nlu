
	var data= [
		{
			"date": "16/12/2019",
			"time": "10:30 am",
			"status": "not-booked"
		},
		{
			"date": "18/12/2019",
			"time": "11:30 am",
			"status": "not-booked"
		},
		{
			"date": "19/12/2019",
			"time": "12:30 pm",
			"status": "not-booked"
		},
		{
			"date": "19/12/2019",
			"time": "09:30 pm",
			"status": "not-booked"
		},
		{
			"date": "21/12/2019",
			"time": "03:30 pm",
			"status": "not-booked"
		},
		{
			"date": "22/12/2019",
			"time": "04:30 pm",
			"status": "Booked"
		},
		{
			"date": "19/12/2019",
			"time": "08:30 pm",
			"status": "not-booked"
		}
	]
// var today = new Date("21/12/2019");
var tooday =new Date();
var today= "21/12/2019"
// console.log(JSON.stringify(today))
var times = tooday.getHours() + ":" + tooday.getMinutes();
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
function tConvert (time) {
    // Check correct time format and split into components
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : ' PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join (''); // return adjusted time or original string
  }
//  console.log(tConvert ('18:00'));
// var dd = today.getDate(); 
// var mm = today.getMonth() + 1; 
// var yyyy = today.getFullYear(); 
// if (dd < 10) { 
//     dd = '0' + dd; 
// } 
// if (mm < 10) { 
//     mm = '0' + mm; 
// } 
// var today = dd + '/' + mm + '/' + yyyy; 
for(var i=0;i<data.length;i++){
    data[i].time=get24hTime(data[i].time)
 if(data[i].date<today){
     data[i].date = today;
     data[i].status="not-booked";
    //  x[i].time=get24hTime(x[i].time)
 }
 if(data[i].status ==="not-booked" && data[i].time>times){
    // console.log(data[i].time)
   data[i].time =tConvert(data[i].time)
   console.log(data[i].time)

}}
