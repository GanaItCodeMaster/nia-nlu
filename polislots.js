// import { tpu } from "googleapis/build/src/apis/tpu";
var _=require('lodash')
var slots=[
    {
        name:"naveen",
        numnber:"8686747505",
        email:"nav@12.com",
        // id:val,
        date:"2019/12/22",
        time:"09:30 AM"
    },
    {
        name:"naveen",
        numnber:"8686747505",
        email:"nav@12.com",
        // id:val,
        date:"2019/12/22",
        time:"09:30 AM"
    },
    {
        name:"cooper",
        numnber:"8686747505",
        email:"nav@12.com",
        // id:val,
        date:"2019/12/23",
        time:"03:30 PM"
    }, {
        name:"shaolin",
        numnber:"8686747505",
        email:"nav@12.com",
        // id:val,
        date:"2019/12/24",
        time:"09:30 AM"
    },
]
var today= new Date();
var dd = today.getDate(); 
var mm = today.getMonth() + 1; 
var yyyy = today.getFullYear(); 
if (dd < 10) { 
    dd = '0' + dd; 
} 
if (mm < 10) { 
    mm = '0' + mm; 
} 
var today = yyyy + '/' + mm + '/' + dd; 
console.log(today)
var listToDelete =[]
console.log(listToDelete)
for(var i =0;i<slots.length;i++){
    if(slots[i].date<today){
  listToDelete.push(
     slots[i].date
  )
    }
}
// var listToDelete=(slots[i].date<today)
slots.reduceRight(function(acc, obj, idx) {
    if (listToDelete.indexOf(obj.date) > -1)
        slots.splice(idx,1);
}, 0);
console.log(slots[2].date)
// console.log(slots)