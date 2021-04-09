/* GIOCO DEI DADI */
var dadoUtente;

var dadoPC;

var vincitore;

dadoUtente= Math.floor(Math.random()*7+1);
dadoPC= Math.floor(Math.random()*7+1);
console.log("Il dado dell'utente e' " + dadoUtente);
console.log("Il dado del PC e' " + dadoPC);

// CONTROLLA CHI HA VINTO CON IL NUMERO MAGGIORE
if(dadoUtente > dadoPC){
    console.log("l'utente ha vinto!");
    vincitore = "utente";
}
else if(dadoPC > dadoUtente){
    console.log("Il pc ha vinto :(");
    vincitore = "pc";
}
else{
    console.log("Pari!");
    vincitore = "pari";
}


