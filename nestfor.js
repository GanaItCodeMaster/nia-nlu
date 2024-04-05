var _= require('loadash');
var x=[
    {
        "name":"naveen",
        "id":1235,
        "pass":1235
    },{
        "name":"naveen",
        "pass":"naveen"
    }, {
        "name":"naveen",
        "pass":"12"
    },{
        "name":"naveen",
        "pass":"e"
    }
];

var student = _.find(x,{'id':1235,"password":1235});
    
    if(student){
       console.log("find")
    }
    else{
        console.log("false")
        }
