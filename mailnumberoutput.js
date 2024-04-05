numbemail(context.user_message)
function numbemail(data){
           var input =data;
    var reg = new RegExp(/\d+/);
// var input = "my number is 9087654";
var numbresult = input.match(reg);
          
          
          var email =new RegExp(/\S+@\S+\.\S+./g);
          var emailres= input.match(email);
          
         
          var emailat =new RegExp(/\S+\.\S+./g);
          var emailresultat = input.match(emailat)
          
          
          
          var emaildot =new RegExp(/\S+@\S+/g);
          var emailresultsdot = input.match(emaildot)
          
                      var ree=[]
                      if(emailres){
                        // console.log(emailres);
                       ree.push(emailres)
                      }
                      else if(emailresultat){
                            // console.log("@ misses: "+ emailresultat)
                            ree.push("<p style='color:rgb(255,0,0);'>"+(emailresultat)+" ==> (Wrong Email: you have entered wrong email, Please provide valid email id!)</p>")
                      }
                      
                      else if(emailresultsdot){
                            // console.log("(.) misses: "+emailresultsdot)
                            ree.push("<p style='color:rgb(255,0,0);'>"+(emailresultsdot)+" ==> (Wrong Email: you have entered wrong email,  Please provide valid email id!)</p>")
                     }
                      
                      else{
                          ree.push(context.profile.profileinfo.email)
                      }
                      context.profile.profileinfo.email=ree
        
                    
                      
                      
                          if(numbresult){
                          var re=[];
                          if(numbresult[0].length === 10){
                                    re.push(numbresult[0]);
                                  }
                          else if(numbresult[0].length <10){
                                 re.push("<p style='color:rgb(255,0,0);'>"+(numbresult[0])+" ==> (WrongNumber: you provided Number is less than 10 digits)</p>");
                                  }
                          else if(numbresult[0].length > 10){
                                 re.push("<p style='color:rgb(255,0,0);'>"+(numbresult[0])+" ==> (WrongNumber: you provided Number is more than 10 digits)</p>");
                                  }
                                //   else{
                                //       re.push("<p style='color:rgb(255,0,0);'>"+(numbresult)+" ==> (WrongNumber: Please enter a valid numner)</p>");
                                //   }
                                //   console.log(re)
                                context.profile.profileinfo.phone =re;
                                
                                    //  context.profile.profileinfo.phone =re;
                                }
}


















    // //   var numb = new RegExp("\\+?\\(?\\d*\\)? ?\\(?\\d+\\)?\\d*([\\s./-]?\\d{2,})+", "g");
    //       var numb = new RegExp("\\+?\\(?\\d*\\)? ?\\(?\\d+\\)?\\d*([\\s\\-.]?\\d{2,})+", "g");
    //       var numbresult = input.match(numb);
    // //     input = input.split(" ").join("").split("-").join("");
    // //   var numbresult = input.match(/\d{10,}/)[0];
    //     //   var numbresult = parseInt(input.match(numb)[0].trim(), 10)
          