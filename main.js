
const TidLimit=100000; //3 seconds
const SummaRange= 40;
const SlumpResultatRange= 80;
var timerElement = document.getElementById("StartTimer");
var SummaElement = document.getElementById("SlumpSumma");
var Resultat1Element = document.getElementById("resultat1");
var Resultat2Element = document.getElementById("resultat2");
var Resultat3Element = document.getElementById("resultat3");
var SummaVissa= document.getElementById("Summa");

timerElement.disabled=true;
SummaVissa.innerHTML= ("|  ? + ?  | ");


timerElement.addEventListener("click", function(){
	CountDown();
} );

SummaElement.addEventListener("click", function(){
	RestartBottoms();
	RandomSumma();
	RandomResultat();
	AddresultatToBottom();
	
} );

function CountDown(){
		for(let i=0; i<=TidLimit; i++){
			console.log("Time is running");
		}
	document.getElementById('svaret').innerHTML="<p> TIME OUT </p>";
}
function RandomResultat(){
var Res1Ramdom;
var Res2Ramdom;
var Res3Ramdom;
Res1Ramdom=Math.floor(Math.random() * SlumpResultatRange);
Res2Ramdom=Math.floor(Math.random() * SlumpResultatRange);
Res3Ramdom=Math.floor(Math.random() * SlumpResultatRange);
document.getElementById('resultat1').innerHTML=(Res1Ramdom) ;
document.getElementById('resultat2').innerHTML=(Res2Ramdom) ;
document.getElementById('resultat3').innerHTML=(Res3Ramdom);
}

function RandomSumma() //Function som retornerar en nummer (Summa resultat)
{
let num1;
let num2;
let SummaResultat;
//var resulatat;
num1=Math.floor(Math.random() * SummaRange); //random metod
num2=Math.floor(Math.random() * SummaRange); //random metod
SummaResultat=num1+num2;
document.getElementById('Summa').innerHTML= '|  ' + num1 + " + " +  num2 +'  | ';
return(SummaResultat);
//console.log(SummaResultat);
}

Resultat1Element.addEventListener("click", function(){

	if(document.getElementById("resultat1").clicked == true){
		BraGjort();
		//console.log("Correct");
		ToRevealeResultat(); 
		}
		else{ 
		FelGjort();
		//console.log("false");
		ToRevealeResultat();
		}
} );

Resultat2Element.addEventListener("click", function(){
	if(document.getElementById("resultat2").clicked == true){
		BraGjort();
		//console.log("Correct");
		ToRevealeResultat(); 
		}
		else{
		FelGjort();
		//console.log("false");
		ToRevealeResultat();
		}
} );

Resultat3Element.addEventListener("click", function(){
	
	if(document.getElementById("resultat3").clicked == true){
		ToRevealeResultat(); 
		BraGjort();
		//console.log("Correct");
		}
		else {
			FelGjort();
			ToRevealeResultat();
			//console.log("false");
		}
} );
//Function som Tilldelar resultat slumpvis i någon av de tre bottom som finns
function AddresultatToBottom(){
	var x=RandomSumma(); //Anropad metod
    var s = Math.floor(Math.random() * 2);
	switch (s+1) {
		case 1:
			document.getElementById('resultat1').innerHTML= (x);
			document.getElementById('resultat1').clicked=true;
			break;
		case 2:
			document.getElementById('resultat2').innerHTML= (x);
			document.getElementById('resultat2').clicked=true;
			break;
		case 3: 
		document.getElementById('resultat3').innerHTML= (x);
		document.getElementById('resultat3').clicked=true;
		break;
		default:
		  console.log("error"+s);
		  break;
	  }
}
function ToRevealeResultat(){
	if(document.getElementById("resultat1").clicked == true){
	
	document.getElementById('resultat1').setAttribute("style","background-color: rgb(98, 255, 132);");
	document.getElementById('resultat2').setAttribute("style","background-color: black");
	document.getElementById('resultat3').setAttribute("style","background-color: black");
	document.getElementById('resultat1').disabled=true;
	document.getElementById('resultat2').disabled=true;
	document.getElementById('resultat3').disabled=true;
	timerElement.disabled=true;
	} 
	else if (document.getElementById("resultat2").clicked == true){
	document.getElementById('resultat1').setAttribute("style","background-color: black");
	document.getElementById('resultat2').setAttribute("style","background-color: rgb(98, 255, 132);");
	document.getElementById('resultat3').setAttribute("style","background-color: black");
	document.getElementById('resultat1').disabled=true;
	document.getElementById('resultat2').disabled=true;
	document.getElementById('resultat3').disabled=true;
	timerElement.disabled=true;
	}
	else if (document.getElementById("resultat3").clicked == true){
	document.getElementById('resultat1').setAttribute("style","background-color: black");
	document.getElementById('resultat2').setAttribute("style","background-color: black");
	document.getElementById('resultat3').setAttribute("style","background-color: rgb(98, 255, 132);");
	document.getElementById('resultat1').disabled=true;
	document.getElementById('resultat2').disabled=true;
	document.getElementById('resultat2').disabled=true;
	timerElement.disabled=true;
	}
}

function BraGjort(){
	document.getElementById('svaret').innerHTML="<p> BRA  </p>";

} 
function FelGjort(){
	document.getElementById('svaret').innerHTML="<p> FEL  </p>";
}

function RestartBottoms(){
	document.getElementById('svaret').innerHTML=" ";
	document.getElementById('resultat1').setAttribute("style","background-color: rgb(255, 255, 255);");
	document.getElementById('resultat2').setAttribute("style","background-color: rgb(255, 255, 255);");
	document.getElementById('resultat3').setAttribute("style","background-color: rgb(255, 255, 255);");
	document.getElementById('resultat1').clicked=false;
	document.getElementById('resultat2').clicked=false;
	document.getElementById('resultat3').clicked=false;
	document.getElementById('resultat1').disabled=false;
	document.getElementById('resultat2').disabled=false;
	document.getElementById('resultat3').disabled=false;
	timerElement.disabled=false;

}