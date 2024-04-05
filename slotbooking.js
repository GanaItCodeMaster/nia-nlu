var _ = require('lodash');

var timeslots = [
    {
        "dates": ["2019/12/17","2019/12/16","2019/12/18","2019/12/26","2019/12/28","2019/12/30"],
        "time": "10:30 AM",
        "status": "Booked"
    },
    {
        "dates": ["2019/12/23"],
        "time": "11:30 AM",
        "status": "Booked"
    },
    {
        "dates": ["2019/12/25"],
        "time": "12:30 PM",
        "status": "Booked"
    },
    {
        "dates": ["2019/12/15"],
        "time": "02:30 PM",
        "status": "Booked"
    },
    {
        "dates": ["2019/12/22"],
        "time": "03:30 PM",
        "status": "Booked"
    },
    {
        "dates": ["2019/12/20"],
        "time": "04:30 PM",
        "status": "Booked"
    },
    {
        "dates": ["2019/12/23"],
        "time": "05:30 PM",
        "status": "Booked"
    }
]


// // // removal of old slots
// for (var i = 0; i < timeslots.length; i++) {
//     var exdates = timeslots[i].dates;
//             //remove the date
//             var x = _.remove(exdates,function(val) {
//                 var newdate = new Date();
//                 var presentDate = new Date(val+' '+timeslots[i].time);
//                 if (presentDate < newdate) {
//                 return val;
//                 }
//             });
// }
// console.log("+++++++++++++", timeslots)




//current slots


// var input = "2019/12/23";
// var buttons = [
//     {
//         "slot": "10:30 AM",
//         "status": "not-Booked"
//     },
//     {
//         "slot": "11:30 AM",
//         "status": "not-Booked"
//     },
//     {
//         "slot": "12:30 PM",
//         "status": "not-Booked"
//     },
//     {
//         "slot": "02:30 PM",
//         "status": "not-Booked"
//     },
//     {
//         "slot": "03:30 PM",
//         "status": "not-Booked"
//     },
//     {
//         "slot": "04:30 PM",
//         "status": "not-Booked"
//     },
//     {
//         "slot": "05:30 PM",
//         "status": "not-Booked"
//     }
// ]
// for (var i = 0; i < timeslots.length; i++) {
//     var exdates = timeslots[i].dates;
//     // console.log(exdates)
//     var result = _.filter(exdates, function (val) {
//         return val == input;
//     })
//     console.log(result)
//     if (result.length > 0) {
//         var index = _.findIndex(buttons, { slot: timeslots[i].time });
//         buttons.splice(index, 1, { slot: timeslots[i].time, status: 'Booked' });
//     }
//     console.log(index)
// }

// for (var l = 0; l < buttons.length; l++) {
//     // var newdate = new Date();
//     var b = input + ' ' + buttons[l].slot;
//     var aDate = new Date();
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
var fuInput = "2019/12/26";
var fuTime = "11:30 AM";

var exTime = _.find(timeslots, { "time": fuTime })
// console.log(exTime)
var datesList = exTime.dates;
console.log(datesList)
datesList.push(fuInput)


// console.log("++++++++", timeslots)