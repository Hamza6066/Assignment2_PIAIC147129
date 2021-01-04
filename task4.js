
var in1 = +prompt("Input 1st marks");
var in2 = +prompt("Input 2nd marks");
var in3 = +prompt("Input 3rd marks");
var s = in1 + in2 + in3;
//var sum = pasreInt(in1) + pasreInt(in2) + pasreInt(in3);
var t_sum = 300;
var div = s / 300;
var per = div * 100;


if (per >= 80)
{
	document.write("Total Marks "+ t_sum);
    document.write("<br>");
    
	document.write("obtain marks "+ s);
    document.write("<br>");
    
	document.write("Percentage "+per);
    document.write("<br>");
    
	document.write("Grade A-One");
    document.write("<br>");
    
	document.write("Excellent");
    
}
else if (per >= 70)
{
	document.write("Total Marks "+ t_sum);
    document.write("<br>");
    
	document.write("obtain marks "+ s);
    document.write("<br>");
    
	document.write("Percentage "+per);
    document.write("<br>");
    
	document.write("Grade A");
    document.write("<br>");
    
	document.write("Good");
    
}
else if (per >= 60)
{
	document.write("Total Marks "+ t_sum);
    document.write("<br>");
    
	document.write("obtain marks "+ s);
    document.write("<br>");
    
	document.write("Percentage "+per);
    document.write("<br>");
    
	document.write("Grade B");
    document.write("<br>");
    
	document.write("You Need to Improve");
}
else
{
	document.write("Total Marks "+ t_sum);
    document.write("<br>");
    
	document.write("obtain marks "+ s);
    document.write("<br>");
    
	document.write("Percentage "+per);
    document.write("<br>");
    
	document.write("Fail");
    document.write("<br>");
    
	document.write("Sorry!");
}
