

var timerElement = document.getElementById("StartTimer");
var SummaElement = document.getElementById("SlumpSumma");

timerElement.addEventListener("click", function(){
	CountDown();
} );

SummaElement.addEventListener("click", function(){
	document.getElementById('svaret').innerHTML=" ";
	document.getElementById('resultat1').setAttribute("style","background-color: yellow");
	document.getElementById('resultat2').setAttribute("style","background-color: yellow");
	document.getElementById('resultat3').setAttribute("style","background-color: yellow");
	RandomSumma();
	RandomResultat();
} );

function CountDown(){
	    const TidLimit=150000; //5 seconds
	for(let i=0; i<=TidLimit; i++){
		console.log("Time is running");
	}
	document.getElementById('svaret').innerHTML="<p> TIME OUT </p>";
	ToRevealeResultat();
}
function RandomResultat(){
var Res1Ramdom;
var Res2Ramdom;
Res1Ramdom=Math.floor(Math.random() * 40);
Res2Ramdom=Math.floor(Math.random() * 40);
document.getElementById('resultat1').innerHTML=(Res1Ramdom) ;
document.getElementById('resultat2').innerHTML=(Res2Ramdom) ;
var x=RandomSumma(); //Anropad metod
document.getElementById('resultat3').innerHTML= (x);
}
function Controllera_resultat(){
}
function RandomSumma() //Function som retornerar en nummer (Summa resultat)
{
var num1;
var num2;
var SummaResultat;
//var resulatat;
num1=Math.floor(Math.random() * 20); //random metod
num2=Math.floor(Math.random() * 20); //random metod
SummaResultat=num1+num2;
document.getElementById('Summa').innerHTML= num1 + " +  " +  num2;
return(SummaResultat);
//console.log()
}
resultat1.onclick = function()
{
document.getElementById('svaret').innerHTML="<p> FEL! </p>";
ToRevealeResultat();
}
resultat2.onclick = function()
{
document.getElementById('svaret').innerHTML="<p> FEL! </p>";
ToRevealeResultat();
} 
resultat3.onclick = function()
{
		document.getElementById('svaret').innerHTML="<p> BRA GJORT! </p>";
		ToRevealeResultat();
}
function ToRevealeResultat(){
	document.getElementById('resultat2').setAttribute("style","background-color: black");
	document.getElementById('resultat1').setAttribute("style","background-color: black");
	document.getElementById('resultat3').setAttribute("style","background-color: rgb(98, 255, 132);");
} 