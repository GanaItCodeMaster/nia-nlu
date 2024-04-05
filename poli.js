var slots=[
     {
        name:"shaolin",
        numnber:"8686747505",
        email:"nav@12.com",
        date:"2019/12/22",
        time:"09:30 AM"
    }, {
        name:"shaolin",
        numnber:"8686747505",
        email:"nav@12.com",
        date:"2019/12/21",
        time:"09:30 AM"
    }, {
        name:"shaolin",
        numnber:"8686747505",
        email:"nav@12.com",
        date:"2019/12/22",
        time:"09:30 AM"
    }, {
        name:"shaolin",
        numnber:"8686747505",
        email:"nav@12.com",
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
var list=[]
for(var i =0;i<slots.length;i++){
    if(slots[i].date<today){
        list.push(
            slots[i].date
        )
    }  
}
slots.reduceRight(function(acc, obj, idx) {
    if (list.indexOf(obj.date) > -1)
        slots.splice(idx,1);
}, 0);
console.log(slots)
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
for (var i = 0; i < slots.length; i++) {
    var exdates = slots[i].dates;
    var result = _.filter(exdates, function (val) {
        
        return val == input;
    });
    // context.session.result = result;
    // context.session.rel=context.entity.date;
    if (result.length > 0) {
        var index = _.findIndex(buttons, { slot: timeslots[i].time });
        buttons.splice(index, 1, { slot: timeslots[i].time, status: 'Booked' });
    }
}
