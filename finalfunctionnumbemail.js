numbemail("9087654321")
function numbemail(data){
    var input =data;
 //   var numb = new RegExp("\\+?\\(?\\d*\\)? ?\\(?\\d+\\)?\\d*([\\s./-]?\\d{2,})+", "g");
var numb = new RegExp("\\+?\\(?\\d*\\)? ?\\(?\\d+\\)?\\d*([\\s\\-.]?\\d{2,})+", "g");
    var email =new RegExp(/\S+@\S+\.\S+./g);
   var numbresult = input.match(numb);
   var emailres= input.match(email);
   if(emailres){
                 console.log(emailres);
                //  context.profile.profileinfo.email = emailres;
               }
               console.log(numbresult[0].length)
               if(numbresult){
                   var re=[]
                   if(numbresult[0].length === 11){
                             re.push(numbresult[0])
                           }
else if(numbresult[0].length < 11){
  re.push("<p style='color:rgb(255,0,0);'>"+(numbresult[0])+" ==> (WrongNumber: you provided Number is less than 10 digits)</p>")
}
else if(numbresult[0].length > 11){
  re.push("<p style='color:rgb(255,0,0);'>"+(numbresult[0])+" ==> (WrongNumber: you provided Number is more than 10 digits)</p>")
}
                           console.log(re)
                        //  context.profile.profileinfo.phone = re
                         }
}