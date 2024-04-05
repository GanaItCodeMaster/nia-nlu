var _ = require('lodash');

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
        "time": "11:00 AM",
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
            "date":"2019/12/16"
        },{
            "name":"naveen",
            "email":"naveenammiti@gmail.com",
            "date":"2019/12/16"
        }],
        "time": "09:00 PM",
        "status": "Booked"
    }
]
// removal of old slots
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
// Removing old slots

// const timeslts = [...timeslots]
// // console.log(timeslts)

// const answer = timeslts.map(timeSlot => {
//     return {
//         ...timeSlot, // this is called the spread operator
//         details: timeSlot.details.filter(detail => {
//             return new Date(detail.date).getTime() >= new Date(today).getTime()
//         })
//     }
// })
// console.log(answer)
// console.log(answer[0].details[0])



//current slots


var input = "2019/12/26";
var buttons = [
    
    {
        "slot": "09:30 AM",
        "status": "not-Booked"
    },
    {
        "slot": "10:00 AM",
        "status": "not-Booked"
    },
    {
        "slot": "10:30 AM",
        "status": "not-Booked"
    },
    {
        "slot": "11:00 AM",
        "status": "not-Booked"
    },
    {
        "slot": "11:30 AM",
        "status": "not-Booked"
    },
    {
        "slot": "07:00 PM",
        "status": "not-Booked"
    },
    {
        "slot": "07:30 PM",
        "status": "not-Booked"
    },
    {
        "slot": "08:00 PM",
        "status": "not-Booked"
    },
    {
        "slot": "08:30 PM",
        "status": "not-Booked"
    },
    {
        "slot": "09:00 PM",
        "status": "not-Booked"
    }
];
const timeslts = [...timeslots]
// console.log(timeslts)

const answer = timeslts.map(timeSlot => {
    return {
        ...timeSlot, // this is called the spread operator
        details: timeSlot.details.filter(detail => {
            return detail.date == input
            
            // detail.date == input
            // new Date(detail.date).getTime() >= new Date(today).getTime()
            
        })
    }
})
console.log(answer)
// var myCollection = {
//     "cars": [
//               { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
//               { "name":"BMW", "models":[ "320", "X3", "X5" ] },
//               { "name":"Fiat", "models":[ "500", "Panda" ] }
//             ]
//     }
    // timeslots.details.forEach(function (value) {
    //   //console.log("name" + value.name + ", models" + value.models);
    //   //for printing cars alonecars
    //   console.log(value.time);
    //   //for print models alone
    //   value.details.forEach(function (model) {
    //     console.log(details);
    //   });
    // });


// for (var i = 0; i < timeslots.length; i++) {
//     var exdates = timeslots[i].dates;
//     var result = _.filter(exdates, function (val) {
//         return val == input;
//     })
//     if (result.length > 0) {
//         var index = _.findIndex(buttons, { slot: timeslots[i].time });
//         buttons.splice(index, 1, { slot: timeslots[i].time, status: 'Booked' });
//     }
// }
// for (var l = 0; l < buttons.length; l++) {
//     // var newdate = new Date();
//     var b = input + ' ' + buttons[l].slot;
//     var aDate = new Date();
//     var bDate = new Date(b);
//     console.log("...............",b)
//     console.log(">>>>>>>",bDate)
//     if (aDate > bDate) {
//         var index = _.findIndex(buttons, { slot: buttons[l].slot });
//         buttons.splice(index, 1, { slot: buttons[l].slot, status: 'Booked' });
//     }
// }

// console.log("++++++++++++", buttons)








// //adding of new slots
// var fuInput = "2019/12/24";
// var fuTime = "05:30 PM";

// var exTime = _.find(timeslots, { "time": fuTime })
// // console.log(exTime)
// var datesList = exTime.dates;
// console.log(datesList)
// datesList.push(fuInput)


// console.log("++++++++", timeslots)


//current slots 
// var list=[]
// for (var i = 0; i < timeslots.length; i++) {
//     var exdates = timeslots[i].details[i].date
//     console.log(exdates)
//     for (var j = 0; j < exdates.length; j++) {
//         var newdate = new Date();
//         var presentDate = new Date(exdates[j]+' '+timeslots[i].time);
//         if (presentDate < newdate) {
//             //remove the date
//             // exdates.splice(exdates[j], 1)
//             console.log(true)

//         }
//     }
// }
// console.log("+++++++++++++", timeslots)
// for(var i =0;i<timeslots.length;i++){
//     if(timeslots[i].details[i].date<today){
//         list.push(
//             timeslots[i].details[i].date
//         )
//     }  
// }
// slots.reduceRight(function(acc, obj, idx) {
//     if (list.indexOf(obj.date) > -1)
//         slots.splice(idx,1);
// }, 0);
// // console.log(slots)
// console.log(list)
// console.log(timeslots[0].details[0].date)
