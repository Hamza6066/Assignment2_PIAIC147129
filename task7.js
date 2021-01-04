var num1=prompt("Enter First Number");
var num2=prompt("Enter second Number");
var oprtr=prompt("select the operator from ( + , - , * , / , %) ");

if ("+"===oprtr){
    alert("your calculation is : "+parseInt(num1)+parseInt(num2));
}
if ("-"===oprtr){
    alert("your calculation is : "+parseInt(num1)-parseInt(num2));
}
if ("*"===oprtr){
    alert("your calculation is : "+parseInt(num1)*parseInt(num2));
}
if ("/"===oprtr){
    alert("your calculation is : "+parseInt(num1)/parseInt(num2));
}
if ("%"===oprtr){
    alert("your calculation is : "+parseInt(num1)%parseInt(num2));
}