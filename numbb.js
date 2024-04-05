
var input ="nnn@hh.com jdhj"
// var numb = new RegExp("[0-9]{10}")
// var numb = new RegExp("^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$")
var email =new RegExp(/\S+@\S+\.\S+./g);
var emailat =new RegExp(/\S+\.\S+./g);
var emaildot =new RegExp(/\S+@\S+/g);
var emailresult = input.match(email);
var emailresultat = input.match(emailat)
var emailresultsdot = input.match(emaildot)
// console.log(emailresultat)
// console.log(numbresult)
// console.log(emailresultsdot)
if(emailresult){
    console.log("original: "+emailresult)
}
else if(emailresultat){
    console.log("@ misses: "+ emailresultat)
}
else if(emailresultsdot){
    console.log("(.) misses: "+emailresultsdot)
}
// if(numbresult){
//     var re=[]
//     if(numbresult[0].length === 10){
//               re.push(numbresult[0])
//             }
// else if(numbresult[0].length < 11){
// re.push("<p style='color:rgb(255,0,0);'>"+(numbresult[0])+" ==> (WrongNumber: you provided Number is less than 10 digits)</p>")
// }
// else if(numbresult[0].length > 11){
// re.push("<p style='color:rgb(255,0,0);'>"+(numbresult[0])+" ==> (WrongNumber: you provided Number is more than 10 digits)</p>")
// }
//             console.log(re)
//          //  context.profile.profileinfo.phone = re
//           }