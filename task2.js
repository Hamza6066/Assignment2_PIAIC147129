var SignalColour = prompt("what is your signal colour");
if(SignalColour==="green"){
    document.write("Move noe");
}
else if(SignalColour==="red"){
    document.write("Must Stop");
}
else if (SignalColour==="yellow"){
    document.write("Ready to go");
}
else {alert("not valid");
}