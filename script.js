var esso = new Date("October 6, 2019").getTime();

function daysToMonths(days) {
    var months = parseInt(days / 30);
    days = days - months * 30;
    var weeks = parseInt(days / 7);
    days = days - weeks * 7;
    return(months)
}

var update = setInterval(function() {
    var current = new Date().getTime();
    var distance = esso - current;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    months = daysToMonths(days);

    document.getElementById("inDays").innerHTML = days + " days left <hr/>";
    document.getElementById("inMonths").innerHTML = "In months: " + months;

    if(distance < 0) {
        clearInterval(esso);
        document.getElementById("inDays").innerHTML = "The day you have been waiting has come!";
    }
}, 1000);
