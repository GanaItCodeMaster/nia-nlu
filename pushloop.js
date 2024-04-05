var x =[
    {
        name:"naveen",
        email:"naveenammiti@gmail.com",
        value:"12"
    },
    {
        name:"vamsi",
        email:"naveenammiti@gmail.com"
    }
]
var res=[];
var input = "12";
for(var i =0;i<x.length;i++){
    if(x[i].value === input){
      res.push({
          name:x[i].name,
          email:x[i].email,
          value:x[i].value
      })
    }
}
console.log(res)
console.log(res[0].name)