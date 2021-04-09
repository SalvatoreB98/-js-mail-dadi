/* dichiarazioni variabili*/
var emailConsentite = ["salvatore.butera@gmail.com" ,"florian.leica@gmail.com", "flavio.cordari@gmail.com", "francesco.elia@gmail.com", "pinco", "pallino","admin"];

var emailUtente;

var isValid=false;

emailUtente = prompt("inserire la mail consenita");

for(var i=0 ;  i<emailConsentite.length ;  i++){
    if( emailUtente == emailConsentite[i] ){
        isValid=true;
        console.log("email valida");
    }
    console.log(i);
}
if(isValid==false){
    console.log("Impossibile accedere, e-mail errata");
}