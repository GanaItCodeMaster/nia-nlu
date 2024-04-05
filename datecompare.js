
var x=[{
    "name":"naveen",
    "status":"booked",
    "date":"18/12/2019"
},
{
    "name":"cooper",
    "status":"booked",
    "date":"20/12/2019"
},
{
    "name":"shaolin",
    "status":"booked",
    "date":"16/12/2019"
}]
var today = new Date(); 
var dd = today.getDate(); 
var mm = today.getMonth() + 1; 
var yyyy = today.getFullYear(); 
if (dd < 10) { 
    dd = '0' + dd; 
} 
if (mm < 10) { 
    mm = '0' + mm; 
} 
var today = dd + '/' + mm + '/' + yyyy; 

//  console.log(today)
// var res=[]
for(var i =0;i<x.length;i++){
    
        if(x[i].date>=today){
            // console.log("equal")
            if(x[i].status==="booked"){
                console.log(x[i].name)
            }
        }
    else{
        console.log("smaller")
    }
}
