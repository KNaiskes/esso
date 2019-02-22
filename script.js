var esso = new Date("October 6, 2019").getTime();

var update = setInterval(function() {
    var current = new Date().getTime();
    var distance = esso - current;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("demo").innerHTML = days + " days left ";
}, 1000);
