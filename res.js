var _=require('lodash')
var timeslots = [
    {
        "details": [{
            "name":"naveen",
            "email":"naveenammiti@gmail.com",
            "date":"2019/12/16",
            "id":9946
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
    },
    {
        "details": [{
            "name":"naveen",
            "email":"naveenammiti@gmail.com",
            "date":"2019/12/26"
        },{
            "name":"naveen",
            "email":"naveenammiti@gmail.com",
            "date":"2019/12/23"
        }],
        "time": "10:30 AM",
        "status": "Booked"
    },
    {
        "details": [{
            "name":"naveen",
            "email":"naveenammiti@gmail.com",
            "date":"2019/12/16"
        },{
            "name":"naveen",
            "email":"naveenammiti@gmail.com",
            "date":"2019/12/16"
        }],
        "time": "11:00 AM",
        "status": "Booked"
    },
    {
        "details": [{
            "name":"naveen",
            "email":"naveenammiti@gmail.com",
            "date":"2019/12/16"
        },{
            "name":"naveen",
            "email":"naveenammiti@gmail.com",
            "date":"2019/12/16"
        }],
        "time": "11:30 AM",
        "status": "not-Booked"
    },
    {
        "details": [{
            "name":"naveen",
            "email":"naveenammiti@gmail.com",
            "date":"2019/12/16"
        },{
            "name":"naveen",
            "email":"naveenammiti@gmail.com",
            "date":"2019/12/16"
        }],
        "time": "07:00 PM",
        "status": "Booked"
    },
    {
        "details": [{
            "name":"naveen",
            "email":"naveenammiti@gmail.com",
            "date":"2019/12/16"
        },{
            "name":"naveen",
            "email":"naveenammiti@gmail.com",
            "date":"2019/12/16"
        }],
        "time": "07:30 PM",
        "status": "Booked"
    },
    {
        "details": [{
            "name":"naveen",
            "email":"naveenammiti@gmail.com",
            "date":"2019/12/16"
        },{
            "name":"naveen",
            "email":"naveenammiti@gmail.com",
            "date":"2019/12/16"
        }],
        "time": "08:00 PM",
        "status": "Booked"
    },
    {
        "details": [{
            "name":"naveen",
            "email":"naveenammiti@gmail.com",
            "date":"2019/12/16"
        },{
            "name":"naveen",
            "email":"naveenammiti@gmail.com",
            "date":"2019/12/16"
        }],
        "time": "08:30 PM",
        "status": "Booked"
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
        "time": "09:00 PM",
        "status": "Booked"
    }
]
var input =9946;
// ar timeslots=context.memory.timeslots;
// var input = context.entity.id;
for(var i=0;i<timeslots.length;i++){
    var data =timeslots[i].details;
    for(var j=0;j<data.length;j++){
        if(data[j].id === input){
            resname=data[j].name;
           resid=data[j].id;
            resemail=data[j].email;
            resdate=data[j].date;
            restime=timeslots[i].time;
        }
    }
}
console.log(resname + resdate+typeof(resid)+restime)
// var exdates = data[j].date
// var newdate = new Date();
//     var presentDate = new Date(exdates+' '+timeslots[i].time);
//     if (presentDate < newdate) {
//         //remove the date
//         _.remove(data, {
//             date: data[j].date
//         });
//     }
// console.log(timeslots)

// var input = "2019/12/16";
// var buttons = [
    
//     {
//         "slot": "09:30 AM",
//         "status": "not-Booked"
//     },
//     {
//         "slot": "10:00 AM",
//         "status": "not-Booked"
//     },
//     {
//         "slot": "10:30 AM",
//         "status": "not-Booked"
//     },
//     {
//         "slot": "11:00 AM",
//         "status": "not-Booked"
//     },
//     {
//         "slot": "11:30 AM",
//         "status": "not-Booked"
//     },
//     {
//         "slot": "07:00 PM",
//         "status": "not-Booked"
//     },
//     {
//         "slot": "07:30 PM",
//         "status": "not-Booked"
//     },
//     {
//         "slot": "08:00 PM",
//         "status": "not-Booked"
//     },
//     {
//         "slot": "08:30 PM",
//         "status": "not-Booked"
//     },
//     {
//         "slot": "09:00 PM",
//         "status": "not-Booked"
//     }
// ];
//current slots
// for(var i =0;i<timeslots.length;i++){
//     var data = timeslots[i].details;

//  for(j=0;j<data.length;j++){
//     var exdates = data[j].date
//     // console.log(exdates)
//     var result = _.filter(exdates, function (val) {
//                 return val == input;
//             })
//             // console.log(result)
//             // console.log(input)
//             if (result.length > 0) {
//                 var index = _.findIndex(buttons, { slot: timeslots[i].time });
//                 buttons.splice(index, 1, { slot: timeslots[i].time, status: 'Booked' });
//             }
//             // console.log(index)
//         }

// }
// // console.log(timeslots)
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




// adding of new slots
// var val = Math.floor(1000 + Math.random() * 9000);
// var fuInput = {
//     "name":"vamsi",
//     "email":"naveenammiti@gmail.com",
//     "date":"2019/12/29",
//     "id":val
// };
// var fuTime = "09:30 AM";

// var exTime = _.find(timeslots, { "time": fuTime })
// // console.log(exTime)
// var datesList = exTime.details;
// // console.log(datesList)
// datesList.push(fuInput)


// console.log("++++++++", timeslots[0].details[2])

// for(var i=0;i<timeslots.length;i++){
//     var data = timeslots[i].details
//     for(var j=0;j<data.length;j++){
//         if(data[j].id == fuInput.id){
//             console.log(true)
//         }
//     }
// }
// console.log(timeslots[0].details[1])