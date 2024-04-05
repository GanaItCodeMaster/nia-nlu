function email(data){
var input =data;
var val = /\S+@\S+\.\S+./g
var res = input.match(val);
if(res === null){
    // context.session.valemail="notAvailable";
    console.log("true")
}else{
    //  context.profile.profileinfo.email=context.entity.email;
    console.log(data)
}   
}
email("naveenammiti@gmail.com")

function phone(data){
    var input = data;
var patt1 = /[0-9]/g;  
var result = input.match(patt1);
// console.log(result);
// var res = result[0];
if(result === null)
{
    // console.log("str is number")
    console.log("string")
}
else if(input.length>10){
    
        console.log("not_valid")
        
    }else{
         console.log(data)
    }
    // console.log("its ok not a problem we will get back to you")
}
phone("8686747505")