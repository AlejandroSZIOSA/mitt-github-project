
const TidLimit=100000; // 3 seconds Countdown
const SummaRange= 40; // En variabel type const som tilldelar max range term,  [term+term]
const SlumpResultatRange= (SummaRange*2);//slump resultat max (50+50) = (50*2)

var timerElement = document.getElementById("StartTimer");/*En element är tilldelad till en variabel 
typ var som ska fungera i alla functioner*/
var SummaElement = document.getElementById("SlumpSumma");
var Resultat1Element = document.getElementById("resultat1");
var Resultat2Element = document.getElementById("resultat2");
var Resultat3Element = document.getElementById("resultat3");
var SummaVissa= document.getElementById("Summa");
var VissaDinResultat=document.getElementById("svaret");
var ImageBraGjort= document.getElementById("ImageBra");
var ImageFel=document.getElementById("ImageFel");
var ImageTimeOut=document.getElementById("ImageTimeOut");

//Starting elements values 
timerElement.disabled=true;
SummaVissa.innerHTML= ("|  ? + ?  | ");
Resultat1Element.disabled=true;
Resultat2Element.disabled=true;
Resultat3Element.disabled=true;
// Event som kör när Countdown knappen är tryck på
timerElement.addEventListener("click", function(){
	CountDown();
} );
// Event som kör när Slump Summa knappen är tryck på
SummaElement.addEventListener("click", function(){
	RestartBottoms();
	RandomSumma();
	RandomResultat();
	AddresultatToBottom();
} );
// Function Countdown som är en enkelt for loop och får man se resultat i Konsolen
function CountDown(){
	for(let i=0; i<=TidLimit; i++){
		console.log("Time is running");
	}
VissaDinResultat.style="color: tomato";
VissaDinResultat.innerHTML="<p> | TIME OUT | </p>";
ImageTimeOut.style.visibility = "visible";
}
// Skapar 3 slumpa sifror som är skickat till de 3 bottoms alternative
function RandomResultat(){
var Res1Ramdom, Res2Ramdom, Res3Ramdom;
Res1Ramdom=Math.floor(Math.random() * SlumpResultatRange);
Res2Ramdom=Math.floor(Math.random() * SlumpResultatRange);
Res3Ramdom=Math.floor(Math.random() * SlumpResultatRange);
Resultat1Element.innerHTML=(Res1Ramdom) ;
Resultat2Element.innerHTML=(Res2Ramdom) ;
Resultat3Element.innerHTML=(Res3Ramdom);
}
//Function som skapar en slumpvis summa och sen retornerar resultat (Summa resultat)
function RandomSumma() 
{
let num1, num2;
var SummaResultat;
num1=Math.floor(Math.random() * SummaRange); //Särskild random metod 
num2=Math.floor(Math.random() * SummaRange); //Särskild random metod
SummaResultat=num1+num2;
SummaVissa.innerHTML= '|  ' + num1 + " + " +  num2 +'  | ';
return(SummaResultat);
//console.log(SummaResultat);
}
//Event som väntar tills en element botoom är click på sen kontroller om rätt element användaren har cklick på
Resultat1Element.addEventListener("click", function(){
	if(Resultat1Element.clicked == true){
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
//Event som väntar tills en element botoom är click på sen kontroller om rätt element användaren har cklick på
Resultat2Element.addEventListener("click", function(){
	if(Resultat2Element.clicked == true){
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
//Event som väntar tills en element botoom är click på sen kontroller om rätt element användaren har cklick på
Resultat3Element.addEventListener("click", function(){
	if(Resultat3Element.clicked == true){
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
	var x =RandomSumma(); //Anropad metod som retornerar en nummer och sen tilldelar till en variabel
    let s = Math.floor(Math.random() * 3); //let variabel som funger bara i detta function
	switch (s+1) {
		case 1:
			Resultat1Element.innerHTML= (x);
			Resultat1Element.clicked=true;
			break;
		case 2:
			Resultat2Element.innerHTML= (x);
			Resultat2Element.clicked=true;
			break;
		case 3: 
		Resultat3Element.innerHTML= (x);
		Resultat3Element.clicked=true;
		break;
		
		default:
		  console.log("error"+s);
		  break;
	  }
}
//Function som vissar rätt svar och blockerar de knapperna som användare måste inte få tillgång  
function ToRevealeResultat(){
	if(Resultat1Element.clicked == true){
		Resultat1Element.setAttribute("style","background-color: rgb(98, 255, 132);");
		Resultat2Element.setAttribute("style","background-color: black");
		Resultat3Element.setAttribute("style","background-color: black");
		Resultat1Element.disabled=true;
		Resultat2Element.disabled=true;
		Resultat3Element.disabled=true;
		timerElement.disabled=true;
	} 
	else if (Resultat2Element.clicked == true){
		Resultat1Element.setAttribute("style","background-color: black");
		Resultat2Element.setAttribute("style","background-color: rgb(98, 255, 132);");
		Resultat3Element.setAttribute("style","background-color: black");
		Resultat1Element.disabled=true;
		Resultat2Element.disabled=true;
		Resultat3Element.disabled=true;
		timerElement.disabled=true;
	}
	else if (Resultat3Element.clicked == true){
		Resultat1Element.setAttribute("style", "background-color: black"  );
		Resultat2Element.setAttribute("style","background-color: black" );
		Resultat3Element.setAttribute("style","background-color: rgb(98, 255, 132);");
		Resultat1Element.disabled=true;
		Resultat2Element.disabled=true;
		Resultat3Element.disabled=true;
		timerElement.disabled=true;
	}
}
//Function som är kallad när användare har click rätt element bottom 
function BraGjort(){
	ImageBraGjort.style.visibility = "visible";
	VissaDinResultat.style="color: rgb(98, 255, 132)";
	VissaDinResultat.innerHTML="<p> | BRA | </p>" ;
	ImageTimeOut.style.visibility = "hidden";
	
} 
//Function som är kallad när användare har click Fel element bottom
function FelGjort(){
	ImageFel.style.visibility = "visible";
	VissaDinResultat.style="color: rgb(104, 152, 255)";
	VissaDinResultat.innerHTML="<p> | NICE TRY |  </p>";
	ImageTimeOut.style.visibility = "hidden";
}
//Function som är kallad för att starta om alla element bottom på en lämplig sätt
function RestartBottoms(){
	VissaDinResultat.innerHTML=" ";
	Resultat1Element.setAttribute("style","background-color: rgb(255, 255, 255);");
	Resultat2Element.setAttribute("style","background-color: rgb(255, 255, 255);");
	Resultat3Element.setAttribute("style","background-color: rgb(255, 255, 255);");
	Resultat1Element.clicked=false;
	Resultat2Element.clicked=false;
	Resultat3Element.clicked=false;
	Resultat1Element.disabled=false;
	Resultat2Element.disabled=false;
	Resultat3Element.disabled=false;
	timerElement.disabled=false;
	ImageBraGjort.style.visibility = "hidden";
	ImageFel.style.visibility = "hidden";
	ImageTimeOut.style.visibility = "hidden";
}