var timezone =prompt("Please inter your time");
var usertimeinint = parseInt(timezone);
if (usertimeinint >= 0000 && usertimeinint<1200){
    alert("Good Morning");
}
else if (usertimeinint >= 1200 && usertimeinint < 1700){
    alert("good afternoon")
}
else if (usertimeinint >= 1700 && usertimeinint < 2100){
    alert("good evening")
}
else {alert("good night");
}