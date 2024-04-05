// var x="naveen"
// var y="'cooper'"
// console.log(x+""+y)
function email(data){
    var input =data;
    var val = /\S+@\S+\.\S+./g;
    var res = input.match(val);
    if(res === null){
        // context.session.valemail="notAvailable";
        console.log("true")
    }else{
        //  context.profile.profileinfo.email=context.entity.email;
        console.log("false")
    }   
    }
    email("naveenammiti@gmail.com")