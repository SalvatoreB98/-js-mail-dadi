// EMAIL
var emailConsentite = ["salvatore.butera@gmail.com" ,"florian.leica@gmail.com", "flavio.cordari@gmail.com", "francesco.elia@gmail.com", "pinco", "pallino","admin"];

var emailUtente;

var isValid=false;



/* INPUT CONTROLLO MAIL */

emailUtente = prompt("inserire la mail consenita");

// CONTROLLA PER TUTTI GLI INDICI SE LA MAIL E' UGUALE A QUALLA INSERITA DALL'UTENTE
for(var i=0 ;  i<emailConsentite.length ;  i++){
    if( emailUtente == emailConsentite[i] ){
        isValid=true;
        console.log("email valida");
        document.getElementById("login-status").innerHTML = "LOGIN AVVENUTO CON SUCCESSO";
    }
}

if(isValid==false){
    console.log("Impossibile accedere, e-mail errata");
    document.getElementById("login-status").innerHTML = "EMAIL ERRATA";
}