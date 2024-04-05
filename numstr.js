
           reg("abcdef sjifdjkf sjdkA nav@gmail.com 8989878787");
           function reg(data){
           var input =data
           var regex = new RegExp("\\+?\\(?\\d*\\)? ?\\(?\\d+\\)?\\d*([\\s./-]?\\d{2,})+", "g");
           var reg =new RegExp(/\S+@\S+\.\S+./g);
          var result = input.match(regex)
          var res= input.match(reg)
        //   var re=[]
          if(res&& result){
             console.log(res)
             console.log(result)

          }
        }
        //    console.log(re)