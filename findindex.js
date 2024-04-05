var _=require('lodash')
var timeslots = [
    {
        "details": [{
            "name":"naveen",
            "email":"naveenammiti@gmail.com",
            "date":"2019/12/16"
        },
        {
            "name":"naveen",
            "email":"naveenammiti@gmail.com",
            "date":"2019/12/26"
        }],
        "time": "09:30 AM",
        "status": "booked"
    },
    {
        "details": [{
            "name":"naveen",
            "email":"naveenammiti@gmail.com",
            "date":"2019/12/26"
        },{
            "name":"naveen",
            "email":"naveenammiti@gmail.com",
            "date":"2019/12/26"
        }],
        "time": "10:00 AM",
        "status": "Booked"
    }]
    var input = "2019/12/16";
    var buttons = [
    
        {
            "slot": "09:30 AM",
            "status": "not-Booked"
        },
        {
            "slot": "10:00 AM",
            "status": "not-Booked"
        }]
// var data=_.findIndex(users, function(o) { return o.user == 'barney'; });
// // => 0
// for(var i =0;i<timeslots.length;i++){
//     var data = timeslots[i].details;

//  for(j=0;j<data.length;j++){
//     var exdates = data[j].date
//     // console.log(exdates)
//     var result = _.filter(exdates, function (val) {
//                 return val == input;
//             })
//             console.log(result)
//             // console.log(input)
//             if (result.length > 0) {
//                 var index = _.findIndex(buttons, { slot: timeslots[i].time });
//                 console.log(index)
//                 buttons.splice(index, 1, { slot: timeslots[i].time, status: 'Booked' });
//             }
//             // console.log(index)
//         }

// }
// for (var l = 0; l < buttons.length; l++) {
//     // var newdate = new Date();
//     var b = input + ' ' + buttons[l].slot;
//     // console.log(b)
//     var aDate = new Date();
//     // console.log(aDate)
//     var bDate = new Date(b);
//     // console.log("...............",b)
//     // console.log(">>>>>>>",bDate)    
//     if (aDate > bDate) {
//         var index = _.findIndex(buttons, { slot: buttons[l].slot });
//         buttons.splice(index, 1, { slot: buttons[l].slot, status: 'Booked' });
//     }
// }
// console.log("++++++++++++", buttons) 

//  console.log(data)
// The `_.matches` iteratee shorthand.
// var dataa=_.findIndex(timeslots, { 'user': 'fred'});
// buttons.splice(dataa, 1, { user: users[0].user, status: 'Booked' });

// console.log(dataa)
// console.log(buttons)
// // // => 1
 
// // The `_.matchesProperty` iteratee shorthand.
// _.findIndex(users, ['active', false]);
// // => 0
 
// // The `_.property` iteratee shorthand.
// _.findIndex(users, 'active');
// => 2

var val = Math.floor(1000 + Math.random() * 9000);
var name="naveen kumar"
var email="naveen@123.com";
var id= val;
var inputt= fuInput;
 inputt.push({
     "name":name,
     "email":email,
     "id":id

 })
 console.log(inputt)
var fuTime = "10:30 AM";

var exTime = _.find(timeslots, { "time": fuTime })
// console.log(exTime)
var datesList = exTime.details;
// console.log(datesList)
datesList.push(fuInput)


console.log("++++++++", timeslots)