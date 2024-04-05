//both number and email function is 8686747505 navsp34@gmail.com
numbemail(" my emai is  8686747505 navsp34@gmail.com and numb ")
 function numbemail(data){
           var input =data;
           var numb = new RegExp("\\+?\\(?\\d*\\)? ?\\(?\\d+\\)?\\d*([\\s./-]?\\d{2,})+", "g");
           var email =new RegExp(/\S+@\S+\.\S+./g);
          var numbresult = input.match(numb);
          var emailres= input.match(email);
          if(emailres){
                        console.log(emailres);
                      }
                      if(numbresult){
                          var re=[]
                          if(numbresult[0].length === 11){
                                    re.push(numbresult[0])
                                  }
                                  console.log(re)
                                }

//           var re=[];
//         if(result[0].length===11)
// {
//                re.push(result[0]);
// }else{
//     re.push("(=>you provided Number is less than or more than 10 digits<=)");
// }
//           if(re&& result){
//               console.log(res);
//               console.log(re);
//           }
//           else if(res){
//             console.log(res);
//           }
//           else if(re){
//             console.log(re);
//           }
          
        }