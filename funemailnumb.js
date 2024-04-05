//  function numbemail(data){
//           var input =data;
//           var numb = new RegExp("\\+?\\(?\\d*\\)? ?\\(?\\d+\\)?\\d*([\\s./-]?\\d{2,})+", "g");
//           var email =new RegExp(/\S+@\S+\.\S+./g);
//           var numbresult = input.match(numb);
//           var emailres= input.match(email);
//           if(emailres){
//                         // console.log(emailres);
//                              context.profile.profileinfo.emai = emailres
//                       }
//                       if(numbresult){
//                           var re=[]
//                           if(numbresult[0].length === 11){
//                                     re.push(numbresult[0])
//                                   }
//                                 //   console.log(re)
//                                      context.profile.profileinfo.phone = re
//                                 }
// }
// // Email function
function email(data){
var input =data;
var val = /\S+@\S+\.\S+./g;
var res = input.match(val);
if(res === null){
    context.session.valemail="notAvailable";
}else{
     context.profile.profileinfo.email=res;
}   
}

// //Phone function
// function phone(data){
//     var input = data;
//     var results =input.replace( /,/g, "" );
// var regex = new RegExp("\\+?\\(?\\d*\\)? ?\\(?\\d+\\)?\\d*([\\s./-]?\\d{2,})+","g");
// var result = results.match(regex);
// // context.session.vall = typeof(result[0].length)
// // context.session.valu = result[0].length
// if(result[0].length===11)
// {
//     context.profile.profileinfo.phone = result[0]
// }
// else{
//          context.profile.profileinfo.phone ="(=>you provided Number is less than or more than 10 digits<=)"
//     }
// }


// //both number and email function
//  function numbemail(data){
//           var input =data;
//           var regex = new RegExp("\\+?\\(?\\d*\\)? ?\\(?\\d+\\)?\\d*([\\s./-]?\\d{2,})+", "g");
//           var reg =new RegExp(/\S+@\S+\.\S+./g);
//           var result = input.match(regex);
//           var res= input.match(reg);
//           var re=[]
//         if(result[0].length===11)
// {
//               re.push(result[0])
// }else{
//     re.push("(=>you provided Number is less than or more than 10 digits<=)")
// }
//           if(re&& result){
//               context.profile.profileinfo.email =res;
//              context.profile.profileinfo.phone =re;

//           }
//         }