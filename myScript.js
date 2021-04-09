/* dichiarazioni variabili*/

var emailConsentite = ["salvatore.butera@gmail.com" ,"florian.leica@gmail.com", "flavio.cordari@gmail.com", "francesco.elia@gmail.com", "pinco", "pallino","admin"];

var emailUtente;

var isValid=false;

var dadoUtente;
var dadoPC;

/* INPUT CONTROLLO MAIL */

emailUtente = prompt("inserire la mail consenita");

// CONTROLLA PER TUTTI GLI INDICI SE LA MAIL E' UGUALE A QUALLA INSERITA DALL'UTENTE
for(var i=0 ;  i<emailConsentite.length-1 ;  i++){
    if( emailUtente == emailConsentite[i] ){
        isValid=true;
        console.log("email valida");
    }
}

if(isValid==false){
    console.log("Impossibile accedere, e-mail errata");
}

/* GIOCO DEI DADI */
if(isValid==true){
    dadoUtente= Math.floor(Math.random()*7+1);
    dadoPC= Math.floor(Math.random()*7+1.1);
    console.log("Il dado dell'utente e' " + dadoUtente);
    console.log("Il dado del PC e' " + dadoPC);
    
    // CONTROLLA CHI HA VINTO CON IL NUMERO MAGGIORE
    if(dadoUtente > dadoPC){
        console.log("l'utente ha vinto!");
    }
    else if(dadoPC > dadoUtente){
        console.log("Il pc ha vinto :(");
    }
    else{
        console.log("Pari!");
    }
}
