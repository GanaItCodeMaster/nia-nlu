function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}

var dateStr = '12/27/2019';
var day = getDayName(dateStr, "nl-NL");
console.log(day)
var datt='12/29/2019';