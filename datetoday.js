function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [month, day, year].join('/');
}
console.log(formatDate("2019-12-29"))
// function getDayName(dateStr, locale)
// {
//     var date = new Date(dateStr);
//     return date.toLocaleDateString(locale, { weekday: 'long' });        
// }

// var dateStr = date;
// var day = getDayName(dateStr, "nl-NL");
// // console.log(dateStr)
var date=formatDate("2019-12-29");
console.log(date)
// var date =formatDate(context.entity.date.UTCday.UTCday);
// if(dateStr === "sunday"){
//     console.log("sunday");
// }else{
//     console.log("weekday")
// }