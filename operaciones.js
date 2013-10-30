function suma()
{
var n1 = parseInt(document.getElementById("n1").value);
var n2 = parseInt(document.getElementById("n2").value);
var suma  = n1+n2;
document.getElementById("resul").value=suma;
} 
function resta()
{
var n1 = parseInt(document.getElementById("n1").value);
var n2 = parseInt(document.getElementById("n2").value);
var resta  = n1-n2;
document.getElementById("result").value=resta;
} 
function mult()
{
var n1 = parseInt(document.getElementById("n1").value);
var n2 = parseInt(document.getElementById("n2").value);
var mult  = n1*n2;
document.getElementById("result").value=mult;
} 
function divi()
{
var n1 = parseInt(document.getElementById("n1").value);
var n2 = parseInt(document.getElementById("n2").value);
var divi  = n1/n2;
document.getElementById("result").value=divi;
} 
function carga()
{
document.getElementById("btn1").onclick=suma;
document.getElementById("btn2").onclick=resta;
document.getElementById("btn3").onclick=mult;
document.getElementById("btn4").onclick=divi;

}
window.onload=carga;