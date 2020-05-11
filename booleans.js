// JavaScript File
document.getElementById("guess").onclick = function(){
let age = document.getElementById("age").value;
let day = document.getElementById("day").value;
if ((day == "Tuesday" || day == "Thursday") || (age > 12 && age < 21))
{
    alert(" Congrats!!You have a student price discount!!! You only have to pay $5.00");
}
else
{
    alert("You do not have a student price discount, You are too old, Get a life!!! ");
}
};
