var esso = new Date("October 6, 2019").getTime();

var update = setInterval(function() {
    var current = new Date().getTime();
    var distance = esso - current;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m ";
}, 1000);
