var a = "3:10 PM";
var b = "7:45 AM";

var aDate = a.getTime();
var bDate = b.getTime();

if(aDate < bDate){
    console.log('a happened before b');
}else if (aDate > bDate){
    console.log('a happend after b');
}else{
    console.log('a and b happened at the same time')
}